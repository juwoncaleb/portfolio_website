import React from 'react'
import Footer from '../components/Footer'
import { AnimatePresence, motion } from "framer-motion"
import Header from '../components/Header'
import { useRouter } from 'next/router'

export default function Lacoste() {
    const router = useRouter()

    return (
       <div>
         <AnimatePresence>
            <motion.div key={router.route}
                initial={{ x: "100%" }}
                animate={{ x: '0%' }}
                exit={{ x: "-100%" }}
                className='proj_per'>
                <Header />
                <div className='proj'>
                    <div className='flex justify-center lacoste_head'>
                        <p className='mt-8 mb-14'>PERIEVIEW</p>
                        <img className='md:ml-10 ml-2 mt-2 mb-14 perl' src='./perelogo.png' />
                    </div>
                    <img className='lac_shot' src='./pere.png' />
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
                            <motion.div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.6
                                }} className=''>

                                <p className='text-left proj_head '>Introduction</p>
                                <p>As a web developer, I had the opportunity to work on an exciting project where I created a landing page for a
                                    startup using Next.js and Framer Motion. The landing page was designed to be engaging, responsive, and visually
                                    appealing, with
                                    a focus on showcasing the startups unique value proposition. In this write-up, I will share my experience working
                                    on this project, the challenges I faced, and what I learned from it..</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.6, delay: 0.1
                                }}>
                                <p className='text-left proj_head '>Design Process</p>
                                <p> To achieve a professional and visually appealing design, I used Framer Motion to add animations and transitions to the landing page.
                                    Framer Motion is a powerful animation library that helped me to add visual interest and enhance the user experience. I started by
                                    creating a wireframe to get an idea
                                    of the layout and the overall structure of the landing page. Once I had the wireframe ready, I moved on to the visual design,
                                    where I added colors, images, and other elements to the landing page.
                                </p>
                            </motion.div>
                        </div>

                        <div className='grid gap-10 grid-cols-1 md:grid-cols-2  justify-around text-left project_overview'>
                            <motion.div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.6, delay: 0.2
                                }} className=''>

                                <p className='text-left proj_head '>Developement Process</p>
                                <p>After completing the design, I started working on the development process using Next.js for the front-end. Next.js is
                                    a powerful framework for creating server-rendered React applications, and it helped me to
                                    optimize the landing page for better performance. I also used Framer Motion to add animations and transitions
                                    to the landing page, which made the page more engaging and visually appealing.</p>
                            </motion.div>
                            <motion.div  initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.6, delay: 0.3
                                }}>
                                <p className='text-left proj_head '>What i learn</p>
                                <p>Working on this project taught me many things. Firstly, it improved my skills in using Next.js and Framer Motion,
                                    particularly in adding animations and transitions to a landing page. Secondly, it taught me how to design a landing page
                                    that effectively communicates a startup value proposition
                                    and resonates with the target audience. Thirdly, it helped me to understand the importance of creating a visually
                                    appealing and engaging landing page that can convert visitors into customers..</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <Footer />

            </motion.div>
        </AnimatePresence>
       </div>
    )
}
