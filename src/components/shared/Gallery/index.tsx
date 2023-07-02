import Image from "next/image";

export default function Gallery() {
  return (
    <div className='grid grid-cols-12 w-full h-full aspect-[3/2] max-w-5xl'>
      <div className='col-span-4 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/1.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition z-20 hover:z-0'
        />
        <div className='transform z-10 text-white pointer-events-none'>
          Bukber BETIS 2023
        </div>
      </div>

      <div className='col-span-4 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/8.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition z-20 hover:z-0'
        />
        <div className='transform z-10 text-white pointer-events-none'>
          PSAF Day-2 PMB 2022
        </div>
      </div>

      <div className='col-span-4 row-span-2 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/9.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition z-20 hover:z-0'
        />
        <div className='transform z-10 text-white pointer-events-none'>
          Tiket.com company visit
        </div>
      </div>
      <div className='col-span-3 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/7.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition z-20 hover:z-0'
        />
        <div className='transform z-10 text-white pointer-events-none'>
          COMPFEST 14 Awarding Night
        </div>
      </div>

      <div className='col-span-5 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/4.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition z-20 hover:z-0'
        />
        <div className='transform z-10 text-white pointer-events-none'>
          Ristek 2023 Q1 Award
        </div>
      </div>

      <div className='col-span-5 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/2.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition z-20 hover:z-0'
        />
        <div className='transform z-10 text-white pointer-events-none'>
          BETIS 2023 Closing Ceremony
        </div>
      </div>

      <div className='col-span-4 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/3.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition z-20 hover:z-0'
        />
        <div className='transform z-10 text-white pointer-events-none'>
          Ristek 2023 Q1 Award
        </div>
      </div>

      <div className='col-span-3 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/6.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition z-20 hover:z-0'
        />
        <div className='transform z-10 text-white pointer-events-none'>
          EDUCARE 2023 WebDev Workshop
        </div>
      </div>
    </div>
  );
}
