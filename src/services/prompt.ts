import IPromptResponse from "../models/prompt";

const serverURL: string = 'https://xqwbyqql42.execute-api.us-west-1.amazonaws.com/prompts';


// gets the reply for the given prompt from yoda ai
export const getPrompt = async ({ prompt }: { prompt: string }): Promise<IPromptResponse | null> => {
    
    try {
    
        const request = await fetch(
            serverURL,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt, })
            }
        )
    
        const response = await request.json()

        return response
    } catch (error) {
        
        return null
    }
}
