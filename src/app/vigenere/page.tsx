'use client'
import React, { useState } from 'react';


export default function vigenere() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [key, setKey] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value)
  }

  const vigenere = (input_string: string, key: string, inst: string) => {
    var encodedText = "";
    var corrected_key = "";
    while(corrected_key.length < input_string.length) {
        corrected_key += key
    }
    corrected_key = corrected_key.substring(0, input_string.length);
    corrected_key = corrected_key.toLowerCase()

    const abcd = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    for(let i = 0; i < input_string.length; i++) {
      var flag = false;
      for(let j = 0; j < 2; j++) {
        var rot_sign = (inst === 'encode') ? 1 : -1;
        var rot_val = 26 + (rot_sign) * abcd[0].indexOf(corrected_key[i]);
        if(abcd[j].indexOf(input_string[i]) !== -1){
          flag = true;
          encodedText += abcd[j][(abcd[j].indexOf(input_string[i])+rot_val)%26];
        }
      }
      if(flag === false)
        encodedText += input_string[i];
    }
    return encodedText;
  }

  const handleEncode = () => {
    setOutputText(vigenere(inputText, key, "encode"));
  };

  const handleDecode = () => {
    setOutputText(vigenere(inputText, key, "decode"));
  };
  const handleSwap = () => {
    if (outputText !== "") {
      setInputText(outputText);
      setOutputText("");
    }
  };
  const handleKeyChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value.replaceAll('^[a-zA-Z]', ''));
  }
  return (
    <div className='ui center aligned container calc'>
      <h2 className='h2'> Vigenère cipher </h2>
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
      <div className='controls'>
        <label className='ui label'>Key :</label>
        <input className='ui input' value={key} onChange={handleKeyChange} />
      </div>
      <div className='ui labeled input'>
        <textarea
          value={outputText}
          rows={4}
          cols={50}
          placeholder="Output will appear here"
        />
      </div>
      <h4 className='ui h4'> NOTE: If key is shorter than text, its repeated until its length is same as text to be encrypted/decrypted!</h4>
    </div>
  )
}