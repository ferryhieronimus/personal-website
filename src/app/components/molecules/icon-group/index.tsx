import React from "react";
import clsx from "clsx";
import { FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";
import { BsMedium } from 'react-icons/bs' 
import { GrGithub } from "react-icons/gr";
import { IIConGroup } from "./interface";

export const IconGroup: React.FC<IIConGroup> = ({ style }) => {
  return (
    <div className='flex gap-8 select-none'>
      <a
        href='https://www.linkedin.com/in/ferryferry/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaLinkedin
          size={32}
          title='LinkedIn'
          className={clsx(
            "transition-transform hover:scale-110",
            {
              "text-custom-off-black": style === "light",
              "text-custom-off-white": style === "dark",
            }
          )}
        />
      </a>
      <a
        href='https://github.com/ferryhieronimus'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GrGithub
          size={32}
          title='LinkedIn'
          className={clsx(
            "transition-transform hover:scale-110",
            {
              "text-neutral-800": style === "light",
              "text-custom-off-white": style === "dark",
            }
          )}
        />
      </a>
      <a
        href='https://www.instagram.com/hieronimusferry/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaInstagram
          size={32}
          title='Instagram'
          className={clsx(
            "transition-transform hover:scale-110",
            {
              "text-neutral-800": style === "light",
              "text-custom-off-white": style === "dark",
            }
          )}
        />
      </a>
      <a
        href='https://medium.com/@ferryhieronimus'
        target='_blank'
        rel='noopener noreferrer'
      >
        <BsMedium
          size={32}
          title='Medium'
          className={clsx(
            "transition-transform hover:scale-110",
            {
              "text-neutral-800": style === "light",
              "text-custom-off-white": style === "dark",
            }
          )}
        />
      </a>
    </div>
  );
};
