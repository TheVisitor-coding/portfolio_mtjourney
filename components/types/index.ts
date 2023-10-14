import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  className: string;
  velocite?: number;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface TitleProps {
  title: string;
  yBegin: number;
  yEnd: number;
}