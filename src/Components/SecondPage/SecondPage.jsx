import React from 'react'
import Back from '../Back/Back'
import { GoArrowRight } from "react-icons/go";
import TeamList from '../TeamList/TeamList';

const SecondPage = () => {
  return (
    <div className='h-screen w-full relative ' >
      <Back/>
      <div className='flex justify-center items-center h-full w-full' >
        <div className='h-[80%] w-[50%] flex flex-col justify-around ' >
          <p className='text-6xl px-[5vw] text-white '>Hello Org.name Thanks for Choosing Oralens</p>
          <div className='flex flex-col gap-[2vh] px-[5vw]' >
          <p className='text-lg text-white ' >To move ahead please complete the team selection process in the left.</p>
          <button className='flex justify-center items-center w-fit  bg-white px-[2vh] rounded-full ' >Proceed <GoArrowRight/></button>
          </div>
          <div className='flex text-white px-[5vw]'>
            <p>To bulk import via CSV : </p>
            <button className='bg-white w-fit px-[1vh] mx-[1vh] rounded-xl text-black' >Click here</button>
          </div>
        </div>

        <div className='bg-white h-[80%] w-[1px] ' ></div>

        <div className='h-[80%] w-[50%] flex justify-center items-center ' >
          <div className='h-full w-[70%] bg-blue-900 rounded-xl py-[3vw] flex flex-col justify-around items-center ' >

            <form className='w-[80%] bg-blue-800 py-[2vw] rounded-xl flex flex-col gap-[2vh] justify-center items-center text-white ' action="">
              <label>
                <p>Unit No :</p>
                <input placeholder='  Enter unit no' className='bg-zinc-200 rounded-md mt-[.5vh]' type="text" />
              </label>

              <label>
                <p>Department :</p>
                <input type="text" placeholder='  Enter department' className='bg-zinc-200 rounded-md mt-[.5vh]' />
              </label>

              <button className='w-fit px-[2vh] bg-blue-600 rounded-lg ' >Add</button>
            </form>

            <div className='w-full flex flex-col gap-[2vh] items-center justify-center text-white' >
              <p>Select Team</p>
              <div className='w-[80%] h-[1px] bg-zinc-400'></div>

              <div className=' h-[20vh] w-[80%] flex flex-col overflow-auto gap-[2vh] '>
                <TeamList/>
                <TeamList/>
                <TeamList/>
                <TeamList/>
                <TeamList/>

              </div>

              <div className='w-[80%] h-[1px] bg-zinc-400'></div>


            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default SecondPage