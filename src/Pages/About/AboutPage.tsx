import Person from "../../assets/person.png"
import dots from "../../assets/dots.png"
import Card from "../../components/Card/Card"
import Heading from "../../components/Heading/Heading"
const AboutPage = () => {
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
    <section>
        <div>
        <div className="font-web flex items-center justify-between" >
        <div className="flex flex-col  gap-1 font-semibold">
        <span className="text-md md:text-lg text-white"><span className="text-primary">/</span>about-me</span>
        <span className="text-sm md-text-md text-custom-gray">who am i?</span>
        </div>
       </div>


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
      <div className="font-web text-custom-gray mt-20 lg:w-3xl">
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
      </div>
    </div>
    </div>

    {/* skill */}

{/* add backend */}
     <div className="mt-10">
        <Heading heading={"skills"} showViewAll={false}/>
        <div className="mt-10">
            <div className="mt-2 flex flex-col md:flex-row flex-wrap gap-2">
          {dummyData.map((item)=>(
                <Card data={item} cardType="skill"/>
            ))}
            </div>
            </div>
    </div>
    </section>
  )
}

export default AboutPage