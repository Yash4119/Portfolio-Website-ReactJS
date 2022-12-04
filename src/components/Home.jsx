import React from "react";
import HeroImage from "../assets/heroImage.JPG";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black mx-auto"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full mt-20">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Problem Solver
          </h2>
          <p className="text-gray-400 py-4 px-1 max-w-md ">
            <ul>
              <li>I enjoy doing problem solving using concepts of Data Structures and
            Algorithms.</li>
            <br></br>
              <li>A passionate Full Stack Software Developer 🚀 having an experience
            of building Web applications with JavaScript / Reactjs / Nodejs and
            other cool libraries and frameworks.</li>
            </ul>
            
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={800}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className=" mt-20">
          <img
            src={HeroImage}
            alt="My profile"
            className=" rounded-2xl ml-auto w-2/3 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
