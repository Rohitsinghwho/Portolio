import Hero from "../../components/Hero/Hero"
import About from "../../components/Section/About/About"
import Contact from "../../components/Section/Contact/Contact"
import Projects from "../../components/Section/Project/Projects"
import Skill from "../../components/Section/Skill/Skill"

const Home = () => {
  return (
    <>
        <Hero/>
        <Projects/>
        <Skill/>
        <About/>
        <Contact/>
    </>
  )
}

export default Home