import { useEffect, useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai'
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';


// components
import PromptCard from "./components/prompt/component"
import Header from './components/header/component';
import NoPrompts from './components/no_prompts/component';


// models
import IPromptResponse from './models/prompt';

// services
import { getPrompt, } from "./services/prompt"

// styles
import './App.scss';


function App() {
  const promptListRef = useRef<HTMLDivElement | null>(null)
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [prompts, setPrompts] = useState<Array<IPromptResponse>>([])


  // submits prompt for a reply
  const submitPrompt = async (): Promise<void> => {

    console.log("submitPrompt called");
    if( !prompt || isLoading ) return

    setIsLoading(true)
    const data: IPromptResponse | null = await getPrompt({ prompt, })

    console.log('====================================');
    console.log("data ", data);
    console.log('====================================');
    if( !data ) {
      setIsLoading(false)
    }

    setPrompts([ ...prompts, { prompt, reply: data?.reply, } ])
    setPrompt('')
    setIsLoading(false)

    if( promptListRef.current ) promptListRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(()=> {

    console.log('====================================');
    console.log("extension url is ", chrome.runtime.getURL('index.html'));
    console.log('====================================');
  }, [])

  // opens debug window
  // open the extension in new tab
  const openDebugWindow = ()=> {

    chrome.tabs.create({'url': chrome.runtime.getURL('index.html')}, function(_tab) {
       
      console.log('====================================')
      console.log("open the extension in new tab")
      console.log('====================================')
    })
  }

  return (
    <div className="App">

      {/* header */}
      <Header />

      {/* prompts */}
      <div className='prompts_list'>
        {
          prompts.map((prompt, index)=> {

            return (
              <PromptCard key={index} prompt={prompt} />
            )
          })
        }
        <div className='prompts_list_pad'  ref={promptListRef} />
      </div>

      { !prompts.length && <NoPrompts /> }

      {/* Debug */}
      {/* <Button onClick={openDebugWindow}>
        Open Debug Window
      </Button> */}

      {/* prompt input */}
      <div className="row prompt_input">

        {/* input */}
        <textarea
          className="prompt_input_input"
          placeholder="Ask Yoda..."
          value={prompt}
          onChange={
            (e)=> setPrompt(e.target.value)
          }
        />

        {/* submit button and progress */}
        <div className='prompt_input__icon' onClick={submitPrompt}>
          { !isLoading && <AiOutlineSend size={20} /> }
          { isLoading && <CircularProgress size={20} style={{ color: 'orange', }} /> }
        </div>

      </div>
    </div>
  );
}

export default App;
