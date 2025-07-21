import type React from "react";
import Heading from "../../Heading/Heading";
import Card from "../../Card/Card";
import dummyImage from "../../../assets/dummy.jpg"

const Projects: React.FC<any> = () => {

    // change it with real data from backend
    const dummyData={
      imageUrl:`${dummyImage}`,
      languages:["html","scss","node","python","docker","next","react","dev"],
      title:"Project X",
      desc:"Discord anti-crash bot",
      link:"https://www.figma.com/design/7wHF5BYHezfu7nqDGjCTcA/Portfolio--Community-?node-id=0-1&p=f&t=7slkoCQLGyg02PjG-0"
    }
    
  return (
    <div className="mt-10">
      <Heading heading={"project"} showViewAll={true} />
      {/* add backend */}
      <div className="p-2 md:p-0 flex flex-wrap gap-3 md:gap-5 justify-center">
       <Card data={dummyData}/>
       <Card data={dummyData}/>
       <Card data={dummyData}/>
      </div>
    </div>
  );
};

export default Projects;
