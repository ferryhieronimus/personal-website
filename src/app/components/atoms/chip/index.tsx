import React from "react";
import { IChip } from "./interface";

export const Chip: React.FC<IChip> = ({ text }) => {
  return (
    <li className='border border-neutral-800 px-2 py-1 rounded-full font-poppins'>{text}</li>
  );
};
