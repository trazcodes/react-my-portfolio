import React, { useEffect, useState } from 'react';
import { HERO_CONTENT } from '../constants';
import ProfilePic from '../assets/kevinRushProfile.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState(""); // Text being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Whether it's deleting or typing
  const [index, setIndex] = useState(0); // Current character index
  const [loop, setLoop] = useState(0); // Tracks loop iterations
  const texts = ["Full Stack Developer", "UI/UX Designer", "Frontend Developer", "Backend Developer" ]; // Text to cycle between

  const currentText = texts[loop % texts.length]; // Determine current text based on loop

  useEffect(() => {
    const timeout = setTimeout(() => {
      let updatedText;
      
      if (isDeleting) {
        updatedText = currentText.substring(0, index - 1); // Deleting one letter
      } else {
        updatedText = currentText.substring(0, index + 1); // Typing one letter
      }

      setDisplayedText(updatedText);

      // Manage when to switch between typing and deleting
      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false); // Switch to typing next text
        setLoop(loop + 1); // Move to the next text
      }

      // Update index for typing/deleting
      setIndex(isDeleting ? index - 1 : index + 1);
    }, isDeleting ? 50 : 100); // Faster deletion, slower typing

    return () => clearTimeout(timeout);
  }, [index, isDeleting, currentText]);
const container = (delay) => ({
  hidden: {x: -100, opacity:0},
  visible: {x:0, opacity:1, transition: {duration:0.5, delay: delay}
}
})


  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)}
                        initial="hidden"
                        animate="visible" 
                        whileHover={{ scale: [null, 1, 1.05] }}
      transition={{ duration: 0.3 }}
                        className='pb-16 text-6xl font-thin tracking-tight
                         lg:mt-16 lg:text-8xl'>
                          Kushal Himmatsinghka
                        </motion.h1>
                        <motion.span whileHover={{ scale: [null, 1, 1.05] }}
      transition={{ duration: 0.3 }}
       variants={container(0.5)}
                        initial="hidden"
                        animate="visible" className='text-3xl'>I am <motion.span
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
    >
      {displayedText}
    </motion.span></motion.span>

                        <motion.p whileHover={{ scale: [null, 1, 1.05] }}
      transition={{ duration: 0.3 }} variants={container(1)}
                        initial="hidden"
                        animate="visible" className='my-2 max-w-xl motion.py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                        
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                  <div className='flex justify-center'>
                  <motion.img whileHover={{ scale: [null, 1, 1.05], transition:{ duration: 0.3 }  }}
      
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1.2 }}
    whileInView={{
      x: [1, 5, -5, -1], // Defines the motion pattern (back and forth)
      y: [1, 5, -5, -4], // Defines the motion pattern (back and forth)
      transition: {
        duration: 7,        // How long one cycle takes
        repeat: Infinity,   // Repeat forever
        repeatType: "mirror" // Goes back and forth
      }
    }}
    src={ProfilePic} 
    alt="Profile" 
/>

                  </div>
                </div>
            </div>
    </div>
  )
}

export default Hero