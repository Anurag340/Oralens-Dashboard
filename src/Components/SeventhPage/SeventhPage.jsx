import React from 'react'
import Back from '../Back/Back'
import { CiSearch } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { MdFilterList } from "react-icons/md";
import ExportList from './ExportList';

const SeventhPage = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-[1vw] relative ' >
        <Back/>
        <div className='h-[80%] w-[80%] flex flex-col justify-around gap-[1vw] '>
            <div className='w-full flex justify-between ' >
                <div className='text-white flex gap-[2vh] justify-center items-center' >
                    <CiSearch size={25} />
                   

                    <input type="text" placeholder='  Search. . .' className='bg-zinc-300 rounded-lg' />
                    <MdFilterList size={25} />
                </div>

                <button className='flex justify-center items-center gap-[.5vh] h-[2vw] rounded-full px-[1vh] bg-white text-black ' >Export CSV <CiExport/> </button>

            </div>

            <div className='flex flex-col w-full gap-[2vw]'>
                    <div className='flex justify-around items-center text-white font-light' >
                        <p>ID</p>
                        <p>Name</p>
                        <p>Department</p>
                        <p>Organisation</p>
                        <p>Status</p>
                    </div>
                    <div className='h-[1px] w-full bg-zinc-300 ' ></div>

            </div>

            <div className='w-full flex flex-col gap-[2vh] overflow-auto h-[25vw] ' >
                <ExportList/>
                <ExportList/>
                <ExportList/>
                <ExportList/>
                <ExportList/>
                <ExportList/>
            </div>

            <div className='w-full h-[1px] bg-zinc-300 '></div>

            <div className='w-full justify-around items-center text-white  font-light flex '>
                <div className='flex justify-center items-center gap-[1vh]' >
                    <p>Not-Uploaded</p>
                    <div className='h-[.8vh] w-[1.5vw] bg-red-500 rounded-full '></div>
                </div>
                <div className='flex justify-center items-center gap-[1vh]'>
                    <p>Uploaded & Sent</p>
                    <div className='h-[.8vh] w-[1.5vw] bg-green-500 rounded-full '></div>
                </div>
                <div className='flex justify-center items-center gap-[1vh]'>
                    <p>Uploaded but not Sent</p>
                    <div className='h-[.8vh] w-[1.5vw] bg-yellow-500 rounded-full '></div>
                </div>
            </div>

        </div>



    </div>
  )
}

export default SeventhPage