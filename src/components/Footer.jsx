import React from 'react'
import logo from "../assets/images/logo2.svg";
import l1 from "../assets/images/icon-instagram.svg";
import l2 from "../assets/images/icon-facebook.svg";
import l3 from "../assets/images/icon-twitter.svg";
import l4 from "../assets/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className='bg-[#232127] top-[2020px] absolute left-0 h-[30vh] w-full'>
        <div className='flex gap-[450px] m-20'>
        <div>
        <img className='' src={logo} alt=""  />
      </div>
      <div className=' flex gap-40 w-[800px]'>
            <div >
                <div className='text-white font-bold mb-4' >Features</div>
                <div className='text-gray-500 font-semibold m-[4px]'>Link Shortning</div>
                <div className='text-gray-500 font-semibold m-[4px]'>Branded Links</div>
                <div className='text-gray-500 font-semibold m-[4px]'>Analytics</div>
            </div>
            <div >
                <div className='text-white font-bold mb-4' >Resources</div>
                <div className='text-gray-500 font-semibold m-[4px]'>Blog</div>
                <div className='text-gray-500 font-semibold m-[4px]'>Devloper</div>
                <div className='text-gray-500 font-semibold m-[4px]'>Support</div>
            </div>
            <div >
                <div className='text-white font-bold mb-4' >Company</div>
                <div className='text-gray-500 font-semibold m-[4px]'>About</div>
                <div className='text-gray-500 font-semibold m-[4px]'>Our Team</div>
                <div className='text-gray-500 font-semibold m-[4px]'>Contact</div>
            </div>
            
      </div>
      <div className='icons flex justify-between h-8 gap-8'>
        <img src={l1} alt="" /><img src={l2} alt="" /><img src={l3} alt="" /><img src={l4} alt="" />

      </div>
        </div>
      
    </div>
    
  )
}

export default Footer
