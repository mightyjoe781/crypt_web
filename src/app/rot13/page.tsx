'use client'
import React, { useState } from 'react';


export default function base64() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [rotVal, setRotVal] = useState(13);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value)
  }

  const rotate = (input_string: string, rot_val: number) => {
    var encodedText = "";
    const abcd = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    for(let i = 0; i < input_string.length; i++) {
      var flag = false;
      for(let j = 0; j < 2; j++) {
        if(abcd[j].indexOf(input_string[i]) !== -1){
          flag = true;
          encodedText += abcd[j][(abcd[j].indexOf(input_string[i])+(rot_val%26))%26];
        }
      }
      if(flag === false)
        encodedText += input_string[i];
    }
    return encodedText;
  }

  const handleEncode = () => {
    setOutputText(rotate(inputText, rotVal));
  };

  const handleDecode = () => {
    setOutputText(rotate(inputText, rotVal));
  };
  const handleSwap = () => {
    if (outputText !== "") {
      setInputText(outputText);
      setOutputText("");
    }
  };
  const handleRotChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setRotVal(Number(event.target.value));
  }
  return (
    <div className='ui center aligned container calc'>
      <h2 className='h2'> ROT 13 (Ceaser Cipher)</h2>
      <div className='ui labeled input'>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          rows={4}
          cols={50}
          placeholder="Enter text to encode/decode"
        />
      </div>
      <div className='controls'>
        <button className='ui button' onClick={handleEncode}>Encode</button>
        <button className='ui button' onClick={handleDecode}>Decode</button>
        <button className='ui button' onClick={handleSwap}>Swap <i className='arrow up icon'></i></button>
        <label className='ui label'>Rot:</label>
        <input className='ui input' value={rotVal} onChange={handleRotChange} style={{'width':'4%'}} />
      </div>
      <div className='ui labeled input'>
        <textarea
          value={outputText}
          rows={4}
          cols={50}
          placeholder="Output will appear here"
        />
      </div>
      <h4 className='ui h4'> NOTE: ROT13(ROT13(x)) = x, where x is a latin alphabet.</h4>
    </div>
  )
}