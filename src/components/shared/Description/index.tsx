export default function Description({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative tracking-wide text-sm sm:text-base lg:text-lg max-w-4xl text-[#010101]'>
      {children}
    </div>
  );
}
