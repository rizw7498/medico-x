import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import Logo from "../../assets/logo.png"
import {motion } from "framer-motion"
const Footer = () => {
  return (
    <motion.footer initial={{opacity:0}} whileInView={{opacity:1}}>
        <div className="container py-20 flex flex-col md:flex-row md:items-center gap-5 justify-between">
            <div className='space-y-4'>
                <img src={Logo} alt="" className='w-40' />
                <p className='text-gray-400 md:max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, illum?</p>
            </div>
            <div>
                <div className='flex space-x-6 text-3xl'>
                    <FaFacebook className=' hover:text-primary cursor-pointer' />
                    <FaInstagram className=' hover:text-primary cursor-pointer'/>
                    <FaLinkedin className=' hover:text-primary cursor-pointer'/>
                </div>

            </div>
        </div>
    </motion.footer>
  )
}

export default Footer
