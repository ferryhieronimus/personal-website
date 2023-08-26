import Image from "next/image";
import linkedinIcon from "../../../../../public/images/logos/linkedin.svg";
import githubIcon from "../../../../../public/images/logos/github.svg";
import instagramIcon from "../../../../../public/images/logos/instagram.svg";
import mediumIcon from "../../../../../public/images/logos/medium.svg";
import clsx from "clsx";
import { ubuntu } from "@/fonts";
import Typography from "../../atoms/typhography";
import { IconGroup } from "../../molecules/icon-group";

export default function HeroSection() {
  return (
    <div
      className={clsx(
        "flex min-h-[70vh] min-w-full items-center justify-center py-12 sm:py-24 font-ubuntu"
      )}
    >
      <div
        className='max-w-6xl min-h-[100%] mx-8 md:mx-16 flex flex-col gap-8 transition-transform will-change-transform duration-0'
        id='intro'
      >
        <Typography as='h1' variant='h3' additionalStyles='font-light'>
          Hi! I&apos;m <span className='font-medium'>Ferry</span>, a{" "}
          <span className='italic inline'>computer science</span> student with a
          <span className='font-medium'> passion </span> and{" "}
          <span className='font-medium'> love </span> for software engineering.
        </Typography>

        <IconGroup style='light' />
      </div>
    </div>
  );
}
4;
