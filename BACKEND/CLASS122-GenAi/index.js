import "dotenv/config"
//Used to read line from the terminal
import readline from "readline/promises";

// Used to create a chat model for MistralAI and to create human messages
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from "langchain";


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

//Empty array to store the conversation history between the user and the AI model. 
// Each message will be stored as an instance of HumanMessage or the response from the model.
const messages = []


// This is an infinite loop that allows the user to continuously interact with the AI model.
while (true) {
    const userInput = await rl.question("\x1b[32mYou:\x1b[0m ")

    messages.push(new HumanMessage(userInput))
    
    const response = await model.invoke(messages)

    messages.push(response)

    console.log(`\x1b[34m[AI]\x1b[0m ${response.content}`)
}



rl.close()