import React from 'react';

const History = () => {
  return (
    <div className='bg-black text-white min-h-screen p-5 md:p-10 bg-gradient-to-br from-darkblue to-black'>
      <h1 className='text-4xl md:text-5xl font-bold mb-8 text-center'>The History of Artificial Intelligence</h1>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>The Genesis of AI</h2>
        <p className='text-base md:text-lg text-gray-400 mb-6'>The journey of Artificial Intelligence (AI) begins in the mid-20th century, rooted in classical philosophers' attempts to describe human thinking as a symbolic system. However, the formal birth of AI as an academic discipline can be traced back to 1956, during a seminal workshop at Dartmouth College. Here, luminaries like Allen Newell, Herbert A. Simon, John McCarthy, and Marvin Minsky laid down the foundational goals and dreams of AI research.</p>
      </section>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>Pioneers and Landmark Moments</h2>
        <p className='text-base md:text-lg text-gray-400 mb-6'>AI's early years were marked by significant milestones, such as the creation of the first AI programs, including Newell and Simon's Logic Theorist and McCarthy's Lisp programming language. The 1960s and 70s saw AI's promise through systems like ELIZA and SHRDLU, which interacted with users in a conversational manner, and the development of expert systems in the 1980s, which used AI to mimic the decision-making abilities of a human expert.</p>
      </section>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>The AI Winter and Revival</h2>
        <p className='text-base md:text-lg text-gray-400 mb-6'>Despite early enthusiasm, AI faced periods of skepticism and reduced funding known as the "AI Winter" due to overly ambitious predictions that failed to materialize. However, the late 1990s and early 2000s marked a revival, fueled by advances in machine learning, faster computers, and increased data volumes. This era saw the success of IBM's Deep Blue and Watson, as well as the rise of personal assistants like Siri, indicating AI's shift from research labs to the mainstream.</p>
      </section>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>AI in the Modern Era</h2>
        <p className='text-base md:text-lg text-gray-400 mb-6'>Today, AI is ubiquitous, from the algorithms curating our social media feeds to autonomous vehicles. Its rapid evolution has been driven by breakthroughs in deep learning and neural networks, leading to technologies capable of outperforming humans in specific tasks. The modern narrative of AI is not just its technological feats but its integration into everyday life, making it a central pillar of the fourth industrial revolution.</p>
      </section>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>Looking Ahead: The Future of AI</h2>
        <p className='text-base md:text-lg text-gray-400'>As we stand on the cusp of future advancements, the journey of AI continues to unfold. With every leap forward, it brings new ethical considerations and challenges, but also unparalleled opportunities for innovation across all sectors of society. The history of AI is a testament to human ingenuity and a reminder that the pursuit of artificial intelligence is as much about the future as it is about reflecting on our past.</p>
      </section>
    </div>
  )
}

export default History;
