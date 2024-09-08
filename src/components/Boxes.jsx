import React from 'react'
import icon1 from '../assets/images/icon-brand-recognition.svg'
import icon2 from '../assets/images/icon-detailed-records.svg'
import icon3 from '../assets/images/icon-fully.svg'

const Boxes = () => {
  return (
    <div className='flex '>
      <div className='h-[250px] w-[350px] top-[1350px] pl-8 left-[350px] absolute bg-white' >
      <img className='absolute bg-[#232127] left-[40px] rounded-full  h-20 p-[15px] -top-10' src={icon1} alt="" />
        <div className='font-bold text-3xl flex mt-16'>Brand Recognition</div>
        <div className='text-gray-500 font-semibold flex mt-4 text-left w-[280px]'>
            Boost your brand recognition with each click. Generic links dont means a thing. Branded links help instil confidence in your content.
        </div>
        <div className='font-extrabold absolute left-[350px] top-[30px] text-9xl text-cyan'>_</div>
        <div className='font-extrabold absolute left-[750px] top-[30px] text-9xl text-cyan'>_</div>
       
      </div>

      <div className='h-[250px] w-[350px] top-[1400px] left-[750px] pl-8 absolute bg-white' >
      <img className='absolute bg-[#232127] left-[40px] rounded-full  h-20 p-[15px] -top-10' src={icon2} alt="" />
        <div className='font-bold text-3xl flex mt-16'>Detailed Records</div>
        <div className='text-gray-500 font-semibold flex mt-4 w-[280px] text-left'>
            Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.
        </div>
       
      </div>
      <div className='h-[250px] w-[350px] top-[1450px] pl-8 left-[1150px] absolute bg-white' >
      <img className='absolute bg-[#232127] left-[40px] rounded-full  h-20 p-[15px] -top-10' src={icon3} alt="" />
        <div className='font-bold text-3xl flex mt-16'>Brand Recognition</div>
        <div className='text-gray-500 font-semibold flex mt-4 text-left w-[280px]'>
            Boost your brand recognition with each click. Generic links dont means a thing. Branded links help instil confidence in your content.
        </div>
       
      </div>
      
    </div>
  )
}

export default Boxes
