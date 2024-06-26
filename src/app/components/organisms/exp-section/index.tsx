import Typography from "@/app/components/atoms/typhography";
import GlowWrapper from "@/app/components/atoms/glow-wrapper";
import Skills from "@/app/components/molecules/skills";
import ExpList from "@/app/components/molecules/exp-list";

export default function ExpSection() {
  return (
    <section
      className='flex flex-col md:flex-row min-w-full items-center bg-custom-off-white md:py-8'
      id='experience'
    >
      <div className='flex flex-col gap-8 md:w-1/2 pt-8 lg:pt-16'>
        <div className='flex text-end'>
          <div
            className='w-1/3 xl:w-1/2 pl-6 sm:pl-16'
            style={{
              background:
                "linear-gradient(to bottom, #FFFFFF00 65%,  #9fa1e8 35%)",
            }}
          >
            <Typography variant='h2'>Experience</Typography>
          </div>
        </div>
        <div className='max-w-4xl mx-auto h-full flex flex-col gap-8 px-6 sm:px-8 lg:px-16 md:pb-8'>
          <Typography variant='body1' additionalStyles="text-neutral-700">
            Apart from my technical skills, I am also eager to develop a variety
            of soft skills, including{" "}
            <span className='font-bold'> leadership</span>,{" "}
            <span className='font-bold'> teamwork</span>,{" "}
            <span className='font-bold'> communication</span>, and{" "}
            <span className='font-bold'> adaptability</span>.
            This leads me to actively participate in a broad range of committees, organizations, and activities at my college.
            Below are some technologies I&apos;ve been working with:
          </Typography>
          <GlowWrapper opacity={0.5}>
            <Skills />
          </GlowWrapper>
        </div>
      </div>
      <div className='md:w-1/2'>
        <ExpList />
      </div>
    </section>
  );
}
