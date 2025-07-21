import { useState } from "react";
import Cross from "../../assets/cross.png";
import ham from "../../assets/ham.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";

const Navbar = () => {
  const [showNav, SetShowNav] = useState(false);

  return (
    <nav className="max-h-screen w-full font-web text-white mt-3 md:mt-10">
      <div className=" flex justify-between max-w-screen text-xl items-center">
        <h2 className="text-xl md:text-2xl lg:text-xl">
          <span className="text-primary">#</span>DEV
          <span className="text-primary">R</span>ohit
        </h2>
        <img
          onClick={() => SetShowNav(!showNav)}
          src={showNav ? Cross : ham}
          alt="hamburger"
        />
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showNav
            ? "max-h-screen opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-y-95"
        } flex flex-col gap-30 py-10 text-custom-gray text-lg`}
      >
          <div className="flex flex-col gap-8 text-md md:text-xl">
            <span className="w-max cursor-pointer transition-all duration-500 ease-in-out overflow-hidden">
              <span className="text-primary">#</span>
              <span>home</span>
            </span>
            <span className="w-max cursor-pointer transition-all duration-500 ease-in-out overflow-hidden">
              <span className="text-primary">#</span>
              <span>works</span>
            </span>
            <span className="w-max cursor-pointer transition-all duration-500 ease-in-out overflow-hidden">
              <span className="text-primary">#</span>about-me
            </span>
            <span className="w-max cursor-pointer transition-all duration-500 ease-in-out overflow-hidden">
              <span className="text-primary">#</span>contacts
            </span>
          </div>
          <div className="transition-all duration-500 ease-in-out overflow-hidden">
            <div className="flex justify-center gap-4">
              <img className="cursor-pointer" src={github} alt="github" />
              <img className="cursor-pointer" src={linkedin} alt="linkedin" />
              <img className="cursor-pointer" src={email} alt="email" />
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
