import type React from "react"

type HeadingProps={
    heading:String,
    showViewAll:Boolean
}

const Heading:React.FC<HeadingProps> = ({heading,showViewAll}) => {
  return (
    <div className="font-web flex items-center justify-between" >
        <div className="flex items-center gap-1 font-semibold">
        <span className="text-md md:text-lg text-white"><span className="text-primary">#</span>{heading}</span>
        <div className={`w-30 md:w-80 h-0.5 bg-primary`}></div>
        </div>
        {/* add backend */}
        {showViewAll&&(
            <button className=" w-max p-2 text-sm text-white flex items-center justify-center">View{"=>"}All</button>
        )}
    </div>
  )
}

export default Heading