import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'

export default function About() {
    const router = useRouter()

    return (
       <AnimatePresence>
         <motion.div  key={router.route}
        initial={{ y: "-100%" }}
        animate={{ y: '0%' }}
        exit={{ x: "-100%" }}
        transition={{
            duration: 0.8
        }}>
            <Header />
            <div id="div1" className='myself mt-20 flex justify-around'>
                <div>
                    <img className='lg' src='https://ik.imagekit.io/juwoncaleb/lg2_L1ZwX5ioR.webp?updatedAt=1683136241357' />
                </div>
                <div className='my_text'>
                    <p className='me_head'>Who’s behind all <br /> this great work?</p>
                    <p className='me_text'>I am soneye omojuwon, a Frontend engineer </p>
                    <p className='me_text'>and web performance consultant from lagos Nigeria.</p>
                    <p className='me_text'>I believe that the internet should be accessible to everyone,</p>
                    <div className='mt-2 xl:mt-6 xl:mb-4 mb-2 flex '>
                        <div className='color_on'>
                        </div>
                        <p className='me_text_head ml-2'> 3 Years Experience</p>
                    </div>
                    <p > I have a track record of improving web performance in companies , includng a YC backed startup PAYLOAD</p>

                    <div className='xl:mt-6 mt-2 mb-4 flex'>
                        <div className='color_one'>
                        </div>
                        <p className='me_text_head ml-2'> Personal Projects</p>
                    </div>
                    <p > I made several projects, with serveral web as a freelancer <br /> and for fun to get better</p>

                </div>
            </div>
            <div>
                <p className='text-center code mt-14'>WHEN I AM NOT WRITING CODE  ,
                </p>
                <p className='text-center code mb-12'> I AM RUNNING MY LOGISTIC COMPANY -LEXA</p>
                <img className='staff' src='https://ik.imagekit.io/juwoncaleb/staff_BN5-kpKFm.webp?updatedAt=1683137292237' />
                <p className='codejnr text-center mt-10'> I ALSO LOVE RIDING <br /> MY BIKE AROUND LAGOS</p>
                <div className='md:flex grid mt-14 justify-around'>
                    <img src='https://ik.imagekit.io/juwoncaleb/ride_VZcmXT-uv.webp?updatedAt=1683137291667' />
                    <img className='fal mt-14 md:mt-0' src='https://ik.imagekit.io/juwoncaleb/falomo_KnGWxw_um.webp?updatedAt=1683137293845' />
                </div>
            </div>
            <Footer />
        </motion.div>
       </AnimatePresence>
    )
}
