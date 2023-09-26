import Image from "next/image";
import ButtonPlanet from "../ButtonPlanet";


function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center mt-5 lg:mx-16 mx-5">
      <Image src="/logo_mtjourney.png" alt="MT_Journey Logo" width={63} height={33} className="" />
      <div className="flex flex-row xl:gap-24 lg:gap-14 gap-5 text-text-color font-moby xl:text-xs text-[10px]">
        <a href="#" className="transition-all hover:border-b-2 hover:border-primary-color">//Competences</a>
        <a href="#">//Expertises</a>
        <a href="#">//Process</a>
        <a href="#">//Portfolio</a>
        <a href="#">//Contact</a>
      </div>
      <div className="relative">
        <ButtonPlanet title="Un Projet ?" />
        <span className="absolute w-96 h-96 -top-56 left-0 rounded-full bg-secondary-color mix-blend-overlay blur-3xl"></span>
      </div>
    </nav>

  );
}

export default Navbar;