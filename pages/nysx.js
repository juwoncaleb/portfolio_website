import React from 'react'
import Footer from '../components/Footer'
import { AnimatePresence, motion } from "framer-motion"
import Header from '../components/Header'
import { useRouter } from 'next/router'

export default function Nyx() {
    const router = useRouter()

    return (
        <AnimatePresence>
            <motion.div key={router.route}
                 initial={{ x: "-100vw" }}
                 animate={{ x: '0%' }}
                 exit={{ x: "-100vw" }}
                 transition={{
                     duration:0.5
                 }} className='projects_nxy'>
                <Header />
                <div className='proj'>
                    <div className='flex justify-center lacoste_head'>
                        <p className='mt-8 mb-14'>NYX</p>
                        <img className='nyx_log md:ml-10 ml-2 mt-8 mb-14 ' src='https://ik.imagekit.io/juwoncaleb/24299_451616_JRSH0nPB2.jpg?updatedAt=1682348309296' />

                    </div>

                    <img className='lac_shot' src='https://ik.imagekit.io/juwoncaleb/nyx_9IMaCKkT6.webp?updatedAt=1683136582666' />
                    <div>
                        <p className='overview mt-20 md:mt-20 '>Project overview</p>
                        <div className='md:flex justify-between'>
                            <p className='mb-1 md:mb-10 tools text-1xl  italic'>Tools & Technology : Nextjs ,  Tailwind CSS,  </p>
                            <div className='flex justify-around links cursor-pointer' >
                                <p className='mr-1 md:mr-14'>LIVE LINK</p>
                                <p>GITHUB LINK</p>
                            </div>
                        </div>

                        <div className='grid gap-10 grid-cols-1 md:grid-cols-2  mt-14 justify-around text-left project_overview'>
                            <motion.div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.6
                                }} className=''>

                                <p className='text-left proj_head '>Introduction</p>
                                <p>As a Frontend engineer, I had the opportunity to work on an exciting project where I created a cryptocurrency website for a company. The website was built using Next.js and Tailwind CSS,
                                    and I utilized Figma for design and Framer Motion for animations. In this write-up, I will share my experience working on this project, the challenges I faced, and what I learned from it.</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.6, delay: 0.1
                                }} >
                                <p className='text-left proj_head '>Design Process:</p>
                                <p>To achieve the clients desired look and feel, I used Figma to create the websites design. Figma allowed me to create designs that were responsive and visually appealing. I started by creating wireframes to get an idea of the layout and the overall structure of the website. Once I had the wireframes ready, I moved on to the visual design, where I added colors, images, and other elements to the website.</p>
                            </motion.div>
                        </div>

                        <div className='grid gap-10 grid-cols-1 md:grid-cols-2  justify-around text-left project_overview'>
                            <div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.6, delay: 0.2
                                }}  className=''>

                                <p className='text-left proj_head'>Developement Process</p>
                                <p>After completing the design I started working on the development process using Next.js and Tailwind CSS.
                                    Next.js is a powerful framework for creating server-rendered React applications, and it helped
                                    me to optimize the website for better performance. Tailwind CSS is a utility-first CSS framework
                                    that helped me to style the website quickly and efficiently.</p>
                            </div>
                            <motion.div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0}}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.6, delay: 0.3
                                }} >
                                <p className='text-left proj_head '>Conclusion</p>
                                <p>In conclusion, it was a pleasure working with the crypto company to create their website. Through collaboration and attention to detail, we were able to create a website that effectively represents the companys brand and services. By utilizing modern web development techniques and ensuring optimized performance, we were able to create a fast and user-friendly experience for their customers. Overall, I believe the website will greatly benefit the company and I am proud to have played a role in its creation.</p>
                            </motion.div>
                        </div>

                    </div>
                </div>
                <Footer />

            </motion.div>
        </AnimatePresence>
    )
}
