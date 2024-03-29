import React, { useState } from 'react';
import backgroundImage from '../assets/ai.png';
import axios from 'axios';
import { RiseLoader } from 'react-spinners';

const ChatModel = () => {
  const [textInput, setTextInput] = useState('');
  const [result, setResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
  
    const url = 'https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '925d8e1f17msh8090987c28f87ebp188b88jsn4ee005ba97cd',
        'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
      },
      data: JSON.stringify({
        query: textInput // Use the state variable
      })
    };
  
    try {
      const response = await axios(url, options);
      // Extracting the response from the API response object
      if(response.data && response.data.response) {
        setResults(response.data.response);
      } else {
        // Handle case where the expected data might not be present
        setResults("Received unexpected response structure.");
      }
    } catch (error) {
      console.error('Error querying model:', error);
      setResults("An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-darkblue to-black relative">
      <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundPositionY: '-170px' }}></div>
      <div className="flex flex-col w-full h-full relative">
        <div className="w-full my-10 h-full p-8 px-10 lg:px-20 pt-2 flex flex-col justify-center text-center items-center align-middle">
          <h1 className="text-3xl lg:text-5xl font-bold fontS mb-4 text-white">CHAT WITH AI</h1>
          <input type="text" className='w-full rounded mt-2 p-5 text-black' placeholder="e.g. You are a sales copywriter. Write an email that will persuade anyone who reads it to become a customer. My business does..." value={textInput} onChange={handleInputChange} />
          <button onClick={handleSubmit} className="mt-10 mb-6 inline-block text-white bg-purple-500 rounded px-6 py-2 hover:bg-purple-400">Submit</button>
          {isLoading && <div className='mt-10'><RiseLoader color="rgb(168 85 247)" /></div>}
          {result && (
            <div className="text-white mt-3 p-4 bg-gray-900 text-start rounded">
              <p className="font-bold underline">Response:</p>
              <p>{result}</p> 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatModel;
