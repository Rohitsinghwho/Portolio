import React from 'react'

type Data={
    imageUrl?:string,
    languages:string[],
    title:string,
    desc?:string,
    link?:string
}

type CardProps={
    data:Data
    cardType:string
}

const  Card:React.FC<CardProps>= ({data,cardType}) => {


  // add backend
  const handleClick=()=>{

  }
  return (
      <div className="w-64 md:w-56 lg:w-64 border border-custom-gray font-web">
         {/* add backend */}
          {data.imageUrl&&(<img src={data.imageUrl} alt="" />)}
          {cardType==="skill"&&(
            <div className='text-md text-white w-48 break-words overflow-y-auto'>{data.title}</div> 
          )}
          <div className="text-xs md:text-sm flex w-64 md:w-56 lg:w-64 text-custom-gray gap-2 flex-wrap border border-b-custom-gray  border-l-0 border-r-0">
            {/* add backend */}
            {data.languages.map((item)=>(
                <span>{item.toUpperCase()}</span>
            ))}
          </div>
          <div className='flex flex-col w-64 md:w-56 lg:w-64 p-2'>
            {cardType==="project"&&(
              <div className='text-md text-white w-48 break-words overflow-y-auto'>{data.title}</div>  
            )}
            {data.desc&&(<div className=' w-64 md:w-56 lg:w-64 break-words overflow-y-auto text-xs text-custom-gray'>{data.desc}</div>)}
            {cardType==="project"&&(
            <div className='h-12 w-64 md:w-56 lg:w-64 flex items-center'>
            <button className=' w-max p-1 border border-primary cursor-pointer text-white' onClick={handleClick}>Live{" <->"}</button>
            </div>
            )}
          </div>
        </div>
  )
}

export default Card;