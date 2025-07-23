import person from "../../assets/person.png"
import dots from "../../assets/dots.png"
import logo from "../../assets/logo.png"
import comma from "../../assets/comma.png"
const Hero = () => {
  return (
    <div className="text-white font-web  w-full">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
      <div className="flex flex-col gap-5 max-w-full md:w-[500px] items-start">
        <div className="text-4xl  text-center md:text-start">
          Rohit is a <span className="text-primary">web developer</span> and a
          Awesome <span className="text-primary">coder</span>
        </div>
        <div className="text-custom-gray text-sm md:w-[300px] text-center md:text-start">
            He crafts responsive websites where technologies meet creativity
        </div>
      <button className="w-[120px] h-[40px] border-1  border-primary p-2 hidden md:block cursor-pointer">contact{"=>"}me</button>
      </div>
      <div className="relative w-max mt-10 md:w-[320px]">
        <div>
        <img className="h-20 w-20 absolute bottom-10 right-0 z-30" src={dots} alt="" />
        <img className="h-30 w-30 absolute top-1 z-10 translate-x-0" src={logo} alt="" />
        <img  className="h-64 w-[310px] md:h-72 md:w-[310px] relative z-20" src={person} alt="" />
        </div>
        <div className="flex gap-2 mt-2">
          <div className="h-5 w-5 bg-primary"></div>
          {/* TODO:: use backend here */}
          <span className="text-sm text-custom-gray">currently Working on <span className="text-white">{"Portfolio"}</span></span>
        </div>
      </div>
      </div>

      <div className=" flex flex-col mt-5 items-center   text-custom-gray">
        <div className=" relative border border-custom-gray p-3 text-sm w-80 md:w-xl md:text-lg text-center md:text-left">
           <img className="absolute  top-14 right-20 md:top-11 h-5 w-5 font-web" src={comma}/>
            <img className="absolute -top-2 left-0 h-5 w-5" src={comma}/>
          
          <span>With great power comes great electricity bill.</span>
          
        </div>
        <div className="flex justify-end w-80 md:w-xl text-sm md:text-lg ">
        <div className="border border-custom-gray w-max ">
          <span>- Dr. Who</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
