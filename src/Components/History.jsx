import React from 'react';
import { Divider, List, Typography } from 'antd';
const data = [
  '1943: Warren McCullough and Walter Pitts introduce the concept of a mathematical neural network in "A Logical Calculus of Ideas Immanent in Nervous Activity."',
  '1950: Alan Turing\'s "Computing Machinery and Intelligence" proposes the Turing Test, a method to evaluate a machine\'s intelligence.',
  '1950: Marvin Minsky and Dean Edmonds build the first neural network computer, SNARC.',
  '1956: John McCarthy coins "artificial intelligence" at the Dartmouth Summer Research Project, marking the formal start of AI as a field.',
  '1959: Arthur Samuel introduces "machine learning" at IBM.',
  '1964: Daniel Bobrow\'s STUDENT program at MIT becomes an early natural language processing achievement.',
  '1966: Joseph Weizenbaum\'s Eliza chatbot simulates conversation, illustrating the Eliza effect.',
  '1973: The British government\'s Lighthill Report criticizes AI progress, leading to funding cuts and the first AI Winter.',
  '1985: Over a billion dollars a year are invested in expert systems, boosting the Lisp machine market.',
  '1987-1993: The Lisp machine market collapses, signaling the Second AI Winter.',
  '1995: The first autonomous car journey was completed.',
  '1997: IBM\'s Deep Blue Artificial Intelligence defeats Chess Champion Gary Kasparov.',
  '2006: Fei-Fei Li begins the ImageNet project, sparking advancements in image recognition.',
  '2008: Google enhances speech recognition technology.',
  '2011: IBM\'s Watson and Apple\'s SIRI introduce AI to mainstream audiences.',
  '2012: Andrew Ng\'s Google Brain project leads to a breakthrough in neural network training with YouTube videos.',
  '2014: Amazon launches Alexa - a virtual assistant technology.',
  '2016: Google DeepMind\'s AlphaGo beats Go champion Lee Sedol.',
  '2018: Google\'s BERT improves natural language processing.',
  '2020: Baidu\'s LinearFold algorithm accelerates RNA sequence predictions; OpenAI releases GPT-3.',
  '2021: OpenAI\'s DALL-E generates images from text prompts.',
  '2022: OpenAI\'s ChatGPT and the introduction of the AI Bill of Rights mark significant AI milestones.',
  '2023: Microsoft and Google enhance conversational AI with Bing and Bard; OpenAI launches GPT-4; the Biden-Harris administration issues an executive order on AI safety.',
  '2024: The EU\'s Artificial Intelligence Act and Anthropic\'s Claude 3 Opus signify ongoing advancements and regulations in AI.'
];


const History = () => {
  return (
    <div className='bg-black text-white min-h-screen p-5 md:p-10 bg-gradient-to-br from-darkblue to-black'>
      <h1 className='text-4xl md:text-5xl font-bold mb-8 text-center'>The History of Artificial Intelligence</h1>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>The Genesis of AI</h2>
        <p className='text-base text-center md:text-lg text-gray-400 mb-6'>At first, you might think artificial intelligence (AI) is pretty new, something that's only been around and popular in the last few years. But actually, the early ideas and work that made AI what it is today started way back in the early 1900s. Even though the biggest advancements in AI didn't happen until the 1950s, those wouldn't have been possible without the early work from people in lots of different areas. Understanding the history of AI helps us know more about how AI got to where it is now and where it might be heading in the future.</p>
        <p className='text-base text-center md:text-lg text-gray-400 mb-6'> <br/> The concept of "artificial intelligence" isn't a recent innovation but stretches back thousands of years. Ancient thinkers pondered life's big questions, leading to the creation of "automatons" — mechanical devices that operated without human control. The term "automaton" has its roots in ancient Greek, meaning "to act on one’s own.”  But Aritifical Intelligence as we know it, began in the 20th Century.</p>
      </section>

<p className='text-base md:text-lg text-gray-400 mb-6 text-center'>
  <br/><b>A brief history of AI</b> by 
'Plattform Lernende Systeme':
</p>
<div className="flex justify-center items-center w-full" style={{height: '80vh'}}>
  <div className="w-full md:w-9/12 aspect-video"> 
    <iframe className="w-full h-full" src="https://www.youtube.com/embed/yaL5ZMvRRqE?si=OgRNMr5rLq0wq46R" title="YouTube video" allowFullScreen></iframe>
  </div>
</div>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'><br/>Pioneers and Landmark Moments</h2>
        <p className='text-base text-center md:text-lg text-gray-400 mb-6'>The journey into artificial intelligence (AI) took a significant leap forward in the 1950s, beginning with Alan Turing's groundbreaking paper, "Computing Machinery and Intelligence." This work ignited interest in the possibility of machines thinking independently and introduced the Turing test as a benchmark for assessing a machine's intelligence. The term "artificial intelligence" itself was coined by John McCarthy in 1956 during a conference at Dartmouth College, marking a pivotal moment in the field's history.

        <br/> <br/>During the 1970s, with the backing of academic circles and government funding, AI research flourished, leading to the emergence of key technologies such as machine learning, neural networks, and natural language processing. Despite these advances, the difficulty of expanding these technologies led to a period of reduced interest and financial support, known as the first AI winter, which lasted until the 1980s.

        <br/> <br/>The AI field experienced a resurgence in the mid-1980s, driven by improved computing power and the development of deep learning and expert systems. However, the new systems' complexity and the limitations of existing technologies resulted in a second AI winter in the mid-1990s.

        <br/> <br/>The turn of the millennium brought significant technological advancements, rejuvenating AI research and development. By the 2010s, innovations in processing power and deep learning techniques had made a lasting impact, leading to the widespread use of AI in everyday applications such as virtual assistants and self-driving cars, illustrating the transformative power of AI in modern society.</p>
      </section>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>A Concise History of Artificial Intelligence Milestones:</h2>
        <p className='text-base text-center md:text-lg text-gray-400 mb-6'>Information from <a href="https://builtin.com/artificial-intelligence">https://builtin.com/artificial-intelligence</a></p>
    
      </section>

      <>
  <Divider orientation="left" style={{ color: 'white' }}></Divider>
  <List
    size="large"
    bordered
    dataSource={data}
    renderItem={(item) => <List.Item style={{ color: 'white' }}>{item}</List.Item>}
  />
</>




    </div>
  )
}

export default History;
