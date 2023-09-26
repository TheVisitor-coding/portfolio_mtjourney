import { ButtonProps } from "./types";

function ButtonGradient({ title, handleClick }: ButtonProps) {
  return (
    <button className="gradient-btn z-10 font-kallisto text-lg text-text-color font-medium py-3 md:px-16 px-8  rounded-[30px]">
      {title}
    </button>
  );
}

export default ButtonGradient;