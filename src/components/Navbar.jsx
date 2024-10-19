import React, { useContext } from 'react'
import logo from "../assets/kevinRushLogo.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitch } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';


const Navbar = () => {

  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 5
          }}

          className='bg-black mx-2 w-10' src={logo} alt="logo" />
      </div>
      <motion.div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.span whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}><FaLinkedin /></motion.span>
        <motion.span whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}><FaGithub /></motion.span>
        <motion.span whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}><FaSquareXTwitter /></motion.span>
        <motion.span whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}><FaInstagram /></motion.span>

      </motion.div>


    </nav>

  )
}

export default Navbar