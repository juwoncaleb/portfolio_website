import React from 'react'
import Footer from '../components/Footer'
import { motion } from "framer-motion"
import Header from '../components/Header'
export default function lacoste() {
    return (
        <div className='projects'>
            <Header />
            <div className='proj'>
                <div className='flex justify-center lacoste_head'>
                    <p className='mt-6'>LACOSTE ECOMMERCE PROJECT</p>
                    <img className='md:ml-10 ml-2 lacoste_logo' src='./home/laco.png' />
                </div>
                <img className='lac_shot' src='./home/lac.png' />
                <div>
                    <p className='overview '>Project overview</p>
                    <div className='md:flex justify-between'>
                        <p className='mb-1 md:mb-10 tools text-1xl  italic'>Tools & Technology : Nextjs , Node.js , Redux Toolkit , Tailwind CSS, Cloudinary, Mongodb </p>
                        <div className='flex justify-around links cursor-pointer' >
                            <p className='mr-1 md:mr-14'>LIVE LINK</p>
                            <p>GITHUB LINK</p>
                        </div>
                    </div>
                    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 m justify-around text-left project_overview'>
                        <div>
                            <p>An ecommerce store made with Nextjs in the frontend , this frontend framework was for many reason such as the its SEO property and the faster rendering speed in comparison to plain React.js</p>
                            <p>For State mangement Redux toolkit was used to manage the state across all components and pages in the project. More especially in the cart feature of the project , as users added, removed ..</p>
                        </div>
                        <div>
                            <p>For the backend services , API request sent from Nodejs to Mongo Database . All products are stored in Mongo Database, basic crud Operatios are carried out by the user and admin</p>
                            <p>For speed all images are stored in an external image CDN platform called Cloudinary . This improve speed of the project by reducing the payload request sent to the Mongo database </p>
                        </div>
                    </div>
                    {/* <p className='overview'>Problem encountered</p>
                    <p>A FULL STACK ECOMMERCE STORE MADE WITH NEXTJS IN THE FRONTENDS MADE WITH NEXTJS IN THE BACKEND UTILIZES MONGODB AS A DATABASE SYSTEM. I ALWAYS WANTED TO CREATE AN ECOMMERCE STORE FOR MY FRIEND. ALTHOUGH BEING A FRONTEND DEVELOPER , I NEEDED TO ENSURE IT HAD ALL FEATURES AS A STANDARD ECOMMERCE WEBSITE. NEXTJS HAS A FEATURE THAT MAKES CREATING API VERY EASY AND INTITUIVE .

                        MONGODB WAS USED AS A DATABASE SYSTEM , TO STORE THE ITEMS THAT WAS DISPLAYED IN EACH CATEGORIES. FOR STATE MANAGEMENT, I LEARNT HOW TO USE REDUX TOOLKIT WHICH WAS NEW TO ME AND A BIT DIFFICULT TO GET A HANG ON AT FIRST . I AM STILL MAKING FURTHER LEARNING OM IT. AUTHENTICATION AND AUTHORIZATION WAS HANDLED WITH NEXT AUTH, AND GOOGLE AUTH WAS USED FOR THIS . IMAGE WAS STORED IN CLOUDINARY , THIS REDUCED THE LOAD ON THE SERVER</p> */}

                </div>
            </div>
            <Footer />

        </div>
    )
}
