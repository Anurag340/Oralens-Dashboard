import React, { useState } from 'react'
import Back from '../Back/Back'
import { BsFillCameraFill } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import './FifthPage.css'
import axios from 'axios';
const Fifth = () => {
  const [indv,setindv] = useState();
  const [indvdata,setindvdata] = useState({});

  const handleSubmit = (e)=>{
    axios.get('http://localhost:8080/Dashboard/show-individual-details',{params: {indv}})
    .then(response =>{
      setindvdata(response.data);
    })
    .catch(error => {
      console.log(error);
    });
    setindv('');
  }

  const handleimg = ()=>{
    
  }
  
  const navigate = useNavigate();
  return (
    <div className=' relative h-screen w-full flex flex-col justify-center items-center gap-[3vh] ' >
      <Back/>

      <form onSubmit={(e)=>{handleSubmit(e)}} className='flex flex-col justify-center w-fit items-center gap-[2vh]' >
        <p className='text-white' >Enter Individual ID:</p>
        <input type="text" value={indv} onChange={(e)=>{setindv(e.target.value)}} className='rounded-md bg-blue-600 text-white ' placeholder='  Enter Individual ID' />
        <button className='p-[.2vh] rounded-md bg-white w-full ' >Go</button>
      </form>

      <div className='w-full flex flex-col justify-center items-center gap-[1vw]' >
        <p className='text-white' >Details</p>
        <div className='w-[40%] h-[1px] bg-zinc-300 '></div>
      </div>

      <div className='flex flex-col bothdiv gap-[1vw] text-white justify-center items-center w-[40%] ' >

        <div className='bg-blue-800 innerdiv  rounded-md flex flex-col gap-[1vh] w-[55%] py-[4vh] pl-[1.5vw] ' >

        <div className='flex justify-between items-center w-[40%]' >
          <p>Name - </p>
          <p>{indvdata.name}</p>
        </div>

        <div className='flex justify-between items-center w-[40%]' >
          <p>Organisation - </p>
          <p>{indvdata.organisation}</p>
        </div>

        <div className='flex justify-between items-center w-[40%]' >
          <p>Department - </p>
          <p>{indvdata.department}</p>
        </div>

        </div>

        <div className='w-[35%] h-[1px] bg-zinc-300 my-[2vh]' ></div>

        <form onSubmit={handleimg} className='bg-blue-800 innerdiv rounded-md flex flex-col justify-center items-center gap-[3vh] w-[55%] py-[2vh] ' >
        <div className='flex flex-col justify-center items-center gap-[1vw] '>
          <p>Upload Image</p>
          <div className='flex justify-center items-center gap-[1vh]'>
            <BsFillCameraFill  className='icons' size={25} />
            <div className='h-[2.3vw] w-[1px] bg-zinc-300 '></div>
            <GrGallery  className='icons' size={25} />
            <input type="file" className=' imginput  w-[11vw] text-xs' />
          </div>
        </div>

        <button onClick={()=>{navigate('/img-upload')}} className='p-[.2vh] px-[1vh] uploadimgbutton rounded-full bg-white text-black '>Upload Img</button>

        </form>

        

      </div>

      <div className='w-[40%] h-[1px] bg-zinc-300 ' ></div>



    </div>
  )
}

export default Fifth