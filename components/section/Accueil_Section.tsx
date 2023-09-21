import { CurvingLine } from "..";
import ButtonGradient from "../ButtonGradient";

function AccueilSection() {
  return (
    <>
      <div className="relative flex flex-col items-center gap-5 mt-40">
        <div className="text-text-color flex flex-row gap-5  font-kallisto font-bold justify-center">
          <span className="w-64 text-7xl h-24 anim-text rotate-6 -translate-y-6">ROSSI</span>
          <div>
            <span className="text-7xl">Matteo</span>
            <CurvingLine />
          </div>
        </div>
        <div className="flex flex-row text-text-color gap-2 font-kallisto text-4xl mb-10">
          <h3 className="font-light">Développeur</h3>
          <h3 className="bg-gradient-to-r bg-clip-text text-transparent to-secondary-color from-primary-color">Full-Stack / Webdesign</h3>
        </div>
        <div className="relative flex flex-col items-center">
          <ButtonGradient title="Montrez-moi votre univers >>" />
          <div className=" text-transparent font-regular mix-blend-overlay z-0 -rotate-[10deg] text-10xl -translate-y-24 font-moby font-outline-2">MY UNIVERSE</div>
        </div>
        <span className="absolute w-96 h-96 bottom-0 -left-56 rounded-full opacity-50 bg-primary-color mix-blend-screen blur-[118px]"></span>

      </div>
    </>
  );
}

export default AccueilSection;