import Image from "next/image";
import Typography from "../../atoms/typhography";

export default function Gallery() {
  return (
    <div className='grid grid-cols-12 w-full h-full aspect-[3/2] max-w-5xl '>
      <div className='col-span-4 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/1.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition will-change-transform duration-300 z-20 hover:z-0'
        />
        <Typography
          variant='body1'
          additionalStyles='z-10 pointer-events-none text-custom-almost-white'
        >
          BETIS 2023
        </Typography>
      </div>

      <div className='col-span-4 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/8.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition will-change-transform duration-300 z-20 hover:z-0'
        />
        <Typography
          variant='body1'
          additionalStyles='z-10 pointer-events-none text-custom-almost-white'
        >
          PMB 2022
        </Typography>
      </div>

      <div className='col-span-4 row-span-2 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/9.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition will-change-transform duration-300 z-20 hover:z-0'
        />
        <Typography
          variant='body1'
          additionalStyles='z-10 pointer-events-none text-custom-almost-white'
        >
          Tiket.com company visit
        </Typography>
      </div>

      <div className='col-span-3 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/7.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition will-change-transform duration-300 z-20 hover:z-0'
        />
        <Typography
          variant='body1'
          additionalStyles='z-10 pointer-events-none text-custom-almost-white'
        >
          COMPFEST 14
        </Typography>
      </div>

      <div className='col-span-5 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/4.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition will-change-transform duration-300 z-20 hover:z-0'
        />
        <Typography
          variant='body1'
          additionalStyles='z-10 pointer-events-none text-custom-almost-white'
        >
          RISTEK 2023
        </Typography>
      </div>

      <div className='col-span-5 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/2.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition will-change-transform duration-300 z-20 hover:z-0'
        />
        <Typography
          variant='body1'
          additionalStyles='z-10 pointer-events-none text-custom-almost-white'
        >
          BETIS 2023
        </Typography>
      </div>

      <div className='col-span-4 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/3.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition will-change-transform duration-300 z-20 hover:z-0'
        />
        <Typography
          variant='body1'
          additionalStyles='z-10 pointer-events-none text-custom-almost-white'
        >
          RISTEK 2023
        </Typography>
      </div>

      <div className='col-span-3 relative flex justify-center items-center p-8 text-center'>
        <Image
          fill
          src='/images/album/6.jpg'
          alt={""}
          style={{ objectFit: "cover" }}
          className='hover:brightness-50 transition will-change-transform duration-300 z-20 hover:z-0'
        />
        <Typography
          variant='body1'
          additionalStyles='z-10 pointer-events-none text-custom-almost-white'
        >
          EDUCARE 2023
        </Typography>
      </div>
    </div>
  );
}
