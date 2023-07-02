import Image from "next/image";
import linkedinIcon from "../../public/images/logos/linkedin.svg";
import githubIcon from "../../public/images/logos/github.svg";
import instagramIcon from "../../public/images/logos/instagram.svg";
import mediumIcon from "../../public/images/logos/medium.svg";
import clsx from "clsx";
import { ubuntu } from "@/app/font";

export default function Intro() {
  return (
    <div
      className={clsx(
        "flex min-h-[70vh] min-w-full items-center justify-center p-12 sm:p-24 flex-col",
        ubuntu.className
      )}
    >
      <div
        className='text-3xl max-w-3xl min-h-[100%] font-light flex flex-col gap-8 transition-transform duration-0 will-change-transform'
        id='intro'
      >
        <p>
          Hi! I&apos;m <span className="font-medium">Ferry</span>, a{" "}
          <span className='italic inline'>computer science</span> student with a
          <span className="font-medium"> passion </span> and <span className="font-medium"> love </span> for software engineering.
        </p>
        <div className='flex gap-8 select-none'>
          <a href='https://www.linkedin.com/in/ferryferry/' target='_blank'>
            <Image
              priority
              src={linkedinIcon}
              alt='Linkedin'
              height={32}
              className='will-change-transform transition-transform hover:scale-110'
            />
          </a>
          <a href='https://github.com/ferryhieronimus' target='_blank'>
            <Image
              priority
              src={githubIcon}
              alt='Github'
              height={32}
              className='will-change-transform transition-transform hover:scale-110'
            />
          </a>
          <a href='https://www.instagram.com/hieronimusferryy/' target='_blank'>
            <Image
              priority
              src={instagramIcon}
              alt='Instagram'
              height={32}
              className='will-change-transform transition-transform hover:scale-110'
            />
          </a>
          <a href='https://medium.com/@ferryhieronimus' target='_blank'>
            <Image
              priority
              src={mediumIcon}
              alt='Medium'
              height={32}
              className='will-change-transform transition-transform hover:scale-110'
            />
          </a>
        </div>
      </div>
    </div>
  );
}
4;
