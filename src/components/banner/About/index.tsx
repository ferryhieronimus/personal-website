import Description from "@/components/shared/Description";
import Skills from "../../Skills";
import Title from "@/components/shared/Title";
import Button from "@/components/Button";
import GlowContainer from "@/components/shared/GlowContainer";

export default function About() {
  return (
    <section
      className='flex flex-col gap-8 min-w-full bg-[#eee] py-8 lg:py-16'
      id='about'
    >
      <div
        className='w-1/3 sm:w-1/4 pl-8 text-end'
        style={{
          background: "linear-gradient(to bottom, #FFFFFF00 65%, #93C47D 35%)",
        }}
      >
        <Title title={"about"} />
      </div>
      <div className='max-w-5xl mx-auto'>
        <div className='flex flex-col gap-8 px-8 md:px-16'>
          <Description>
            As a third-year Computer Science student, I found that my passion
            lies in <span className="font-bold">web development</span> and <span className="font-bold">software engineering</span>. I have a <span className="font-bold">strong </span>
            desire to constantly expand my <span className="underline"> knowledge</span> and <span className="underline"> skills</span>, which drives me
            to continuously learn new and up-to-date subjects and technologies.
          </Description>
          <Button>Download My CV</Button>
          <GlowContainer opacity={0.9}>
            <Skills />
          </GlowContainer>
        </div>
      </div>
    </section>
  );
}
