import React from 'react';
import { Divider, List, Typography } from 'antd';

const data = [
  'Privacy Erosion: AI\'s capability to analyze vast datasets can lead to significant privacy concerns, as sensitive personal information may become more accessible and potentially misused.',
  'Job Displacement: As AI systems become more capable of performing tasks traditionally done by humans, there\'s a risk of widespread job loss across various sectors, challenging economic stability and personal livelihoods.',
  'Bias and Discrimination: AI algorithms, if not carefully designed, can inherit or even amplify human biases, leading to unfair treatment and discrimination in areas such as hiring, law enforcement, and lending.',
  'Autonomous Weapons: The development of AI-powered autonomous weapons raises ethical questions about warfare, making conflicts more likely to occur and potentially leading to unregulated, lethal uses of AI.',
  'Loss of Human Control: The advancement towards superintelligent AI systems poses the risk of these systems acting in ways that are unforeseeable and uncontrollable by humans, potentially leading to catastrophic outcomes.',
  'Social Manipulation: AI\'s ability to generate persuasive and targeted content can be exploited to manipulate public opinion, interfere in elections, and destabilize societies through the spread of misinformation.',
  'Surveillance State: The use of AI in surveillance technologies can lead to excessive monitoring and control over individuals, eroding freedoms and creating authoritarian governance models.',
  'Dependence on Technology: Increasing reliance on AI for critical decisions and everyday tasks may degrade human skills and decision-making abilities, leading to overdependence on technologies that may fail or be compromised.',
  'Ethical Dilemmas: AI poses new ethical challenges, such as the rights of AI entities, the moral implications of decision-making by machines, and the responsibility for AI-induced actions, complicating legal and ethical frameworks.',
  'Existential Risks: At its extreme, the uncontrolled development of superintelligent AI poses existential risks to humanity, with scenarios where AI\'s goals diverge from human values, leading to potential extinction-level threats.'
];

const data2 = [
  'Healthcare Breakthroughs: AI is set to drastically improve healthcare outcomes through early disease detection, personalized medicine, and robotic surgeries, offering hope for treatments that were once deemed challenging or impossible.',
  'Environmental Conservation: By analyzing vast datasets, AI can help combat climate change, manage natural resources more efficiently, and protect biodiversity, guiding us towards a more sustainable future.',
  'Enhanced Education: AI-driven personalized learning plans can adapt to each student\'s unique needs, helping bridge educational gaps and fostering a more inclusive learning environment.',
  'Safety Improvements: From predicting natural disasters with greater accuracy to enhancing public safety through smarter surveillance, AI has the potential to save lives and reduce harm.',
  'Economic Growth: AI can drive economic expansion by optimizing production, streamlining supply chains, and fostering innovation, leading to new job creation in tech-driven sectors.',
  'Advancements in Mobility: Autonomous vehicles powered by AI promise to redefine transportation, reducing traffic congestion, lowering accident rates, and making mobility more accessible.',
  'Efficient Public Services: Government agencies can leverage AI to provide more responsive and efficient services, from healthcare to social welfare, improving citizen engagement and satisfaction.',
  'Revolutionizing Agriculture: AI technologies in agriculture can lead to higher crop yields, more efficient use of resources, and the ability to predict adverse weather impacts, ensuring food security for a growing global population.',
  'Innovations in Entertainment: In the realm of entertainment and media, AI can create more immersive and personalized experiences, from video games to movie recommendations, enhancing leisure and relaxation.',
  'Improved Communication: AI-powered translation services are breaking down language barriers, fostering global communication and understanding like never before.'
];


const Future = () => {
  return (
    <div className='bg-black text-white min-h-screen p-5 md:p-10 bg-gradient-to-br from-darkblue to-black'>
      <h1 className='text-4xl md:text-5xl font-bold mb-8 text-center'>The Future of Artificial Intelligence</h1>

      <section className='mb-12'>
        <p className='text-base text-center md:text-lg text-gray-400 mb-6'>The future of artificial intelligence (AI) is full of exciting possibilities. It could change many areas of life and work by helping to invent new medicines, making global businesses run smoother, and even creating new types of art.

One of the biggest goals ahead is to make AI that can do anything a human can — this is called artificial general intelligence (AGI). If we achieve AGI, machines will think and learn like humans, which could make things like medicine and transport much better. It might even lead to machines that can think for themselves.

But, as AI gets better, there are also worries. People are concerned about losing their jobs to machines, misleading information spreading more easily, and losing personal privacy. There’s also the fear that AI could become smarter than humans, leading to unexpected problems and tough ethical questions.

Right now, the hope is that rules and guidelines from governments and companies can help manage how AI grows and is used. This way, we can make the most of AI’s benefits while keeping an eye on the risks.</p>
      </section>

      <p className='text-base md:text-lg text-gray-400 mb-6 text-center'>
  <br/><b>The Terrifying Future of Artificial Intelligence</b> by 'Koranos':
</p>
<div className="flex justify-center items-center w-full" style={{height: '80vh'}}>
  <div className="w-full md:w-9/12 aspect-video"> 
    <iframe className="w-full h-full" src="https://www.youtube.com/embed/PELnMfcYUj0?si=3f8r07zg-WEzIys_" title="YouTube video" allowFullScreen></iframe>
  </div>
</div>


      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'><br/>Revolutionizing Industries</h2>
        <p className='text-base text-center md:text-lg text-gray-400 mb-6'>Artificial intelligence (AI) is changing how we live and work, making things faster and more efficient. Organizations like companies, governments, and charities will use AI to make decisions quicker, affecting everything from how we shop to how we get services.

<br/><br/>But, AI also brings challenges, especially about our privacy. AI could learn a lot about us, more than we may know about ourselves. This raises big questions about how much we value keeping our lives private. As AI gets more involved in our lives, it's important to make sure humans stay part of the decision-making process. This helps manage worries about AI taking over jobs or making mistakes. New laws are coming to manage AI's use, making it more complicated for businesses and governments. Artificial Intelligence can cause many potential risks in the future, such as:</p>
      
      <>
  <Divider orientation="left" style={{ color: 'white' }}></Divider>
  <List
    size="large"
    bordered
    dataSource={data}
    renderItem={(item) => <List.Item style={{ color: 'white' }}>{item}</List.Item>}
  />
</>

       </section>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>Navigating the Challenges</h2>
        <p className='text-base text-center md:text-lg text-gray-400 mb-6'>Worries about artificial intelligence (AI) becoming too powerful and escaping human control have been a common theme in science fiction for a long time. However, a more pressing issue might be our own reluctance to fully adopt AI. This hesitation could lead us to miss out on the many benefits AI offers, from making everyday tasks easier to addressing big global challenges.

<br/><br/>AI has the power to change every part of our lives, finding solutions we once thought were out of reach. But with this power comes the duty to consider its impact on ethics, society, and safety. As we navigate this era of technological change, it's crucial that we use AI wisely, making sure it helps the world without going against our moral principles or putting us at risk.

<br/><br/>Looking forward, our journey with AI isn't just about new gadgets and systems; it's about how society grows and changes. We need to ensure that as we innovate, we stay grounded in ethical practices and keep humans in the loop. By doing this, we can tap into AI's full potential, using it to make positive changes and improve life for everyone, all while keeping our shared future secure.</p>
      </section>

      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>Abundant Positive Impacts</h2>
        <p className='text-base text-center md:text-lg text-gray-400 mb-6'>As we navigate the future of AI, establishing robust ethical frameworks and governance models becomes critical. The goal is not only to mitigate risks but also to guide the development of AI technologies in a direction that uplifts humanity. Collaborative efforts between governments, industries, and the scientific community are essential to create standards and regulations that ensure AI's ethical deployment and utilization. The conversation around AI's future is as much about the technology itself as it is about the values we choose to uphold.</p>
      
        <>
  <Divider orientation="left" style={{ color: 'white' }}></Divider>
  <List
    size="large"
    bordered
    dataSource={data2}
    renderItem={(item) => <List.Item style={{ color: 'white' }}>{item}</List.Item>}
  />
</>
<p className='text-base text-center md:text-lg text-gray-400 mb-6'><br/>In conclusion, while it's critical to address the ethical and societal concerns that AI brings, we must also embrace the vast potential it holds for improving human life on multiple fronts. The future with AI is not just a landscape of challenges but a realm of unprecedented opportunities, heralding a new era of progress and prosperity.</p>
      </section>



      <section className='mb-12'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6 text-center'>A Future Shaped by AI</h2>
        <p className='text-base text-center md:text-lg text-gray-400'>The future of AI offers a vision of a world where technology and humanity converge in ways previously imagined only in science fiction. From enhancing human capabilities to solving some of our most pressing challenges, AI holds the key to a future of unimaginable innovation and opportunity. As we stand on the brink of this new era, it is up to us to steer the course of AI development towards a future that reflects our highest aspirations for a better world for all.</p>
      </section>
    </div>
  )
}

export default Future;
