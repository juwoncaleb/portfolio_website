import React from 'react'
import Footer from '../components/Footer'
import { AnimatePresence, motion } from "framer-motion"
import Header from '../components/Header'
import { useRouter } from 'next/router'

export default function lacoste() {
    const router = useRouter()

    return (
        <AnimatePresence>
            <motion.div key={router.route}
                initial={{ x: "100%" }}
                animate={{ x: '0%' }}
                exit={{ x: "-100%" }}
                transition={{
                    duration: 0.5
                }} className='projects'>
                <Header />
                <div className='proj'>
                    <div className='flex justify-center lacoste_head'>
                        <p className='mt-8 mb-14'>LACOSTE ECOMMERCE PROJECT</p>
                        <img className='md:ml-10 ml-2 lacoste_logo' src='./home/laco.png' />
                    </div>
                    <img className='lac_shot' src='./home/lac.png' />
                    <div>
                        <p className='overview mt-14 '>Project overview</p>
                        <div className='md:flex justify-between'>
                            <p className='mb-1 md:mb-10 tools text-1xl  italic'>Tools & Technology : Nextjs , Node.js , Redux Toolkit , Tailwind CSS, Cloudinary, Mongodb </p>
                            <div className='flex justify-around links cursor-pointer' >
                                <p className='mr-1 md:mr-14'>LIVE LINK</p>
                                <p>GITHUB LINK</p>
                            </div>
                        </div>
                        <div className='grid gap-10 grid-cols-1 md:grid-cols-2  justify-around text-left project_overview'>
                            <div className=''>

                                <p className='text-left proj_head '>Introduction</p>
                                <p>As a Frontend Engineer, I had the opportunity to work on an exciting project where I created a full-stack ecommerce website. The website was built using Next.js for the front-end, Node.js for the back-end, and MongoDB for the database. I also utilized Redux Toolkit for state management, Cloudinary for image management, and Tailwind CSS for styling. In this write-up, I will share my experience working on this project, the challenges I faced, and what I learned from it.</p>
                            </div>
                            <div>
                                <p className='text-left proj_head '>Design Process:</p>
                                <p> To achieve a professional and user-friendly design, I used Tailwind CSS to style the website.
                                     Tailwind CSS is a utility-first CSS framework that helped me to style the website quickly and efficiently.
                                      I started by creating a wireframe to get an idea of the layout and the overall structure of the website. 
                                      Once I had the wireframe ready, I moved on to the visual design, where I added colors, images, and other elements to the website.
                                    </p>
                            </div>
                        </div>

                        <div className='grid gap-10 grid-cols-1 md:grid-cols-2  justify-around text-left project_overview'>
                            <div className=''>

                                <p className='text-left proj_head '>Developement Process</p>
                                <p>After completing the design, I started working on the development process using Next.js
                                     for the front-end and Node.js 
                                    for the back-end. Next.js is a powerful framework for creating server-rendered React applications,
                                     and it helped me to optimize the website for better performance.
                                     Node.js, on the other hand, helped me to build a robust and scalable back-end that could handle
                                      user authentication, database management, and payment processing..</p>
                            </div>
                            <div>
                                <p className='text-left proj_head '>What i learn:</p>
                                <p>Working on this project taught me many things. Firstly, it improved my skills in full-stack development,
                                     particularly in using Next.js, Node.js, and MongoDB. Secondly, it taught me how to build a secure and 
                                     scalable ecommerce website that could handle user authentication,
                                     database management, and payment processing. Thirdly, it helped me to understand the importance of 
                                     designing a website that is user-friendly and visually appealing..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </motion.div>
        </AnimatePresence>
    )
}
