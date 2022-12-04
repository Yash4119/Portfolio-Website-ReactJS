import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">About</p>
        </div>
        <p className="text-xl mt-10">
        ⚡ A 3rd year Computer Engineering Student at Dr. D. Y. Patil Institute of Technology, Pimpri
        </p>
        <br />
        <p className="text-xl">
        ⚡ <strong>Contest Rating 1560 </strong> at Leetcode and <strong>3⭐</strong> at Codechef. <strong>Max Rating(1619)</strong>.
        </p>
        <br/>
        <p className="text-xl">
        ⚡ Solved over <strong>800+ problems</strong> of Data Structures and Algorithms across Platforms like <strong><a href="https://leetcode.com/yashamb444/">Leetcode</a></strong> And <strong><a href="https://auth.geeksforgeeks.org/user/yashamb444">Geeks for Geeks</a></strong>.
        </p>
        <br/>
        <p className="text-xl">
        ⚡  Achieved <strong>1st Rank</strong> in 2nd year computer department with an <strong>CGPA of 9.59</strong>.
        </p>
        <br/>
        <p className="text-xl">
        ⚡  Achieved <strong>All India Rank 2188</strong> and <strong>Intitute rank 1</strong> in <strong>CodeCaze</strong> coding competition organized by Coding Ninjas.
        </p>
        <p className="text-xl mb-20">
        ⚡  I have learnt <strong>Full Stack Web Development 👨‍💻</strong> and also have developed some hands on Projects on the same.
        </p>
        <br/>
      </div>
    </div>
  );
};

export default About;
