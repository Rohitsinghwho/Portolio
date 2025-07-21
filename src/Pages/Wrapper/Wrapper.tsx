import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import Projects from "../../components/Section/Project/Projects"


const Wrapper = () => {
  return (
    <div className="flex justify-center">
        <div className="md:w-[100%] lg:w-[80%]">
            <Navbar/>
            <Hero/>
            <Projects/>
        </div>
    </div>
  )
}

export default Wrapper