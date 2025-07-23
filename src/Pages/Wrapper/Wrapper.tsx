import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import About from "../../components/Section/About/About"
import Projects from "../../components/Section/Project/Projects"
import Skill from "../../components/Section/Skill/Skill"


const Wrapper = () => {
  return (
    <div className="flex justify-center">
        <div className="md:w-[100%] lg:w-[80%]">
            <Navbar/>
            <Hero/>
            <Projects/>
            <Skill/>
            <About/>
        </div>
    </div>
  )
}

export default Wrapper