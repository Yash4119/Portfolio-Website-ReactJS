import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineFilePdf } from "react-icons/ai";

const SocialLinks = () => {

  const links = [
    {
        id:1,
        child:(
            <>
            Linkedin
            <FaLinkedin size={30}/>
          </>
        ),
        href : 'https://www.linkedin.com/in/yash-ambekar-879b3b20b/',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
            GitHub
            <FaGithub size={30}/>
          </>
        ),
        href : 'https://github.com/Yash4119'
    },
    {
        id:3,
        child:(
            <>
            Mail
            <HiOutlineMail size={30}/>
          </>
        ),
        href : 'mailto:yashamb444@gmail.com'
    },
    {
        id:4,
        child:(
            <>
            Resume
            <AiOutlineFilePdf size={30}/>
          </>
        ),
        href : 'https://drive.google.com/file/d/1fEaXs7HcDo1dmulbzdcwcoC9UV3R-f3X/view?usp=sharing',
        style:'rounded-br-md',
        download:true
    }
]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>

        {links.map(({id,child,href,download,style}) => (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[0px] duration-500 hover:rounded-r-md"+ style}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target = "_blank"
              rel="noreferrer"
            >
             {child}
            </a>
          </li>
        ))}

        
      </ul>
    </div>
  );
};

export default SocialLinks;
