import React from 'react';
import HeroImage from '../assets/Network.png'
import backgroundImage from '../assets/ai.png'
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className="flex flex-col justify-center h-full items-center bg-gradient-to-br from-darkblue to-black">
      <div className="flex flex-col-reverse md:flex-row w-full min-h-screen">
        <div className="w-full md:w-1/2 p-8 md:px-20 pt-2 flex flex-col justify-center items-center align-middle">
          <h1 className="text-5xl font-bold fontS mb-4 text-white font-signika-negative">  Explore the Future in A.I. Everything's on the brink of change!</h1>
          <p className="text-xl text-gray-300">Unlock the mysteries of AI and explore a world brimming with possibilities. Learn how artificial intelligence has progressed over the years and experience live demonstrations that showcase how it's empowering us to achieve the once unthinkable. </p>
        </div>
        <div className="w-full md:w-1/2 p-8 flex justify-center items-center">
          <img className="w-full h-auto" src={HeroImage} alt="Placeholder" />
        </div>
      </div>

      <div className='w-full h-full mb-10'>
        <div className="bg-black text-white mx-8 lg:mx-20 p-8 flex flex-col">
          <div className="flex flex-col lg:flex-row w-full lg:m-3">
            <div className='lg:w-1/3'>
              <div className="w-10 h-1 bg-gradient-to-r from-gray-100 to-purple-800 mb-1"></div>
              <h1 className="font-bold text-white text-xl max-md:mb-3">What is A.I.?</h1>
            </div>
            <div className='lg:w-2/3'>
              <p>Artificial Intelligence (AI), is a field of computer science that creates systems capable of performing tasks that would typically require human intelligence. These tasks include learning, reasoning, problem-solving, understanding language, and recognizing patterns. AI can process large amounts of data and make decisions, learn from experiences, adapt to new inputs, and perform human-like tasks with increasing autonomy.</p>
            </div>
          </div>

          <h1 className="font-bold text-white text-xl lg:text-3xl lg:mx-3 my-12">Some Demonstrations of Artificial Intelligence:</h1>

          <div className="flex max-md:flex-col">
            <div className='lg:w-1/3 m-3 max-md:mx-0'>
              <div> <div className="w-10 h-1 flex flex-col bg-gradient-to-r from-gray-100 to-purple-800 mb-1"></div>
                <h1 className="font-bold text-white text-lg">Handwriting Image to Text</h1></div>
              <p>
                Handwriting recognition, or Image to Text conversion, enables the conversion of handwritten content into digital text, facilitating tasks like data entry automation.
              </p>
              <Link to="/image-to-text" className="mt-6 lg:mt-12 inline-block text-white bg-purple-500 rounded px-6 py-2 hover:bg-purple-400">Try it Out</Link>

            </div>
            <div className='lg:w-1/3 m-3 max-md:mx-0 max-md:mt-10'>
              <div> <div className="w-10 h-1 flex flex-col bg-gradient-to-r from-gray-100 to-purple-800 mb-1"></div>
                <h1 className="font-bold text-white text-lg">Text to Image Generation</h1></div>
              <p>

                Text to Image generation involves the creation of visual content from textual input, offering applications in areas such as content creation automation, and data visualization.
              </p>
              <Link to="/text-to-image" className="mt-6 lg:mt-12 inline-block text-white bg-purple-500 rounded px-6 py-2 hover:bg-purple-400">Try it Out</Link>

            </div>
            <div className='lg:w-1/3 m-3 max-md:mx-0 max-md:mt-10'>
              <div>
                <div className="w-10 h-1 flex flex-col bg-gradient-to-r from-gray-100 to-purple-800 mb-1"></div>
                <h1 className="font-bold text-white text-lg">Question Answering Chat Model</h1></div>
              <p>
                A Chat or Question Answering model utilizes a given question to generate relevant responses or answers, aiding in various tasks such as virtual assistance, information retrieval etc.</p>
              <Link to="/chat" className="mt-6 lg:mt-12 inline-block text-white bg-purple-500 rounded px-6 py-2 hover:bg-purple-400">Try it Out</Link>

            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-full flex flex-col lg:flex-row items-center mx-8 lg:px-20 my-16 text-white ">
        <div className='lg:w-2/5 h-full m-3'>
          <h1 className="font-bold text-white text-xl lg:text-3xl m-5">“Our intelligence is what makes us human, and AI is an extension of that quality.” <br/> <br/> <hr/> <br/> <h3 style={{fontSize:"20"}}>~Yann LeCun</h3></h1>
          
        </div>
        <div className='lg:w-3/5 m-3 max-md:px-5'>

          <div className='flex flex-col lg:flex-row mb-10' >
            <div className='lg:w-2/5'>
              <div>
                <div className="w-10 h-1 flex flex-col bg-gradient-to-r from-gray-100 to-purple-800 mb-1"></div>
                <h1 className="font-bold text-white text-lg">Machine Learning (ML)</h1></div>
            </div>
            <div className='lg:w-3/5'>
              <p>ML algorithms enable systems to learn from data and make predictions or decisions without explicit programming.</p>
            </div >
          </div>

          <div className='flex flex-col lg:flex-row mb-10' >
            <div className='lg:w-2/5'>
              <div>
                <div className="w-10 h-1 flex flex-col bg-gradient-to-r from-gray-100 to-purple-800 mb-1"></div>
                <h1 className="font-bold text-white text-lg">Computer Vision (CV)</h1></div>
            </div>
            <div className='lg:w-3/5'>
              <p>CV involves the processing and analysis of visual data to enable machines to interpret and understand the content of images or videos.</p>
            </div >
          </div>

          <div className='flex flex-col lg:flex-row mb-10' >
            <div className='lg:w-2/5'>
              <div>
                <div className="w-10 h-1 flex flex-col bg-gradient-to-r from-gray-100 to-purple-800 mb-1"></div>
                <h1 className="font-bold text-white text-lg">Deep Learning (DL)</h1></div>
            </div>
            <div className='lg:w-3/5'>
              <p> DL utilizes artificial neural networks with multiple layers to extract high-level features from raw data, enabling complex pattern recognition and decision-making.</p>
            </div >
          </div>

          <div className='flex flex-col lg:flex-row' >
            <div className='lg:w-2/5'>
              <div>
                <div className="w-10 h-1 flex flex-col bg-gradient-to-r from-gray-100 to-purple-800 mb-1"></div>
                <h1 className="font-bold text-white text-lg">Natural Language Processing (NLP)</h1></div>
            </div>
            <div className='lg:w-3/5'>
              <p>NLP focuses on enabling computers to understand, interpret, and generate human language, facilitating tasks such as text analysis, language translation, and sentiment analysis.</p>
            </div >
          </div>

        </div>
      </div> */}

    

    </div>
  );
}

export default Home;