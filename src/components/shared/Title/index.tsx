export default function Title({ title }: { title: string }) {
  return (
    <div className='text-3xl sm:text-5xl lg:text-6xl font-light text-[#222] select-none'>
      {title}
    </div>
  );
}
