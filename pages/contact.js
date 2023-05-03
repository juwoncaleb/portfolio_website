import React, { useState } from 'react'
import Footer from '../components/Footer'
import { AnimatePresence, motion, stagger, useScroll, useTransform } from "framer-motion"
import Header from '../components/Header'
import { useRouter } from 'next/router'

export default function Contact() {
  const router = useRouter()

  return (
    <AnimatePresence>
      <motion.div key={router.route}
                initial={{ y: "100%" }}
                animate={{ y: '0%' }}
                exit={{ y: "-100%" }}
                transition={{
                    duration: 0.8
                }} >
        <Header />
        <div className='contact '>
          <div className='flex justify-around contact_content'>
            <div>
              <p className='contact_text'><span className='span_text'>Contact </span>Me</p>
              <div className='contact_details'>
                <div className='flex  justify-between'>
                  <svg width="30" height="29" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.49927 3.6893C3.49927 2.39766 4.54635 1.35059 5.83798 1.35059H22.2001C23.4917 1.35059 24.5388 2.39766 24.5388 3.6893V16.731C24.5388 16.971 24.4464 17.2011 24.282 17.3708C24.1176 17.5405 23.8946 17.6358 23.6621 17.6358H4.37591C4.14341 17.6358 3.92043 17.5405 3.75603 17.3708C3.59163 17.2011 3.49927 16.971 3.49927 16.731V3.6893Z" fill="#FFC224" />
                    <path d="M22.6225 1L11.7657 10.9521L0.908936 1" stroke="#0B0B0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M0.908936 1H22.6225V16.3805C22.6225 16.6204 22.5272 16.8505 22.3575 17.0202C22.1879 17.1899 21.9577 17.2852 21.7178 17.2852H1.81367C1.57372 17.2852 1.3436 17.1899 1.17393 17.0202C1.00426 16.8505 0.908936 16.6204 0.908936 16.3805V1Z" stroke="#0B0B0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.78661 9.14258L1.19165 17.0251" stroke="#0B0B0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.3396 17.0251L13.7446 9.14258" stroke="#0B0B0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <a className='' href=''>Calebomojuwon@gmail.com</a>
                </div>

                <div className='flex justify-around mt-10'>
                  <svg width="24" height="29" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.68798 10.648C9.63033 12.5941 11.2039 14.1636 13.1524 15.101C13.2961 15.169 13.4551 15.1985 13.6136 15.1864C13.7722 15.1744 13.9249 15.1213 14.0567 15.0323L16.9185 13.1206C17.0449 13.0349 17.191 12.9825 17.3432 12.9685C17.4953 12.9545 17.6485 12.9793 17.7885 13.0405L23.1457 15.3414C23.3288 15.4176 23.4818 15.5518 23.5811 15.7235C23.6804 15.8952 23.7205 16.0948 23.6952 16.2915C23.5254 17.6168 22.8785 18.8348 21.8756 19.7176C20.8727 20.6004 19.5825 21.0875 18.2464 21.0878C14.1174 21.0878 10.1576 19.4476 7.23802 16.528C4.31843 13.6084 2.67822 9.64862 2.67822 5.51969C2.67852 4.18358 3.16566 2.89335 4.04848 1.89044C4.93129 0.887523 6.1493 0.240645 7.47458 0.0708475C7.67129 0.04558 7.87085 0.0856759 8.04253 0.184961C8.21421 0.284246 8.34849 0.437215 8.4247 0.620311L10.7256 5.98903C10.7854 6.12679 10.8104 6.27716 10.7985 6.42688C10.7865 6.57659 10.7379 6.72107 10.6569 6.84757L8.74522 9.75514C8.66011 9.88665 8.61016 10.0378 8.60013 10.1941C8.59011 10.3504 8.62036 10.5067 8.68798 10.648Z" fill="#FF4A60" />
                    <path d="M7.30224 11.5885C8.24459 13.5345 9.81818 15.104 11.7666 16.0414C11.9104 16.1094 12.0693 16.1389 12.2279 16.1269C12.3865 16.1148 12.5392 16.0617 12.671 15.9727L15.5327 14.061C15.6592 13.9753 15.8053 13.923 15.9574 13.9089C16.1096 13.8949 16.2628 13.9197 16.4027 13.9809L21.76 16.2818C21.9431 16.358 22.0961 16.4923 22.1953 16.664C22.2946 16.8356 22.3347 17.0352 22.3095 17.2319C22.1397 18.5572 21.4928 19.7752 20.4899 20.658C19.487 21.5408 18.1967 22.028 16.8606 22.0283C12.7317 22.0283 8.77187 20.388 5.85228 17.4685C2.93269 14.5489 1.29248 10.5891 1.29248 6.46012C1.29278 5.12401 1.77992 3.83378 2.66273 2.83087C3.54555 1.82795 4.76356 1.18108 6.08884 1.01128C6.28555 0.98601 6.4851 1.02611 6.65678 1.12539C6.82847 1.22468 6.96275 1.37764 7.03895 1.56074L9.33983 6.92946C9.39967 7.06722 9.4247 7.21759 9.41272 7.36731C9.40074 7.51702 9.35212 7.6615 9.27115 7.78799L7.35947 10.6956C7.27437 10.8271 7.22441 10.9782 7.21439 11.1345C7.20437 11.2909 7.23462 11.4472 7.30224 11.5885V11.5885Z" stroke="#0B0B0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p className=' '>  +234 816 235 3857</p>
                </div>
              </div>

            </div>
            <div className='form mt-10 '>
              <div className='grid gap-4 grid-cols-2'>
                <p>Name</p>
                <p>Email</p>
                <input className='input' />
                <input className='input' />
                <p>Phone</p>
                <p>Subject</p>
                <input className='input' />
                <input className='input' />
              </div>
              <p className='mt-10'>Message</p>
              <input className='description' />
              <button className='send'>
                Send
              </button>


            </div>
          </div>
        </div>
        <Footer />

      </motion.div>
    </AnimatePresence>
  )
}
