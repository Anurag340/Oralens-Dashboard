import React from 'react'
import { PiArrowCircleLeftLight } from "react-icons/pi";
import { MdArrowLeft } from "react-icons/md";

const Back = () => {
  return (
    <div className='absolute top-[3vw] left-[3vw] flex gap-[3px] justify-center items-center text-white hover:cursor-pointer hover:scale-[1.05] duration-300 ' ><MdArrowLeft size={20} />Back</div>
  )
}

export default Back