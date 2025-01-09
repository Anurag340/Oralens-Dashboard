import React from 'react'
import { GrGroup } from "react-icons/gr";

const TeamList = () => {
  return (
    <div className='w-full h-[5vh] min-h-[5vh] text-zinc-200 flex justify-between items-center' >
        <div className='h-full w-[90%] bg-blue-600 flex justify-around items-center rounded-md '>
            <GrGroup/>
            <p>Department - {}</p>
            <p>Unit - {}</p>
        </div>
        <input className='' type="checkbox" />
    </div>
  )
}

export default TeamList