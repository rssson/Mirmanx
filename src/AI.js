import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios'

function AI() {
    const genAI = new GoogleGenerativeAI("AIzaSyBiNA0JcGJYgkEuILwUC5RIEYP93tkMdqk");

const model = genAI.getGenerativeModel({ model: "gemini-pro"});
const [text, setText] = useState('');
const [prompt, setPrompt] = useState('');

  
// ...
async function run() {

  const result = await model.generateContent(document.getElementById("a").value);
  const response = await result.response;
  const text = response.text();
  document.getElementById("b").innerHTML = text;
}
  return (
    <div>
        <input id="a"/>
        <button onClick={run}>Submit</button>
        <h1 id="b"> </h1>
        </div>
  )
}

export default AI