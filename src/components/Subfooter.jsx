import React from 'react'
import bg from '../assets/images/bg-shorten-desktop.svg'

const Subfooter = () => {
  return (
    <div className='w-full absolute top-[1800px] left-0 '>
      <div className='w-full  absolute'>
        <img className='bg-[#3b3054]  w-[2000px] text-left -z-10 absolute h-[25vh]' src={bg} alt="" />
        <div className='text-white justify-center items-center mt-20 text-5xl font-bold'>Boost your links today <br/>
       
        </div>
        <br />
        <button className="font-bold text-white h-[4vh] text-xl text-center rounded-full pl-[20px] pr-[20px] mt-[4px]   bg-cyan"> Get started </button>
        
      </div>
     
    </div>
  )
}

export default Subfooter
