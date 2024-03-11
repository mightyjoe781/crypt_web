'use client'
import React, { useState } from 'react';


export default function Base64() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value)
  }

  const handleEncode = () => {
    const encodedText = btoa(inputText);
    setOutputText(encodedText);
  };

  const handleDecode = () => {
    const decodedText = atob(inputText);
    setOutputText(decodedText);
  };

  const handleSwap = () => {
    if (outputText !== "") {
      setInputText(outputText);
      setOutputText("");
    }
  };

  return (
    <div className="ui center aligned container calc">
      <h2 className='h2'> base64 </h2>
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
      </div>
      <div className='ui labeled input'>
        <textarea
          value={outputText}
          rows={4}
          cols={50}
          placeholder="Output will appear here"
        />
      </div>
    </div>
  )
}