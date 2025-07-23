import Card from "../../components/Card/Card"
import Heading from "../../components/Heading/Heading"
import dummyImage from "../../assets/person.png"
const ProjectPage = () => {

    const dummyData={
      imageUrl:`${dummyImage}`,
      languages:["html","scss","node","python","docker","next","react","dev"],
      title:"Project X",
      desc:"Discord anti-crash bot",
      link:"https://www.figma.com/design/7wHF5BYHezfu7nqDGjCTcA/Portfolio--Community-?node-id=0-1&p=f&t=7slkoCQLGyg02PjG-0"
    }
  return (
    <section className="flex flex-col gap-5">
        <div className="font-web flex items-center justify-between" >
        <div className="flex flex-col  gap-1 font-semibold">
        <span className="text-md md:text-lg text-white"><span className="text-primary">/</span>projects</span>
        <span className="text-sm md-text-md text-custom-gray">List of  my projects</span>
        </div>
       </div>

       <div className="">
        <Heading heading={"complete-apps"} showViewAll={false}/>
       </div>

        {/* add backend */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Card data={dummyData} cardType="project"/>
            <Card data={dummyData} cardType="project"/>
            <Card data={dummyData} cardType="project"/>
            <Card data={dummyData} cardType="project"/>
            <Card data={dummyData} cardType="project"/>
            <Card data={dummyData} cardType="project"/>
            <Card data={dummyData} cardType="project"/>

        </div>
    </section>
  )
}

export default ProjectPage