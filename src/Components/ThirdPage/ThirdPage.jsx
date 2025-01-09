import React from 'react'
import Back from '../Back/Back'

const ThirdPage = () => {
  return (
    <div className='h-screen w-full relative flex justify-center items-center ' >
        <Back/>
        <div className='h-[80%] w-[50%] flex flex-col justify-center items-center ' >
            <div className='h-[1px] w-[60%] bg-zinc-300 '></div>
            <form className='w-[60%] flex flex-col gap-[3vh] pl-[7vw] py-[3vw] justify-center text-white ' action="">

                <label>
                    <span>Name : </span><input className='text-black ml-[1vw] rounded-md' placeholder=' Enter Name' type="text" />
                </label>

                <label>
                    <span>Gender : </span>
                    <select className='text-black rounded-md ml-[0.4vw] ' name="" id="">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </label>

                <label>
                    <span>Age : </span><input className='w-[3vw] text-black rounded-md ml-[2vw] ' type="number" />
                </label>

                <label>
                    <span>Bld Gr : </span>
                    <select className=' text-black rounded-md ml-[0.9vw] w-[3vw] ' name="" id="">
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </label>

                <button className='bg-white w-[5vw] rounded-full text-black '>Register</button>

            </form>

            <div className='h-[1px] w-[60%] bg-zinc-300 '></div>

        </div>

        <div className='h-[80%] w-[1px] bg-white '></div>

        <div className='h-[80%] w-[50%] flex flex-col justify-around items-center  text-white '>
            
            <div className='w-full flex flex-col gap-[2vh] justify-center items-center'>
                <p className='text-6xl'>Thanks for registering</p>
                <p className='text-6xl' >with us</p>
            </div>

            <div className='flex justify-center items-center gap-[2vh]'>
                <p>To proceed with individual details : </p>
                <a className='bg-white text-black px-[1vh] rounded-full' href="">Click here</a>
            </div>


        </div>


    </div>
  )
}

export default ThirdPage