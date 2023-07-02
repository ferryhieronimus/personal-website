import GlowContainer from "../GlowContainer";

export default function Footer() {
  return (
    <GlowContainer>
      <div className='flex flex-col min-w-full items-center justify-center bg-[#1c2025] p-12 sm:p-18 lg:p-24 gap-4'>
        <div className='text-white text-3xl sm:text-6xl '>
          Let's collaborate
        </div>
        <div className='text-white'>I'm always up for new opportunities</div>
        <div className='text-white'>Email me</div>
      </div>
    </GlowContainer>
  );
}
