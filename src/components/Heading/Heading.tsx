import type React from "react"
import { useNavigate } from "react-router-dom"
type HeadingProps={
    heading:String,
    showViewAll:Boolean
}

const Heading:React.FC<HeadingProps> = ({heading,showViewAll}) => {
  const navigate =useNavigate()
  return (
    <div className="font-web flex items-center justify-between" >
        <div className="flex items-center gap-1 font-semibold">
        <span className="text-md md:text-lg text-white"><span className="text-primary">#</span>{heading}</span>
        <div className={`w-30 md:w-80 h-0.5 bg-primary`}></div>
        </div>
        {/* add backend */}
        {showViewAll&&(
            <button onClick={()=>navigate("/projects")}className=" w-max p-2 text-sm text-white flex items-center justify-center">View{"=>"}All</button>
        )}
    </div>
  )
}

export default Heading