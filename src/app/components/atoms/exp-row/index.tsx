import { poppins } from "@/fonts";
import { IExpRow } from "./interface";
import Typography from "../typhography";

const ExpRow: React.FC<IExpRow> = ({ date, title, location, desc }) => {
  return (
    <div
      className='
        w-full flex flex-col lg:grid lg:grid-cols-5 gap-2 lg:gap-8 p-4 md:pr-8 lg:p-8 bg-custom-off-black items-start font-poppins
      '
    >
      <Typography
        variant='caption'
        additionalStyles='col-span-1 pt-1 text-neutral-400'
      >
        {date}
      </Typography>
      <div className='col-span-2'>
        <Typography variant='subheading1' additionalStyles='text-white'>
          {title}
        </Typography>
        <Typography
          variant='subheading2'
          additionalStyles='italic text-neutral-400'
        >
          {location}
        </Typography>
      </div>
      <Typography
        variant='caption'
        additionalStyles='text-neutral-400 pt-1 tracking-wide lg:text-right col-span-2'
      >
        {desc}
      </Typography>
    </div>
  );
};

export default ExpRow;
