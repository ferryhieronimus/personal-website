export default function Projects() {
  return (
    <section
      className='flex min-w-full items-center justify-center bg-zinc-600 p-12 sm:p-18 lg:px-24 lg:py-20'
      id='projects'
    >
      <div className='flex flex-col gap-8 sm:px-10 lg:px-20`'>
        <div className='text-3xl sm:text-6xl mx-auto text-[#00000040] mb-2'>
          PROJECTS
        </div>
        <div className='flex flex-wrap justify-between items-center gap-4 max-w-4xl'>
          <div className='w-64 bg-[#ffffff80] mx-auto aspect-square'></div>
          <div className='w-64 bg-[#ffffff80] mx-auto aspect-square'></div>
          <div className='w-64 bg-[#ffffff80] mx-auto aspect-square'></div>
        </div>
      </div>
    </section>
  );
}
