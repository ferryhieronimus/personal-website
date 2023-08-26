export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
      <div className='text-base border border-black text-black hover:text-white hover:bg-[#000] transition duration-300 w-40 p-2 text-center'>
        {children}
      </div>
    </div>
  );
}
