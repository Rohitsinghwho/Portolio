import { useState } from "react";
import Cross from "../../assets/cross.png";
import ham from "../../assets/ham.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [showNav, SetShowNav] = useState(false);


  const handleGmailCompose = () => {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=developmentbyrohit@gmail.com&su=Hello&body=Hi Rohit!",
    "_blank"
  );
};

  return (
    <nav className="max-h-screen w-full font-web text-white mt-3 md:mt-10 p-2 lg:p-0 md:flex md:justify-between">
      <div className=" flex justify-between max-w-screen text-xl items-center">
        <h2 className="text-xl md:text-2xl lg:text-xl">
          <Link to={"/"}>
          <span className="text-primary">#</span>DEV
          <span className="text-primary">R</span>ohit
          </Link>
        </h2>
        <img
          onClick={() => SetShowNav(!showNav)}
          src={showNav ? Cross : ham}
          alt="hamburger"
          className="md:hidden"
        />
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showNav
            ? "max-h-screen opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-y-95"
        } flex flex-col gap-30 py-10 text-custom-gray text-lg md:max-h-screen md:opacity-100 md:scale-100`}
      >
          <div className="flex flex-col gap-8 text-md  md:flex-row">
            <span className="w-max cursor-pointer transition-all duration-500 ease-in-out overflow-hidden">
              <NavLink to={"/"} className={({isActive})=>isActive?"text-white":"text-custom-gray"}>
              <span className="text-primary">#</span>
              <span onClick={()=>SetShowNav(false)}>home</span>
              </NavLink>
            </span>
            <span className="w-max cursor-pointer transition-all duration-500 ease-in-out overflow-hidden">
              <NavLink to={"/projects"} className={({isActive})=>isActive?"text-white":"text-custom-gray"}>
              <span className="text-primary">#</span>
              <span onClick={()=>SetShowNav(false)}>works</span>
              </NavLink>
            </span>
            <span className="w-max cursor-pointer transition-all duration-500 ease-in-out overflow-hidden">
              <NavLink to={"/about"} className={({isActive})=>isActive?"text-white":"text-custom-gray"} onClick={()=>SetShowNav(false)}>
              <span className="text-primary">#</span>about-me
              </NavLink>
            </span>
            <span className="w-max cursor-pointer transition-all duration-500 ease-in-out overflow-hidden">
               <NavLink to={"/contact"} className={({isActive})=>isActive?"text-white":"text-custom-gray"} onClick={()=>SetShowNav(false)}>
              <span className="text-primary" >#</span>contacts
               </NavLink>
            </span>
          </div>
          <div className="transition-all duration-500 ease-in-out overflow-hidden md:hidden">
            <div className="flex justify-center gap-4">
              <img className="cursor-pointer" src={github} alt="github" onClick={()=>window.open("https://github.com/Rohitsinghwho","_blank")}/>
              <img onClick={()=>window.open("https://www.linkedin.com/in/rohit-singh-4b1702280/","_blank")} className="cursor-pointer" src={linkedin} alt="linkedin" />
           
              <img onClick={handleGmailCompose} src={email} alt="email" className="cursor-pointer" />
            

            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
