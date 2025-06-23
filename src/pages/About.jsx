import React from 'react'
import { CodeXml , Briefcase } from 'lucide-react'

const About = () => {
  return (
    <div className='w-full h-full p-5 text-[var(--light-gray-70)] poppins-extralight text-md'>
      <div className="">
        <div className="orbitron text-[28px] font-semibold text-[var(--white-1)]">About Me</div>
        <div className="w-[40px] bg-[var(--orange-yellow-crayola)] h-[5px] rounded-[10px] my-5"></div>
        <div>
          <div className="pb-2">
            Web Developer • Gamer • Freelancer
          </div>
          <div className="">
            <div className='py-1'>
              I'm a BCA student at the Institute of <a href="https://www.iitmjanakpuri.com/" className='text-[var(--orange-yellow-crayola)] hover:underline underline-offset-3'>Information Technology and Management</a> in Delhi, India, with a strong interest in front-end development. I began my web development journey in 2022, starting with just HTML and CSS. Over time, I discovered the power of the React framework and now use it regularly in my projects.
            </div>
            <div className='py-1'>
              As a MERN stack developer, I focus on building clean, responsive, and modern websites using tools like Tailwind CSS, Framer Motion, lucide-react, and Material UI. I take on a wide range of freelance projects—delivering fast, functional, and visually appealing digital experiences.
            </div>
            <div className='py-1'>
              When I'm not coding, I'm either gaming (GTA, Valorant, Minecraft) or playing cricket—both keep me sharp and creatively inspired.
            </div>
          </div>
        </div>
        <div className="pb-2 pt-10">
          <div className="orbitron text-[28px] font-semibold text-[var(--white-1)]">What i'm doing</div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pt-5">
            <div className="bg-[var(--onyx)] w-full max-lg:px-10 lg:px-10 py-7 rounded-2xl flex items-start gap-4">
              <CodeXml size={"40px"} className=' overflow-hidden scale-165' color='var(--orange-yellow-crayola)'/>
              <div className="" >
                <h1 className='text-[var(--white-1)] font-medium text-[16px]'>Web Development</h1>
                <p>High-quality development of sites at the professional level.</p>
              </div>
            </div>
            <div className="bg-[var(--onyx)] w-full max-lg:px-10 lg:px-10 py-7 rounded-2xl flex items-start gap-4">
              <Briefcase className='' size={"40px"} color='var(--orange-yellow-crayola)'/>
              <div className="">
                <h1 className='text-[var(--white-1)] font-medium text-[16px]'>Freelancing</h1>  
                <p>"You know what to, I know how to."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About