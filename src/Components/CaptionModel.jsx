import React, { useState } from 'react';
import backgroundImage from '../assets/ai.png'
import axios from 'axios';
import { RiseLoader } from 'react-spinners';
const CaptionModel = () => {
  const [result, setResults] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading]=useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error('No file selected');
      return;
    }
    setIsLoading(true);
    try {
      const base64Data = await getBase64(file);
      const response = await queryModel(base64Data);
      console.log(response);
      setResults(response[0].generated_text)
      setIsLoading(false)
    } catch (error) {
      console.error('Error querying model:', error);
    }
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePreview(reader.result);
        resolve(reader.result.split(',')[1]);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const queryModel = async (base64Data) => {
    try {
      const response = await axios.post(
     "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large",

     {
      inputs: {
        image: base64Data
      }
    },
        {
          headers: {
            Authorization: "Bearer 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",
            "Content-Type": "application/json"
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-darkblue to-black relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage}`, backgroundPositionY: '-170px' }}></div>
      <div className="flex flex-col w-full h-full relative">
        <div className="w-full h-full p-8 px-10 lg:px-20 pt-2 flex flex-col justify-center text-center items-center align-middle">
          <h1 className="text-3xl lg:text-5xl font-bold fontS mb-4 text-white">Image Caption</h1>
          <p className="text-xl text-gray-300">Upload an image to see it's caption</p>


          <div className="lg:w-2/3 text-center">
            <label htmlFor="fileUpload" className="mt-10 mb-6 inline-block text-white bg-purple-500 rounded px-6 py-2 hover:bg-purple-400 cursor-pointer">Upload</label>
            <input id="fileUpload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            {imagePreview &&
              <> <p className="text-white font-bold underline text-start">Preview:</p>
                <img src={imagePreview} alt="Preview" className="mt-4 border border-gray-500 rounded" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              </>
            }

            {isLoading && !result &&
            <div className='mt-10'>           
               <RiseLoader color="rgb(168 85 247)" />
            </div>
            }
            {result && (
              <> <p className="text-white mt-3 font-bold underline text-start">Generated Caption:</p>
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

export default CaptionModel;