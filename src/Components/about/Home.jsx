import React from "react";
import HeroImage from "./heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

import html from "./assets2/html.png";
import css from "./assets2/css.png";
import javascript from "./assets2/javascript.png";
import reactImage from "./assets2/react.png";
import github from "./assets2/github.png";
import tailwind from "./assets2/tailwind.png";
import hf from "./assets2/hf.png";
import chatgpt from "./assets2/chatgpt.png";
import rapid from "./assets2/rapidapi.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import resume from "./resume.pdf"

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/samson-clement-723082284/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/Samson-clement",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:samsonclementapple@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: resume,
    style: "rounded-br-md",
    download: "resume.pdf",
  },
];

const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactImage,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 6,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 4,
    src: chatgpt,
    title: "ChatGPT",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: rapid,
    title: "Rapid API",
    style: "shadow-sky-400",
  },
  {
    id: 6,
    src: hf,
    title: "Hugging Face API",
    style: "shadow-gray-400",
  },
  ];



const Home = () => {
  return (
    <div>
      
    <div name="home" className="w-full pt-10 pb-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full lg:pr-20">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm an Arab Open University Student
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            My name is Samson Clement, and I've been fortunate to experience an enriching four-year journey through university, specializing in Information Technology and Communications. This website serves as the capstone to my academic adventure, guided by the expertise of Dr. Moneif Mohammed Abdelkareem for my final year graduation project.Alongside this, I engage in Competitive Programming under the mentorship of Dr. Alhussain Aly, constantly challenging myself to solve complex problems and enhance my coding skills.
          </p>

          <div
              onClick={scrollToContact}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Contact Me!
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto mb-4 md:mb-0 md:ml-20"
            style={{size:20}}
          />
        </div>
      </div>
    </div>

    <div name="about" className="w-full pt-10 pb-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full p-4 md:mb-0">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl text-gray-300 mt-8 md:mt-20">
          "Artificial Intelligence: A Knowledge Hub" is the culmination of my final year graduation project at the Arab Open University in Kuwait, a labor of love and curiosity designed to demystify the world of AI for the everyday person. I chose this topic out of a deep-seated belief in the transformative power of AI and the recognition that, despite its prevalence, a gap exists in public understanding and practical application of this technology. This website serves as a bridge over that gap, offering a comprehensive guide for anyone looking to integrate AI into their daily lives. It's not just theoretical; the site is packed with interactive demonstrations and hands-on tutorials that invite you to experience the magic of AI firsthand. Whether you're a student, a professional, or just an enthusiastic learner, "Artificial Intelligence: A Knowledge Hub" is your starting point into the world of AI, offering insights, tools, and examples to inspire and empower your journey into this revolutionary field.!
        </p>

        <br />
        <p className="text-xl text-gray-300">
          I am hailing from Pakistan and currently residing in Kuwait. I am the proud developer behind "Artificial Intelligence: A Knowledge Hub." Drawing from my experiences and the diverse cultural perspectives I've gained from living in Kuwait, I crafted this website with the vision of making AI accessible and understandable to all. This project not only represents a significant milestone in my academic journey at the Arab Open University but also embodies my passion for technology and education. Through this platform, I aim to share my fascination with AI and its potential to shape our future, inviting users from around the globe to explore and embrace the possibilities that artificial intelligence has to offer.
        </p>

      </div>
    </div>


    <div
      name="experience"
      className=" w-full pb-10 min-h-screen"
    >
      <div className="max-w-screen-lg py-200 mx-auto p-4 flex flex-col justify-center w-full  text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 ">These are the technologies I've worked with</p>
        </div>

        <br/>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div id="contact"
      name="contact"
      className="w-full  text-white"
    >
      <div className="flex flex-col p-4 justify-center mt-[200px] max-w-screen-lg mx-auto ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/zbxdjqwb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download="resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>

    </div>
  );
};

export default Home;
