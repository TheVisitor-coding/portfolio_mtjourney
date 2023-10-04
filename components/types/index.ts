import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  className: string;
  velocite?: number;
}

export interface TitleProps {
  title: string;
  yBegin: number;
  yEnd: number;
}