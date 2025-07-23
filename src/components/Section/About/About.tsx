import React from "react";
import Heading from "../../Heading/Heading";
import Person from "../../../assets/Image.png";
import dots from "../../../assets/dots.png";

const About = () => {
  return (
    <section className="mt-10">
      <Heading heading={"about-me"} showViewAll={false} />
      <div className="lg:flex lg:flex-row-reverse">
      <div className="w-full h-[400] relative flex items-center justify-center lg:justify-end">
        <img className="h-[350px] w-[300px]" src={Person} alt="me" />
        <img className="h-15 w-15 absolute top-15 left-20" src={dots} alt="" />
        <img
          className="h-15 w-15 absolute bottom-20 right-20"
          src={dots}
          alt=""
          />
      </div>
      <div className="font-web text-custom-gray  p-2 lg:w-3xl">
        <div className="flex flex-col gap-2 text-left">
        <p>Hello, I’m Rohit!</p>
        <p>
          I’m a passionate full-stack web developer with a strong foundation in
          both front-end and back-end development. I enjoy building modern,
          responsive, and user-focused web applications from scratch.
        </p>

        <p>
          Alongside web development, I’m also diving into the world of
          Artificial Intelligence and Machine Learning. I’m constantly exploring
          how these powerful technologies can be combined with web platforms to
          create smarter, more impactful digital experiences.
        </p>

        <p>
          I'm always eager to learn, grow, and push the boundaries of what’s
          possible with code. Whether it’s a beautifully crafted UI or a
          scalable backend system, I love turning ideas into reality.
        </p>
        </div>
        <button className="w-[120px] h-[40px] border-1  border-primary p-2 mt-2 cursor-pointer">read more</button>
      </div>
    </div>
    </section>
  );
};

export default About; 
