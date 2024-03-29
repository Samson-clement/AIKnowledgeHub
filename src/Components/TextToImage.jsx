import React, { useState } from 'react';
import backgroundImage from '../assets/ai.png'
import axios from 'axios';
import { RiseLoader } from 'react-spinners';



const TextToImage = () => {
  const [textInput, setTextInput] = useState('');
  const [resultImg, setResultImg] = useState(null);
  const [isLoading, setIsLoading]=useState(false);


  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await query({ "inputs": textInput });
      setResultImg(response.data);
      console.log(response)
      setIsLoading(false);

    } catch (error) {
      console.error('Error querying model:', error);
      setResultImg(null);
    }
  };

  const query = async (data) => {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        data,
        {
          headers: { Authorization: "Bearer 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" },
          responseType: 'blob'
        }
      );
      return response;

    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex-col pt-40    justify-center items-center min-h-screen bg-gradient-to-br from-darkblue to-black relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage}`, backgroundPositionY: '-170px' }}></div>
      <div className="flex flex-col w-full h-full relative">
        <div className="w-full h-full p-8 px-10 lg:px-20 pt-2 flex flex-col justify-center items-center align-middle">
          <h1 className="text-3xl lg:text-5xl font-bold fontS mb-4 text-white">TEXT TO IMAGE</h1>
          <p className="text-xl text-gray-300">Turn your imagination into real image using Artificial Intelligence</p>

          <div className="lg:w-2/3 text-center">
          <p className="text-xl text-gray-300 text-start mt-6 mb-2">Write something and submit to see magic</p>
            <input type="text" className='w-full rounded mt-2 p-5' placeholder="e.g. a cat sitting on a elephant" value={textInput} onChange={handleInputChange} />
            <button onClick={handleSubmit} className="mt-10 mb-6 inline-block text-white bg-purple-500 rounded px-6 py-2 hover:bg-purple-400">Submit</button>
           
            {isLoading && !resultImg &&
            <div className='mt-10'>           
               <RiseLoader color="rgb(168 85 247)" />
            </div>
            }
            {
              resultImg ? 
              <><p className="text-white my-3 font-bold underline text-start">Generated Image:</p>
              <img className='max-w-full' src={URL.createObjectURL(resultImg)} alt="" />
              </>
              : ''}
          </div>
        </div>
      </div>
      
    </div>

    
  );
}

export default TextToImage;