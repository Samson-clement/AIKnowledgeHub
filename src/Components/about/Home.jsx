import React from "react";
import HeroImage from "./heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm an Arab Open University Student
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have had a wonderful experience in my 4 years of university life and learning Information Technology and Communications.
            This website is my final year graduation project under Dr. Moneif Mohammed Abdelkareem. Currently, I love to work on web application using technologies like
            React, Tailwind, HTML, CSS, JS and I also do Competitive Programming with Dr. Alhussain Aly.
          </p>

          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Contact Me!
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
