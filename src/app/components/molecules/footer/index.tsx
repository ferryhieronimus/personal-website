import GlowWrapper from "@/app/components/atoms/glow-wrapper";
import Image from "next/image";
import linkedinIcon from "../../../../../public/images/logos/linkedin-white.svg";
import githubIcon from "../../../../../public/images/logos/github-white.svg";
import instagramIcon from "../../../../../public/images/logos/instagram-white.svg";
import mediumIcon from "../../../../../public/images/logos/medium-white.svg";
import Typography from "../../atoms/typhography";
import { IconGroup } from "../icon-group";

export default function Footer() {
  return (
    <GlowWrapper opacity={0.25}>
      <div className='flex flex-wrap min-w-full items-center justify-between bg-custom-off-black p-8 md:p-12 gap-4'>
        <div className='text-custom-off-white'>
          <Typography variant='body2' additionalStyles='text-white'>
            © 2023 Ferry
          </Typography>
          <Typography variant='body2' additionalStyles='text-white'>
            Contact me at{" "}
            <a href='mailto:ferryhieronimus@gmail.com' className='underline'>
              ferryhieronimus@gmail.com
            </a>
          </Typography>
        </div>
        <IconGroup style='dark' />
      </div>
    </GlowWrapper>
  );
}
