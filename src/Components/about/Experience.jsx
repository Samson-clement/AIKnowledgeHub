import React from "react";

import html from "./assets2/html.png";
import css from "./assets2/css.png";
import javascript from "./assets2/javascript.png";
import reactImage from "./assets2/react.png";
import github from "./assets2/github.png";
import tailwind from "./assets2/tailwind.png";
import hf from "./assets2/hf.png";
import chatgpt from "./assets2/chatgpt.png";
import rapid from "./assets2/rapidapi.png";

const Experience = () => {
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

  return (
    <div
      name="experience"
      className=" w-full pt-10 pb-10 min-h-screen"
    >
      <div className="max-w-screen-lg mt-[300px] py-200 mx-auto p-4 flex flex-col justify-center w-full  text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
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
  );
};

export default Experience;
