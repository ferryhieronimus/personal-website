import Description from "@/components/shared/Description";
import Title from "@/components/shared/Title";
import Gallery from "@/components/shared/Gallery";

export default function Education() {
  return (
    <section
      className='flex flex-col md:flex-row min-w-full bg-white sm:py-8 lg:py-16'
      id='about'
    >
      <div className='md:w-1/2 flex justify-end'>
        <Gallery />
      </div>
      <div className='flex flex-col gap-8 md:w-1/2 py-8 md:py-0'>
        <div className='flex justify-end'>
          <div
            className='min-w-[50%] xl:w-1/2 pr-8'
            style={{
              background:
                "linear-gradient(to bottom, #FFFFFF00 65%,  #f6dB00 35%)",
            }}
          >
            <Title title={"education"} />
          </div>
        </div>
        <div className='max-w-4xl mx-auto h-full flex flex-col gap-8 px-8 lg:px-16'>
          <Description>
            <p>
              I'm currently pursuing my degree in Computer Science at{" "}
              <span className='font-bold'> Faculty of Computer Science, Universitas Indonesia</span>. Notable
              courses include{" "}
              <span className='italic'> Data Structures and Algorithms</span>,{" "}
              <span className='italic'> Platform-Based Programming</span>,
              <span className='italic'> Databases</span>, and{" "}
              <span className='italic'> Human-Computer Interaction</span>.
            </p>
            <br />
            <p>
              Being a student at one of the most prestigious universities in
              Indonesia unlocks many posibilities for me. I have a chance to
              meet amazing people and supportive friends who share similiar
              passions.
            </p>
          </Description>
        </div>
      </div>
    </section>
  );
}
