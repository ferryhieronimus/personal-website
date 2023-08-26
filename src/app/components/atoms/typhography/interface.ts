import React, { ReactNode, HTMLProps, ElementType } from "react";
import { variants } from "./variants";

export interface ITypography {
  as?: ElementType;
  variant: keyof typeof variants;
  additionalStyles?: string
  children: ReactNode | string;
}
