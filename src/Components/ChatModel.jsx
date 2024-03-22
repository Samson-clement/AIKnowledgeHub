import React, { useState } from 'react';
import backgroundImage from '../assets/ai.png'
import axios from 'axios';
import { RiseLoader } from 'react-spinners';


const ChatModel = () => {
  const [textInput, setTextInput] = useState('');
  const [context, setContext] = useState('');
  const [result, setResults] = useState('');
  const [isLoading, setIsLoading]=useState(false);



  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };
  const handleContextChange = (event) => {
    setContext(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await query({"inputs": {
        "question": textInput,
        "context": context
      }});
      setResults(response.data.answer);
      console.log(response)
      setIsLoading(false);

    } catch (error) {
      console.error('Error querying model:', error);
      setResults(null);
    }
  };

  const query = async (data) => {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
        data,
        {
          headers: { Authorization: "Bearer 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",
          "Content-Type": "application/json"
         },
        }
      );
      return response;

    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-darkblue to-black relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage}`, backgroundPositionY: '-170px' }}></div>
      <div className="flex flex-col w-full h-full relative">
        <div className="w-full h-full p-8 px-10 lg:px-20 pt-2 flex flex-col justify-center text-center items-center align-middle">
          <h1 className="text-3xl lg:text-5xl font-bold fontS mb-4 text-white">QUESTION ANSWERING</h1>
          <p className="text-xl text-gray-300">Provide context and ask what'ever you want to ask within seconds</p>

          <div className="lg:w-2/3 d-flex justify-center text-center">
          <p className="text-xl text-gray-300 text-start mt-6 mb-2">Context</p>
            <input type="text" className='w-full rounded mt-2 p-5' placeholder="e.g. a cat sitting on a elephant and has black color." value={context} onChange={handleContextChange} />


          <p className="text-xl text-gray-300 text-start mt-6 mb-2">Ask whatever you want to ask</p>
            <input type="text" className='w-full rounded mt-2 p-5' placeholder="e.g. What is the color of cat?" value={textInput} onChange={handleInputChange} />

   
            <button onClick={handleSubmit} className="mt-10 mb-6 inline-block text-white bg-purple-500 rounded px-6 py-2 hover:bg-purple-400">Submit</button>
           
            {isLoading && !result &&
            <div className='mt-10'>           
               <RiseLoader color="rgb(168 85 247)" />
            </div>
            }

            {result && (
              <> <p className="text-white mt-3 font-bold underline text-start">Generated Text:</p>
                <div className="border border-gray-500 rounded mt-4 p-4 bg-gray-900 text-white  text-start">
                  <p>{result}</p>
                </div>
              </>)}
          </div>
        </div>


      </div>
    </div>
  );
}

export default ChatModel;