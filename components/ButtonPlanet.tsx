import { ButtonProps } from "./types";


function ButtonPlanet({ title, handleClick }: ButtonProps) {
  return (
    <div>
      <span className="absolute z-10 transition-all -top-1 right-8 w-2 h-2 bg-text-color rounded-full hover:left-8"></span>
      <span className="absolute z-20 transition-all -bottom-1 left-8 w-2 h-2 bg-text-color rounded-full hover:right-8"></span>
      <button
        className="relative z-0 lg:px-8 lg:py-5 px-6 py-4 border-1 rounded-2xl border-text-color text-text-color font-kallisto font-medium text-xs tracking-widest"
      >
        {title}
      </button>
    </div>

  );
}

export default ButtonPlanet;

