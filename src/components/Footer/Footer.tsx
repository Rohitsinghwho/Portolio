import github from "../../assets/github.png"
import linkedIn from "../../assets/linkedin.png"
import email from "../../assets/email.png"

const Footer = () => {
  return (
    <footer className="mt-10 font-web p-2">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-0">
            <div className="flex flex-col">
                <div className="flex gap-3 justify-center">
                <span className="text-white font-semibold ">DevRohit</span>
                <span className="text-custom-gray">developmentbyrohit@gmail.com</span>
                </div>
                <div>
                    <span className="text-white">Full stack devloper and AI&ML Enthusiast</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <span className="text-white">Media</span>
                <div className="flex gap-2 items-center">   
                    <img src={email} alt="" />
                    <img src={linkedIn} alt="" />
                    <img src={github} alt="" />

                </div>
            </div>
        </div>
        <div className="text-center mt-5 text-custom-gray">
            <span>© Copyright 2025. Made by Rohit</span>
        </div>
    </footer>
  )
}

export default Footer