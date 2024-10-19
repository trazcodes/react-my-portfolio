import React from 'react'
import AboutPic from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion';
const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>
                About Me
            </motion.h1>
            <div className='flex flex-wrap'>
                <motion.div
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5 }} className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img whileHover={{ scale: [null, 1, 1.05], transition: { duration: 0.3 } }}
                            className='rounded-2xl' src={AboutPic} alt="" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5 }} className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p whileHover={{ scale: [null, 1, 1.05], transition: { duration: 0.4 } }}
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>{ABOUT_TEXT}</motion.p>
                    </div>
                </motion.div>

            </div>

        </div>
    )
}

export default About