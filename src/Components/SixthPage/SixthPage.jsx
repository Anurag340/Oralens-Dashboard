import React from 'react'
import { GoUpload } from "react-icons/go";


const SixthPage = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-around py-[8vw] items-center gap-[1vw]'>
        <div className='flex flex-col gap-[1vw] justify-center items-center '>
            <p className='text-white' >Enter Individual ID :</p>
            <div className='flex w-fit gap-[2vh] '>
                <input type="text" className='rounded-md bg-blue-600' placeholder='  Enter Individual ID' />
                <button className='p-[.2vh] px-[1vh] rounded-md bg-blue-600 text-white ' >Go</button>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-[2vw]'>
        <p className='text-white font-light text-lg ' >You can upload your PDF file below :</p>
        <div className='flex justify-center items-center gap-[1vw]' >
            <input type="file" className='w-[6.5vw] font-light rounded-md' />
            <button className='p-[.2vh] flex rounded-md  justify-center items-center gap-[.5vh] px-[1vh] bg-white text-black ' >Upload <GoUpload/></button>
        </div>
        </div>

        <button className='p-[.2vh] px-[1vh] bg-white text-zinc-800 text-sm rounded-full' >Show all records</button>

    </div>
  )
}

export default SixthPage