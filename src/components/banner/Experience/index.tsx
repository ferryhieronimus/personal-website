import Description from "@/components/shared/Description";
import List from "../../List";
import Title from "@/components/shared/Title";
import GlowContainer from "@/components/shared/GlowContainer";

export default function Experience() {
  return (
    <section
      className='flex flex-col md:flex-row min-w-full bg-[#eee] sm:py-8 lg:py-16'
      id='experience'
    >
      <div className='flex flex-col gap-8 md:w-1/2 pt-8 md:pt-0'>
        <div className='flex text-end'>
          <div
            className='w-1/3 xl:w-1/2 pl-8'
            style={{
              background:
                "linear-gradient(to bottom, #FFFFFF00 65%,  #9fc5e8 35%)",
            }}
          >
            <Title title={"experience"} />
          </div>
        </div>
        <div className='max-w-4xl mx-auto h-full flex flex-col gap-8 px-8 lg:px-16'>
          <Description>
            <p>
              Apart from my technical skills, I am also eager to develop a
              variety of soft skills, including{" "}
              <span className='font-bold'> leadership</span>,{" "}
              <span className='font-bold'> teamwork</span>,{" "}
              <span className='font-bold'> communication</span>,{" "} and{" "}
              <span className='font-bold'> adaptability</span>. This leads me to
              actively involved in a broad range of committees and activities.
            </p>
          </Description>
        </div>
      </div>
      <div className='md:w-1/2 p-8 md:p-0'>
        <GlowContainer opacity={0.25}>
          <div className='max-w-4xl'>
            <List
              date='Mar 2023 - Present'
              title='Web Developer'
              location='RISTEK Fasilkom UI'
              desc="Being involved in the development of website projects and participating in Ristek's internal classes"
            />
            <List
              date='Feb 2023 - Present'
              title='Vice Head of IT'
              location='KMK Fasilkom UI'
              desc="Responsible for creating organization's website using T3"
            />
            <List
              date='Feb - June 2023'
              title='Teaching Assistant'
              location='Fasilkom UI'
              desc='Teaching Assistant for Calculus 2'
            />
            <List
              date='Aug - Dec 2022'
              title='Mentor Coordinator'
              location='PMB Fasilkom UI'
              desc="Led 70 mentors in the Faculty's study orientation program"
            />
          </div>
        </GlowContainer>
      </div>
    </section>
  );
}
