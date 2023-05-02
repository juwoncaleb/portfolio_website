import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import Link from 'next/link'

export default function portfolio() {
    const router = useRouter()
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div onMenuItemClick={handleScrollToSection}
        >
            <AnimatePresence >
                <motion.div
                    key={router.route}
                    initial={{ x: "100%" }}
                    animate={{ x: '0%' }}
                    exit={{ x: "0%" }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    <Header />

                    <div className='landingpage_content'>
                        <p className='portfolio'> <span className='port_color_'>Portfolio</span></p>

                        <div className='portfolio_content lac_Con'>
                            <div className='portfolo_conten flex justify-around'>
                                <div className='port_Des'>
                                    <p className='port_head'>Lacoste E-commerce store</p>
                                    <p className='port_det'>A FULL STACK ECOMMERCE STORE
                                        MADE WITH <br /> NEXTJS IN THE FRONTENDS
                                        MADE WITH NEXTJS IN THE BACKEND <br />
                                        UTILIZES MONGODB AS A DATABASE SYSTEM </p>
                                    <Link href='./lacoste'>
                                        <button className='explore_black mt-8 flex justify-center '>
                                            Explore
                                            <img className=' ml-4 mb-2 arrow' src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-up.png" />
                                        </button>
                                    </Link>
                                </div>
                                <div className='small_port '>
                                    <div className='flex'>
                                        <p className='port_head porr'>LACOSTE</p>
                                        <img className='nyx porr' src='./home/laco.png' />
                                    </div>
                                    <img className='lac' src='./home/lac.png' />

                                    <Link href='./lacoste'>
                                        <button className='explore_black porr mt-8 flex justify-center '>
                                            Explore
                                            <img className=' ml-4 mb-2 arrow' src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-up.png" />

                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='portfolio_content'>
                            <div className='portfolo_conten nys flex justify-around'>
                                <div className='port_Des'>
                                    <p className='port_head'>NYX</p>
                                    <p className='port_det'>A FULL STACK ECOMMERCE STORE
                                        MADE WITH <br /> NEXTJS IN THE FRONTENDS
                                        MADE WITH NEXTJS IN THE BACKEND <br />
                                        UTILIZES MONGODB AS A DATABASE SYSTEM </p>
                                    <Link href='./nysx'>
                                        <button className='explore_black mt-8 flex justify-center '>
                                            Explore
                                            <img className=' ml-4 mb-2 arrow' src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-up.png" />
                                        </button>
                                    </Link>
                                </div>
                                <div className='small_port '>
                                    <div className='flex'>
                                        <p className='port_head porr'>NYX</p>
                                        <img className='nyx porr' src='https://ik.imagekit.io/juwoncaleb/24299_451616_JRSH0nPB2.jpg?updatedAt=1682348309296' />
                                    </div>
                                    <img className='lac' src='./nyx.png' />

                                    <Link href='./nysx'>
                                        <button className='explore_black porr mt-8 flex justify-center '>
                                            Explore
                                            <img className=' ml-4 mb-2 arrow' src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-up.png" />

                                        </button>
                                    </Link>
                                </div>
                            </div>


                        </div>

                        <div className='portfolio_content white nyxx'>
                            <div className='portfolo_conten flex justify-around'>
                                <div className='port_Des'>
                                    <p className='port_head'>PERIEVIEW</p>
                                    <p className='port_det'>A FULL STACK ECOMMERCE STORE
                                        MADE WITH <br /> NEXTJS IN THE FRONTENDS
                                        MADE WITH NEXTJS IN THE BACKEND <br />
                                        UTILIZES MONGODB AS A DATABASE SYSTEM </p>
                                    <Link href='./pere'>
                                        <button className='explore_black mt-8 flex justify-center '>
                                            Explore
                                            <img className=' ml-4 mb-2 arrow' src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-up.png" />
                                        </button>
                                    </Link>
                                </div>
                                <div className='small_port '>
                                    <div className='flex'>
                                        <p className='port_head porr'>PERIEVIEW</p>
                                        <img className='perlg porr' src='./perelogo.png' />
                                    </div>
                                    <img className='lac' src='./pere.png' />

                                    <Link href='./pere'>
                                        <button className='explore_black porr mt-8 flex justify-center '>
                                            Explore
                                            <img className=' ml-4 mb-2 arrow' src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-up.png" />

                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Footer />

                </motion.div>
            </AnimatePresence>
        </div>
    )
}
