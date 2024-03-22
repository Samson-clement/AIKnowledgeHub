import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';


import Home from './Components/Home.jsx'
import ImageToText from './Components/ImageToText.jsx';
import ChatModel from './Components/ChatModel.jsx';
import TextToImage from './Components/TextToImage.jsx';
import CaptionModel from './Components/CaptionModel.jsx';
import SpeechToText from './Components/SpeechToText.jsx';
import HowAiWorks from './Components/HowAiWorks.jsx';
import History from './Components/History.jsx';
import Future from './Components/Future.jsx';
import Start from './Components/Start.jsx';
import About from './Components/About.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
    
      <Route path='/image-to-text' element={<ImageToText />} />
      <Route path='/chat' element={<ChatModel />} />
      <Route path='/text-to-image' element={<TextToImage />} />
      <Route path='/image-caption' element={<CaptionModel />} />
      <Route path='/SpeechToText' element={<SpeechToText />} />
      <Route path='/HowAiWorks' element={<HowAiWorks />} />
      <Route path='/History' element={<History />} />
      <Route path='/Future' element={<Future />} />
      <Route path='/Start' element={<Start />} />
      <Route path='/About' element={<About />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
