import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import mongodb from "../assets/mongodb.png";
import sql from "../assets/sql.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/reactImage.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const experience = () => {
  const techStack = [
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
      style: "shadow-blue-800",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 6,
      src: sql,
      title: "SQL",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: nodejs,
      title: "Node Js",
      style: "shadow-white",
    },
    {
      id: 9,
      src: expressjs,
      title: "Express Js",
      style: "shadow-yellow-200",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-220 py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-40">
            Experience
          </p>
          <p className="py-6 font-bold">
            These are the Technologies that I have worked on
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techStack.map(({ id, src, title, style }) => (
            <div key = {id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="_blank" className="w-30 mx-auto h-40 w-full" />
              <p className="mt-4 font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default experience;
