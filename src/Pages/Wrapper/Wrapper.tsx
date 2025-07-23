
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import "../../index.css"
import { Outlet } from "react-router-dom"

const Wrapper = () => {
  return (
    <div className="flex justify-center items-center main-container">
      <div className="md:w-[100%] lg:w-[80%]">
        <div >
          <Navbar/>
            <main className="p-2 lg:p-0">
              {<Outlet/>}
            </main>
        </div>
        <div className="h-0.5 w-full border border-white mt-15"></div>
        <Footer/>
      </div>
    </div>
  )
}

export default Wrapper