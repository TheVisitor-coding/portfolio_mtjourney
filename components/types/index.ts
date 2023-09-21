import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}