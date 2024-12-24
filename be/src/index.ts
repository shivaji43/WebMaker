require("dotenv").config()
import OpenAI from "openai";
const openai = new OpenAI();


async function main (){
    const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {"role":"system","content":"You are a helpful Assistant"},
            {"role": "user", "content": "Write me a whole code for a todo application in react within app.jsx file"},
        ],
        stream:true

    });
    for await (const chunk of stream){
        process.stdout.write(chunk.choices[0]?.delta?.content || '');
    }
}

main();