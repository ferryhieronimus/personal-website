"use client";
import { lato } from "@/app/font";
import clsx from "clsx";

export default function List({
  date,
  title,
  location,
  desc,
}: {
  date: string;
  title: string;
  location: string;
  desc: string;
}) {
  return (
    <div
      className={clsx(
        lato.className,
        "w-full flex flex-col lg:grid lg:grid-cols-5 gap-2 lg:gap-8 p-4 md:pr-8 lg:p-8 bg-[#222] items-start"
      )}
    >
      <div className='text-[#9a9ea3] text-xs col-span-1 pt-1'>{date}</div>
      <div className='text-custom-off-white col-span-2'>
        <div className='text-lg lg:text-xl text-white'>{title}</div>
        <div className='italic text-sm text-[#aeb1b5]'>{location}</div>
      </div>
      <div className='text-[#9a9ea3] text-xs lg:text-sm pt-1 tracking-wide lg:text-right font-inter col-span-2'>
        {desc}
      </div>
    </div>
  );
}
