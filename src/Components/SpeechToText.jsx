import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/ai.png'
import { Button, message } from 'antd';


const Speak = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    });
  };
  return (
    <>
      {contextHolder}
      <Button className='' onClick={success}>Customized display duration</Button>
    </>
  );
};

const SpeechToText = () => {
    const [recognition, setRecognition] = useState(null);
    const [text, setText] = useState('');

    useEffect(() => {
        const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (speechRecognition) {
            const recognitionInstance = new speechRecognition();
            recognitionInstance.lang = navigator.language || 'en-US';
            recognitionInstance.interimResults = true;
            recognitionInstance.onresult = (event) => {
                const currentResult = event.results[event.results.length - 1][0].transcript;
                setText(currentResult);
            };
            setRecognition(recognitionInstance);
        }
    }, []);

    const startListening = () => {
        if (recognition) {
          recognition.start();
          message.success({
            content: 'Listening started, speak now...',
            duration: 5,
          });
        }
      };
    const stopListening = () => {
    if (recognition) {
        recognition.stop();
        message.info({
        content: 'Listening stopped.',
        duration: 5,
        });
    }
    };


    return (
        // <div className="Sevcontainer">
        //     <h1 className="Sevtitle">Speech-to-Text AI</h1>
        //     <textarea id="Sevresult" rows="8" className="Sevform-control" value={text}></textarea>
        //     <div className="Sevbuttons">
        //         <button className="Sevbtn" onClick={startListening}>Start</button>
        //         <button className="Sevbtn" onClick={stopListening}>Stop</button>
        //     </div>

        //     <div className="flex-col pt-40    justify-center items-center min-h-screen bg-gradient-to-br from-darkblue to-black relative"> 
        //     </div>



        // </div>

        <div className="flex-col pt-40    justify-center items-center min-h-screen bg-gradient-to-br from-darkblue to-black relative">

        <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage}`, backgroundPositionY: '-170px' }}></div>
        <div className="flex flex-col w-full h-full relative">
        <div className="w-full h-full p-8 px-10 lg:px-20 pt-2 flex flex-col justify-center items-center align-middle">
          <h1 className="text-3xl lg:text-5xl font-bold fontS mb-4 text-white">SPEECH TO TEXT</h1>
          <p className="text-xl text-gray-300">Turn your words into computer text using Artificial Intelligence</p>

          <div className="lg:w-2/3 text-center">
          <p className="text-xl text-gray-300 text-start mt-6 mb-2">Press Start and say something to see magic</p>
          <textarea rows="3" className="w-full rounded mt-2 p-5" placeholder='e.g. does this still work ?' value={text}></textarea>
          <div className="Sevbuttons">
                 <button className="mt-10 mb-6 mr-10 inline-block text-white bg-purple-500 rounded px-6 py-2 hover:bg-purple-400" onClick={startListening}>Start</button>
                 <button className="mt-10 mb-6 inline-block text-white bg-purple-500 rounded px-6 py-2 hover:bg-purple-400" onClick={stopListening}>Stop</button>
             </div>
          </div>

          </div>

        </div>
        </div>
    );
};

export default SpeechToText;
