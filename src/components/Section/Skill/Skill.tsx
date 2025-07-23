import type React from "react"
import Heading from "../../Heading/Heading"
import dots from "../../../assets/dots.png"
import logo from "../../../assets/logo.png"
import Card from "../../Card/Card"

const Skill:React.FC<any> = () => {

    //replace with backend
    const dummyData=[
        {
            title:"Language",
            languages:["TypeScript","Python","javascript","ruby"]
        },
        {
            title:"Databases",
            languages:["SQLite","Postgres","MOngoDB"]
        },
        {
            title:"Others",
            languages:["Html","CSS","EJS","SCSS"]
        },
        {
            title:"Framework",
            languages:["React","Veu","Discord.js","Express.js","Flask"]
        },
        {
            title:"Tools",
            languages:["VScode","Figma","Git","Font-awesome"]
        }
    ]
  return (
    <section className="mt-10">
        <Heading heading={"skills"} showViewAll={false} />
        <div className="flex flex-col lg:flex-row  gap-5 p-2 mt-5 md:mt-10">
            <div className="relative  h-80 w-full lg:w-[40%] lg:h-96">
                <img className="absolute top-40 left-30 md:left-80 w-[80px] h-[80px]" src={dots} alt="dots" />
                <img className=" absolute top-50 md:left-30 w-[80px] h-[80px]" src={dots} alt="dots" />
                <img className="absolute lg:-bottom-13 bottom-10 right-10 h-[100px] w-[100px] md:w-[150px] md:h-[150px]" src={logo} alt="logo" />
                <div className="absolute lg:top-30  right-30 top-10 md:right-50 md:top-15 w-[80px] h-[80px] border border-white"></div>
                <div className="absolute top-10 left-15 lg:top-1 w-[100px] h-[100px] border border-white"></div>
            </div>
            {/* add backend */}
            <div className="lg:flex gap-5 lg:flex-col lg:w-[60%]">
            <div className="">
                <Card data={dummyData[0]} cardType="skill"/>
            </div>
            <div className=" flex flex-col items-end gap-3 mt-2 md:mt-0">
                <Card data={dummyData[1]} cardType="skill"/>
                <Card data={dummyData[2]} cardType="skill"/>
            </div>
            <div className=" flex flex-col items-center gap-3 mt-2 md:mt-0">
                <Card data={dummyData[3]} cardType="skill"/>
                <Card data={dummyData[4]} cardType="skill"/>
            </div>
            </div>
            

        </div>
    </section>
  )
}

export default Skill