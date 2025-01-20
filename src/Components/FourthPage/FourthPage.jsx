import React from 'react'
import { CiImport } from "react-icons/ci";
import ImportList from '../ImportList/ImportList';
import Back from '../Back/Back';
import { useNavigate } from 'react-router-dom';
import './FourthPage.css'

const FourthPage = () => {
    const navigate = useNavigate();
  return (
    <div className=' totaldiv h-screen w-full relative py-[3vw] flex flex-col justify-around items-center' >
        <Back/>
        <div className=' buttonelem flex flex-col gap-[2vw] justify-center items-center '>
            <div className=' importdiv flex gap-[1vw] text-white justify-center items-center '>
                <p>Choose your file : </p>
                <input className=' importfile rounded-xl w-[6.5vw] h-[1.8vw] ' type="file" />
            </div>
            <button className='w-[6vw] importbutton rounded-lg bg-white text-black flex justify-center items-center gap-[1vh] '>Import<CiImport/></button>
        </div>

       

        <div className='w-full flex flex-col gap-[2vh] justify-center items-center'>
            <div className=' heading w-[40%] flex  justify-around items-center text-white ' >
                <p>Unit no.</p>
                <p>Department</p>
                <p>Organisation</p>
                <p>Name</p>
            </div>
            <div className=' bg-zinc-300 barr w-[50%] h-[1px]'></div>
            <div className='importylist w-[40%] max-h-[20vw] overflow-auto flex flex-col items-center gap-[1vh] ' >
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />
                <ImportList />

                <ImportList />
                <ImportList />
            </div>
            <div className=' bg-zinc-300 barr w-[50%] h-[1px]'></div>
        </div>

        <div className=' lowerbuttondiv flex gap-[2vh] justify-center items-center '>
            <button onClick={()=>{navigate('/bulk-import')}} className='w-[6vw] registerbutton bg-blue-600 rounded-md text-white ' >Register</button>
            <button onClick={()=>{navigate('/img-upload')}} className='w-[6vw] proceedbutton bg-white flex justify-center items-center rounded-md' >Proceed</button>
        </div>


    </div>
  )
}

export default FourthPage