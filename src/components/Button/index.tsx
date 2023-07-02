export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
      <div className='text-base border border-black text-black hover:text-white bg-[#00000000] hover:bg-[#000] transition duration-500 w-48 p-2 text-center'>
        {children}
      </div>
    </div>
  );
}
