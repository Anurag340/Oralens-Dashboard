import React from 'react'
import { CiImport } from "react-icons/ci";
import ImportList from '../ImportList/ImportList';
import Back from '../Back/Back';

const FourthPage = () => {
  return (
    <div className='h-screen w-full relative py-[3vw] flex flex-col justify-around items-center' >
        <Back/>
        <div className='flex flex-col gap-[2vw] justify-center items-center '>
            <div className='flex gap-[1vw] text-white justify-center items-center '>
                <p>Choose your file : </p>
                <input className='rounded-xl w-[6.5vw] h-[1.8vw] ' type="file" />
            </div>
            <button className='w-[6vw] rounded-lg bg-white text-black flex justify-center items-center gap-[1vh] '>Import<CiImport/></button>
        </div>

       

        <div className='w-full flex flex-col gap-[2vh] justify-center items-center'>
            <div className='w-[40%] flex  justify-around items-center text-white ' >
                <p>Unit no.</p>
                <p>Department</p>
                <p>Organisation</p>
                <p>Name</p>
            </div>
            <div className='bg-zinc-300 w-[50%] h-[1px]'></div>
            <div className=' w-[40%] max-h-[20vw] overflow-auto flex flex-col items-center gap-[1vh] ' >
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
            </div>
            <div className='bg-zinc-300 w-[50%] h-[1px]'></div>
        </div>

        <div className='flex gap-[2vh] justify-center items-center '>
            <button className='w-[6vw] bg-blue-600 rounded-md text-white ' >Register</button>
            <a className='w-[6vw] bg-white flex justify-center items-center rounded-md' >Proceed</a>
        </div>


    </div>
  )
}

export default FourthPage