import { useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import { motion } from 'framer-motion'

// models
import IPromptResponse from '../../models/prompt'


// styles
import "./component.scss"
import { containerVariants, itemVariants } from '../../variants/variants'



type Props = {
    prompt: IPromptResponse
}
const Prompt = ({ prompt: { prompt, reply }, }: Props) => {
    const [showHasCopied, setShowHasCopied] = useState(false)


    // copy text to clipboard
    const copyReply = ()=> {

        navigator.clipboard.writeText(reply as string)
        setShowHasCopied(true)

        setTimeout(()=> setShowHasCopied(false), 1500)
    }

    return (
        <motion.div
            className='prompt_card'
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            
            {/* prompt */}
            <motion.div className='prompt_card__prompt' variants={itemVariants}>
                { prompt }
            </motion.div>

            {/* reply */}
            <motion.div className='prompt_card__reply' variants={itemVariants}>
                <motion.div className='prompt_card__reply_icon_container' onClick={copyReply} variants={itemVariants}>
                    { !showHasCopied && <AiOutlineCopy /> }
                    { showHasCopied && <small> Copied </small> }
                </motion.div>
                <motion.p className='prompt_card__reply__text' variants={itemVariants}>
                    { reply }
                </motion.p>
            </motion.div>

        </motion.div>
    )
}

export default Prompt
