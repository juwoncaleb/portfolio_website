import React from 'react'
import Footer from '../components/Footer'
import { motion } from "framer-motion"
import Header from '../components/Header'

export default function portfolio() {
    return (
        <div>
            <Header />

            <div className='landingpage_content'>

                <div className='portfolio_content'>
                    <p className='portfolio'>Take a look at my <br /> <span className='port_color'>Portfolio</span></p>
                    <div className='portfolo_conten flex justify-around'>
                        <div className='port_Des'>
                            <p className='port_head'>Lacoste E-commerce store</p>
                            <p className='port_det'>A FULL STACK ECOMMERCE STORE
                                MADE WITH <br /> NEXTJS IN THE FRONTENDS
                                MADE WITH NEXTJS IN THE BACKEND <br />
                                UTILIZES MONGODB AS A DATABASE SYSTEM </p>
                            <button className='hero_message mt-8 flex justify-center '>
                                Explore
                                <img className=' ml-4 mb-2 arrow' src='./home/arrow.png' />

                            </button>
                        </div>
                        <img className='lac' src='./home/lac.png' />
                    </div>
                    <div className='portfolo_conten flex justify-around'>
                        <div className='port_Des'>
                            <p className='port_head'>Blacklist</p>

                            <p className='port_det'>ALTERNATE DATABASE OF CHRONIC DEFAULTERS
                                FOR DEBT RECOVERY.   <br /> I WORKED AS A FRONTEND
                                ENGINEER IN THE ADMIN PANEL OF USERS. <br />
                                I USED REACTJS FOR THE CREATION OF REUSABLE
                                COMPONENTS. <br />I USED REDUX TOOLKIT AS
                                A STATE MANAGEMENT SYSTEM </p>
                            <button className='hero_message mt-8 flex justify-center '>
                                Explore
                                <img className=' ml-4 mb-2 arrow' src='./home/arrow.png' />

                            </button>
                        </div>
                        <img className='lac' src='./home/black.png' />
                    </div>

                </div>

            </div>
            <Footer />

        </div>
    )
}
