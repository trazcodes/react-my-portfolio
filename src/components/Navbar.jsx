import React from 'react'
import logo from "../assets/kevinRushLogo.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitch } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
// import FaLinkedin from 'react-icons/fa';
// import FaGithub from 'react-icons/fa'
// import FaSquareXTwitter, { FaTwitch } from 'react-icons/fa6'
// import FaInstagram from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className=' mb-20 flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <motion.img initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 40,
    repeat:Infinity
    
  }} className='mx-2 w-10' src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
            </div>


        </nav>

    )
}

export default Navbar