import React from 'react';
import ai1 from '../assets/ai1.png'

const HowAiWorks = () => {
  return (
    <div className='bg-black text-white min-h-screen p-5 md:p-10 bg-gradient-to-br from-darkblue to-black'>
      <h1 className='text-4xl md:text-5xl font-bold mb-8 text-center'>How Artificial Intelligence Works ?</h1>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>The Core of AI</h2>
        <p className='text-base md:text-lg text-gray-400 mb-6 text-center'>"Artificial Intelligence (AI)" represents the computer-based intelligence that not only imitates but also surpasses human intelligence capabilities in many areas. AI enables a computer to execute tasks it receives through prompts or instructions. Traditionally, computers operate on numerical data. So, how do they comprehend human language to perform complex tasks such as generating images, composing essays, or transcribing spoken words captured by a microphone?

<br/><br/>The field of AI has been expanding and evolving over many years. Parameters are the internal elements or settings within models and algorithms that the system uses to process data and make decisions. Think of parameters as dials and switches that can be adjusted to change how the AI behaves or learns from the information it receives. It employs numerous parameters and sophisticated algorithms, facilitating a computer's ability to emulate the neural network of the human brain. This emulation allows for the processing and linking of diverse types of information, enabling machines to learn from data, recognize patterns, and make decisions.

<br/><br/>Key to AI's functionality are technologies like machine learning and neural networks. Machine learning algorithms enable computers to learn from data and improve over time, making more accurate predictions or decisions without being explicitly programmed for each task. Neural networks, inspired by the human brain's architecture, allow for the complex processing of information, enabling machines to recognize patterns and solve problems in a way that mimics human thought processes.

<br/><br/>Moreover, AI encompasses areas such as natural language processing (NLP), which gives computers the ability to understand and generate human language, and computer vision, enabling them to interpret and respond to visual data. Through these advanced capabilities, AI systems can undertake tasks that require understanding and creativity, previously thought to be exclusive to humans.

<br/><br/>In essence, AI stands as a testament to human ingenuity, offering a glimpse into a future where machines can perform a broad spectrum of activities, extending from the routine to the remarkably creative.</p>
        {/* <div className='flex justify-center mb-6'>
          <img src={ai1} alt="AI Concept" className='max-w-full h-auto rounded-lg shadow-lg'/>
        </div> */}
        {/* <p className='text-base md:text-lg text-gray-400 mb-6'>Machine learning, a subset of AI, enables computers to learn from and interpret data without explicit programming, improving their accuracy over time. Deep learning, a further subset, mimics the neural networks of the human brain, facilitating advancements in image and speech recognition, and more.</p> */}
      </section>

      
      <p className='text-base md:text-lg text-gray-400 mb-6' style={{textAlign:'center'}}>Here are some key parts of AI that help it work:</p>
      <div className="w-full h-full flex flex-col lg:flex-row items-center mx-8 lg:px-10 my-16 text-white " style={{marginLeft:0}}>
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
      </div>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>Algorithmic Intelligence: The Heart of AI</h2>
        <p className='text-base md:text-lg text-gray-400 mb-6'>Algorithms are the heart of AI, acting on data to perform tasks. These algorithms range from simple decision trees to complex neural networks, each suited to different types of data and tasks. Data, the lifeblood of AI, trains these algorithms, enabling them to recognize patterns and make informed decisions.</p>
        {/* <div className='flex justify-center mb-6'>
          <img src="https://via.placeholder.com/600x300" alt="AI Data Processing" className='max-w-full h-auto rounded-lg shadow-lg'/>
        </div> */}
        <p className='text-base md:text-lg text-gray-400 mb-6'>The parameters within these algorithms are fine-tuned through a process called "training," where models learn to predict outcomes accurately. This iterative process is crucial for developing AI systems capable of tasks ranging from predictive text input to autonomous vehicle operation.</p>
        <p className='text-base md:text-lg text-gray-400 mb-6'>The real magic behind AI's capabilities lies in its algorithms—an intricate set of rules and statistical processes that allow AI to learn from and make decisions based on data. At the forefront of these are machine learning algorithms and their subset, deep learning. Machine learning uses statistical techniques to give computers the ability to "learn" from data, while deep learning uses layered neural networks to digest large datasets, recognize patterns, and make predictions. These algorithms adjust their parameters in response to the data they're exposed to, much like how a human learns from experience. The "thinking" process of AI involves iterating through these parameters to minimize errors in its predictions or decisions, constantly refining its models towards accuracy. This iterative learning process, powered by vast amounts of data and computational power, enables AI to perform tasks ranging from the mundane to the complex, revolutionizing industries and reshaping our future.</p>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>AI's Prowess in Processing and Learning</h2>
        <p className='text-base md:text-lg text-gray-400'>AI's processing power is not just about raw data analysis; it's about understanding and learning from that data in a way that mimics human cognition. Through techniques like reinforcement learning, AI systems can make decisions, learn from their outcomes, and adapt their approach, constantly optimizing their performance to achieve specific goals. This learning capability is what makes AI truly remarkable. From recognizing speech and understanding languages to diagnosing diseases faster than a seasoned physician, AI's learning algorithms have become increasingly sophisticated, enabling more natural interactions between humans and machines, and opening up a world of possibilities that were once the realm of science fiction.</p>
      
      </section>

      {/* <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>Types and Applications of AI</h2>
        <p className='text-base md:text-lg text-gray-400 mb-6'>AI's application is vast and spans across several fields, including healthcare for patient diagnosis, finance for trading algorithms, and even creative fields for generating art and music. Each application utilizes AI in ways that leverage its ability to process vast datasets faster and more accurately than humans.</p>
        <div className='flex justify-center mb-6'>
          <img src="https://via.placeholder.com/600x400" alt="AI Applications" className='max-w-full h-auto rounded-lg shadow-lg'/>
        </div>
        <p className='text-base md:text-lg text-gray-400 mb-6'>As AI technology continues to evolve, its potential applications expand. Emerging trends include AI in environmental conservation, where it helps monitor endangered species, and in space exploration, aiding in the analysis of vast amounts of cosmic data.</p>
      </section> */}

<p className='text-base md:text-lg text-gray-400 mb-6 text-center'>
  <br/><b>Generative AI</b> in a nutshell by 
Henrik Kniberg:
</p>
<div className="flex justify-center items-center w-full" style={{height: '80vh'}}>
  <div className="w-full md:w-9/12 aspect-video"> 
    <iframe className="w-full h-full" src="https://www.youtube.com/embed/2IK3DFHRFfw?si=h9CXKrMi47bMOYsx" title="YouTube video" allowFullScreen></iframe>
  </div>
</div>


    </div>
  )
}

export default HowAiWorks
