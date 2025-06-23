import React, { useState } from 'react'
import Contact from './Contact.jsx'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Settings from '@mui/icons-material/Settings';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion'

const Sidecard = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="xl:w-auto lg:w-[950px] md:w-[700px] xs:w-full xs:p-[30px] xs:py-[20px] p-[15px]">
      <div className='bg-[var(--eerie-black-2)] md:pt-10 relative rounded-xl border-[1px] border-[var(--jet)] border-solid flex flex-col pt-10 max-xs:pt-2 xl:items-center xl:px-[20px] z-1 px-5'>
        <button onClick={()=>{setShowContact(!showContact)}}className='xl:hidden flex absolute top-0 right-0 p-3 rounded-tr-xl rounded-bl-2xl h-10 w-fit items-center justify-center text-[var(--orange-yellow-crayola)] font-sans font-stretch-50% text-xs tracking-wide show-contact-button'>
          <span className='xs:block hidden'>Show Contact</span>
          <span className='xs:hidden block'><Settings className={`${showContact?' -rotate-90':'rotate-0'} transition-all duration-700 ease-in-out select-none`}/></span>
        </button>
        
        <div className=" flex xl:flex-col items-center gap-5 w-full">
          <div className="md:w-[120px] w-[80px]  aspect-[1/1]">
            <div className="">
              <img src="/sticker.png" className='w-full aspect-square rounded-4xl' style={{backgroundImage:'var(--bg-gradient-onyx)'}} /></div> 
            </div>
          <div className="flex flex-col items-start xl:items-center gap-1 sm:gap-4 xl:gap-3 text-[#f1f1f1] px-3 xl:mb-5">
            <div className="text-[#f1f1f1] text-sm font-extrabold xs:text-[26px]">Pavneet Singh</div>
            <div className="font-sans text-xs bg-[#2b2b2c] px-3 py-1 xs:px-[18px] xs:py-[5px] xs:text-[12px] rounded-sm text-white">Web Developer</div>
          </div>   
        </div>
        <div className={`flex-col xl:items-center xl:mt-0 mt-10 max-xs:mt-2 xl:flex flex xl:max-h-fit xl:opacity-100 xl:translate-y-0 ${showContact ? 'max-h-96 opacity-100 translate-y-0 overflow-hidden' : 'max-h-0 opacity-0 -translate-y-5 overflow-hidden'} transition-all duration-1000 ease-in-out`}>
          <hr className='mb-5 text-[#2b2b2c] w-full block'/>
          <Contact />
          <hr className='m-5 text-[#2b2b2c] w-full block'/>
          <div className="text-[#919191] flex gap-1 justify-center pb-5">
            <a href="https://www.instagram.com/pavneet_bomrah/" target='_blank' className='hover:scale-120'><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/PavneetBomrah/" target='_blank' className='hover:scale-120'><LinkedInIcon/></a>
          <a href="https://github.com/PavneetBomrah" target='_blank' className='hover:scale-120'><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidecard