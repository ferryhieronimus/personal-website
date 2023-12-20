import Typography from "@/app/components/atoms/typhography";
import Gallery from "@/app/components/molecules/gallery";
import Button from "@/app/components/atoms/button";

export default function AboutSection() {
  return (
    <section
      className='flex flex-col md:flex-row min-w-full bg-custom-almost-white md:py-8'
      id='about'
    >
      <div className='md:w-1/2 flex justify-end'>
        <Gallery />
      </div>
      <div className='flex flex-col gap-8 md:w-1/2 py-8 md:py-16 '>
        <div className='flex md:justify-end'>
          <div
            className='w-1/3 md:w-1/2 pl-6 sm:pl-16 md:pr-8 md:pl-0'
            style={{
              background:
                "linear-gradient(to bottom, #FFFFFF00 65%,  #f6dB00 35%)",
            }}
          >
            <Typography variant='h2'>About</Typography>
          </div>
        </div>
        <div className='max-w-4xl mx-auto h-full flex flex-col gap-8 px-6 sm:px-8 lg:px-16'>
          <Typography variant='body1' additionalStyles='text-neutral-600'>
            I&apos;m currently pursuing my degree in Computer Science at{" "}
            <span className='font-bold'>
              {" "}
              Faculty of Computer Science, Universitas Indonesia
            </span>
            . As a third-year student, I found that my passion lies in web
            development and software engineering.
          </Typography>
          <Typography variant='body1' additionalStyles='text-neutral-600'>
            Being a student at one of the most prestigious universities in
            Indonesia unlocks many posibilities for me. I have a chance to meet
            amazing people and supportive friends who share similiar passions.
          </Typography>

          <a
            href='https://drive.google.com/file/d/1rCh8wXwEYRUZTUljHVNiuV2Y2xRJi98T/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button>View My CV</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
