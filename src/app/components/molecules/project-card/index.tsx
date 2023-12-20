import { Chip } from "../../atoms/chip";
import { IProjectCard } from "./interface";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

const ProjectCard: React.FC<IProjectCard> = ({
  techStack,
  name,
  desc,
  githubLink,
  externalLink,
}) => {
  return (
    <div className='max-w-xs lg:max-w-sm bg-[#ffffff80] text-neutral-800 p-6 md:p-8 flex flex-col gap-2 shadow-sm'>
      <div className='flex items-center justify-between gap-4 w-full'>
        <div className='text-2xl font-bold font-ubuntu'>{name}</div>
        <div className='flex gap-4 items-center'>
          {githubLink && (
            <a href={githubLink} target='_blank'>
              <GrGithub
                className=' transition-transform hover:scale-110'
                size={28}
              />
            </a>
          )}
          {externalLink && (
            <a href={externalLink} target='_blank'>
              <FaExternalLinkAlt
                className='will-change-transform transition-transform hover:scale-110'
                size={24}
              />
            </a>
          )}
        </div>
      </div>
      <div className='font-poppins text-sm md:text-base'>{desc}</div>
      <ul className='mt-auto pt-4 text-xs md:text-sm flex flex-wrap gap-x-2 gap-y-2'>
        {techStack &&
          techStack.map((tech, index) => <Chip key={index} text={tech} />)}
      </ul>
    </div>
  );
};

export default ProjectCard;
