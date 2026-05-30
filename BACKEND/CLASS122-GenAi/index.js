import "dotenv/config"
//Used to read line from the terminal
import readline from "readline/promises";


import { ChatMistralAI } from "@langchain/mistralai";     // Used to create a chat model for MistralAI and to create human messages
import { HumanMessage } from "@langchain/core/messages";  //import { HumanMessage } from "langchain";
import { tool } from "@langchain/core/tools";
import { createAgent } from "langchain";
import * as z from "zod"
import { sendEmail }from "./mail.service.js";


const emailTool = tool(
    
    sendEmail,
    {
        name: "emailTool",
        description: "Use this tool to send an email.",
        schema: z.object({
            to: z.string().describe("The email address of the recipient"),
            subject: z.string().describe("The subject of the email"),
            html: z.string().describe("The HTML content of the email")
        })
    }
)



// this rl is used to read input from the terminal and output to the terminal, 
// it is used to create a chat interface for the user to interact with the AI model.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// This creates a new instance of the ChatMistralAI model, which is a chat-based AI model that can generate responses 
// based on the input it receives.
const model = new ChatMistralAI({
    model: "mistral-small-latest",
    apiKey: process.env.MISTRAL_API_KEY
})

const agent = createAgent({
    model, 
    tools: [emailTool]
})

//Empty array to store the conversation history between the user and the AI model. 
// Each message will be stored as an instance of HumanMessage or the response from the model.
const messages = []


// This is an infinite loop that allows the user to continuously interact with the AI model.
while (true) {
    const userInput = await rl.question("\x1b[32mYou:\x1b[0m ")

    messages.push(new HumanMessage(userInput))
    
    const response = await agent.invoke({
        messages
    })

    messages.push(response.messages[response.messages.length - 1])
     console.log(response)

    //console.log(response.messages[response.messages.length - 1].text) :- Used to Print only the text response from the model, without any additional information or formatting.
     
    //console.log(`\x1b[34m[AI]\x1b[0m ${response.content}`)
}



rl.close()