import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"


const Wrapper = () => {
  return (
    <div className="h-screen flex justify-center">
        <div className="md:w-[100%] lg:w-[80%]">
            <Navbar/>
            <Hero/>
        </div>
    </div>
  )
}

export default Wrapper