import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Sidecard from './components/Sidecard.jsx'
import About from './pages/About.jsx'
import Contact from './pages/ContactPG.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'
import { Routes , Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="poppins-regular flex customAlignMain xl:top-20 xl:justify-center py-9 xl:flex-row flex-col w-screen min-h-screen px-6 z-0">
      <div className="max-xs:w-screen max-xs:p-2 z-40">

      <Sidecard />
      </div>
      
      <motion.div className=" z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
              >
        <div className="flex justify-center items-center xl:pt-[20px] overflow-hidden ">
          <div className="lg:w-[880px] md:w-[640px] xs:w-[460px] xs:p-[30px] p-[15px] lg:relative bg-[var(--eerie-black-2))] border-[var(--onyx)] border-[0.15rem] rounded-2xl min-h-[500px]"
              >
                <div className="lg:absolute lg:top-0 lg:right-0 max-lg:left-0 w-full lg:w-auto fixed max-lg:bottom-0 z-50">
                  <Navbar/>
                </div>
                <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }} className="">
                  <Routes>
                  <Route path='/' element={<About />}/>
                  <Route path='/portfolio' element={<Portfolio />}/>
                  <Route path='/resume' element={<Resume />}/>
                  <Route path='/contact' element={<Contact />}/>
                </Routes>
                </motion.div>
              </div>
        </div>
      </motion.div>
    </div>
  )
}

export default App