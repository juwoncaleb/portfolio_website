import React, { useState } from 'react'
import Footer from '../components/Footer'
import { motion, stagger, useScroll, useTransform } from "framer-motion"
import Header from '../components/Header'


export default function Landingpage() {
  const [active, setActive] = useState(null)
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className='language'>
      <Header />
      <div className='landingpage_content '>
        {/* HERO */}
        <motion.div
          style={{ y }}
          className='flex justify-between landsec'>
          <div>
            <div className='hero_head'>
              <p>I'm Juwoncaleb</p>
              <p>a Frontend engineer</p>
              <p>& Web performance consultant</p>
            </div>
            <div className='hero_texts'>
              <p >Leveraging my frontend engineering skills to push your website's performance to the limit and give you a competitive edge in the digital landscape.</p>

            </div>
            <div className='flex mt-10 buttons'>
              <button className='hero_portfolo flex justify-center'>
                <img className='hero_icon ' src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-suitcase-office-stationery-justicon-lineal-color-justicon.png" />
                View portfolio
              </button>
              <button className='hero_message flex justify-center ml-10'>
                <img className='hero_icon' src='./home/mail.png' />
                Get in touch
              </button>
            </div>
          </div>
          <img className='hero_img' src='./home/land.png' />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring', stiffness: 100, damping: 10, duration
              : 0.6, delay: 0.2
          }} className='service'>
          <p className='services_Section_head'>My broad set of services</p>
          <p className='services_Section_sub mb-14'>From website optimization and performance tuning to user interface design and front-end development, <br /> my broad set of services ensures your online presence is primed for success</p>

        </motion.div>


        <div className=' grid md:grid-cols-2 gap-10 service_grid'>
          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.6
            }} className='skill_set'>
            <div className='skill_container'>
              <img className='skills' src='./home/dev.png' />
            </div>
            <p className='skills_head'>Frontend Engineering</p>
            <p className='skill_text'> I use tools such as ReactJS, NextJS, Redux Toolkit, TailwindCSS, Chakra UI, Material UI, SCSS, and Framer Motion , to create business solution for organisation</p>

          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.6, delay: 0.1
            }} className='skill_set'>
            <div className='skill_container'>
              <img className='skills' src='./home/perf.png' />
            </div>
            <p className='skills_head'> Web Performance</p>
            <p className='skill_text'>   I optimize website speed using techniques, ensuring organisation meet up with google webcore vital requirments .With my proven track record in web performance , i reduce bounce rate and increase conversion rates</p>

          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.6, delay: 0.2
            }} className='skill_set'>
            <div className='skill_container'>
              <img className='skills' src='./home/write.png' />
            </div>
            <p className='skills_head'>Technical writing</p>
            <p className='skill_text'>I create clear technical documentation, user manuals, and instructional materials to improve user experience and drive user adoption. With my deep understanding of complex technical concepts, I am able to break them down into simple, easy-to-understand language that is accessible to a wide range of audiences.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.6, delay: 0.3
            }} className='skill_set yellow'>
            <img className='box' src='./home/box.png' />
            <p className='skills_head'>Get in touch</p>
            <p className='skill_text'>Looking for another service? Get in touch with me, there is a high chance that I will be able to help!</p>
            <button className='hero_message ml-auto mr-auto flex justify-center ml-10'>
              <img className='hero_icon' src='./home/mail.png' />
              Get in touch
            </button>
          </motion.div>

        </div>

        <div className='me flex justify-between'>
          <div>
            <img className='lg' src='./home/lg3.png' />
          </div>
          <div className='my_text'>
            <p className='me_head'>Who’s behind all <br /> this great work?</p>
            <p className='me_text'>I am soneye omojuwon  , a graduate from the Univeristy of Lagos Nigeria</p>
            <p className='me_text'>With a bachelor degree in Surveying and Geomatics engineering</p>
            <div className='mt-2 xl:mt-6 xl:mb-4 mb-2 flex'>
              <div className='color_on'>
              </div>
              <p className='me_text_head ml-2'> 3 Years Experience</p>
            </div>
            <p >Worked as a frontend engineer and interns in so <br />many startups and contributed to open source projects</p>

            <div className='xl:mt-6 mt-2 mb-4 flex'>
              <div className='color_one'>
              </div>
              <p className='me_text_head ml-2'> Personal Projects</p>
            </div>
            <p >I have worked on so many  projects <br /> to improve my proficency as an engineer</p>

          </div>
        </div>
        <div className='portfolio_content'>
          <p className='portfolio'>Take a look at my <br /> <span className='port_color'>Portfolio</span></p>
          <div className='portfolo_conten  flex justify-around'>
            <div className='port_Des '>
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
        <button className='port_sec flex mb-14 justify-center ml-10'>
          <img className='hero_icon mr-4' src='./home/mail.png' />
          <p className='ml-4'>
            View more project
          </p>
        </button>

        <div className='resume flex justify-around'>
          <div className='ress_head'>
            <p className='portfolio'>Take a look at my <br /> <span className='past'>past experience</span></p>
            <button className='hero_portfol flex justify-center'>
              <img className='hero_icon ' src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-suitcase-office-stationery-justicon-lineal-color-justicon.png" />
              See full resume
            </button>
          </div>
          <div className='workplace'>
            <div className='resume_card'>
              <div className='flex justify-between mb-4 ml-8 mr-8 '>
                <img className='res' src='./home/truz.png' />
                <p>Marc 2023 - Present</p>
              </div>
              <hr className='resume_head' />
              <div className='ml-8 mr-8'>
                <p className='jb_title'>Frontend Engineer</p>
                <p className='jb_con'>Fugiat velit consequat eiusmod fugiat mollit commodo esse sint velit dolore consequat veniam est pariatur.</p>
              </div>
            </div>

            <div className='resume_card'>
              <div className='flex justify-between mb-4 ml-8 mr-8 '>
                <img className='res' src='./home/sabi.png' />
                <p>Marc 2023 - Present</p>
              </div>
              <hr className='resume_head' />
              <div className='ml-8 mr-8'>
                <p className='jb_title'>Frontend Engineer</p>
                <p className='jb_con'>Fugiat velit consequat eiusmod fugiat mollit commodo esse sint velit dolore consequat veniam est pariatur.</p>
              </div>
            </div>

            <div className='resume_card'>
              <div className='flex justify-between mb-4 ml-8 mr-8 '>
                <img className='res' src='./home/blacklist.png' />
                <p>Marc 2023 - Present</p>
              </div>
              <hr className='resume_head' />
              <div className='ml-8 mr-8'>
                <p className='jb_title'>Frontend Engineer</p>
                <p className='jb_con'>Fugiat velit consequat eiusmod fugiat mollit commodo esse sint velit dolore consequat veniam est pariatur.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='articles '>
          <p className='article'>Articles</p>

          <div className='faq_head'>
            <div>
              <div className='flex justify-between mt-10 mb-8'>
                <p className='question'>Burn the ships</p>
                <button className='tog' onClick={() => setActive(active === 1 ? null : 1)}>
                  {active === 1 ? <p>-</p> : <p>+</p>}
                </button>
              </div>
              {active === 1 && (
                <div>
                  <p>
                    Hernán Cortés was a Spanish conquistador who led the invasion of the Aztec Empire in 1519.
                    He sailed from Cuba with a small force of around 600 men and landed on the Yucatan
                    Peninsula, where he began
                    his march towards the Aztec capital of Tenochtitlan, which is now Mexico City.
                    <a href='https://medium.com/@calebomojuwon/burn-the-ships-b38927ebc0f7' className='read'>READ MORE</a>
                  </p>
                </div>
              )}
            </div>
            <div>
              <div className='flex justify-between mt-10 mb-8'>
                <p className='question'>Your software performance is loosing you money !</p>
                <button className='tog' onClick={() => setActive(active === 2 ? null : 2)}>
                  {active === 2 ? <p>-</p> : <p>+</p>}
                </button>
              </div>
              {active === 2 && (
                <div>
                  <p>
                    “Software is never completed, it is just abandoned“- is a very popular saying in
                    the tech Ecosystem. What does this mean, no matter how much you try to adapt and
                    optimize it, there will always be something to optimize — Make it faster, smoother, etc
                    <a href='https://medium.com/@calebomojuwon/software-is-never-completed-it-is-just-abandoned-is-a-very-popular-saying-in-the-tech-ecosystem-5ddaba2256c9' className='read'>READ MORE</a>

                  </p>

                </div>
              )}
            </div>
            <div>
              <div className='flex justify-between mt-10 mb-8'>
                <p className='question'>Guide to rev up your LCP scpre and outpace the competition</p>
                <button className='tog' onClick={() => setActive(active === 3 ? null : 3)}>
                  {active === 3 ? <p>-</p> : <p>+</p>}
                </button>
              </div>
              {active === 3 && (
                <div>
                  <p>
                    “Optimizing the Largest Contentful Paint (LCP) of a web application can greatly
                    improve the user experience of the website and its general performance.
                    This is a very important goal for most businesses, as better user
                    experience leads to higher conversion rates and lower bounce rates
                    <a href='https://medium.com/@calebomojuwon/guide-to-rev-up-your-lcp-score-and-outpace-the-competition-b11194faf622' className='read'>READ MORE</a>
                  </p>
                </div>
              )}
            </div>
            <div>
              <div className='flex justify-between mt-10 mb-8'>
                <p className='question'>Surviving the storm : is your software ready to weather network instability</p>
                <button className='tog' onClick={() => setActive(active === 4 ? null : 4)}>
                  {active === 4 ? <p>-</p> : <p>+</p>}
                </button>
              </div>
              {active === 4 && (
                <div>
                  <p>
                    The strength of a person is often measured not by their success during favorable conditions,
                    but by how they react when facing adversity. Similarly, the quality of the software is
                    not fully seen when it is functioning under ideal conditions,
                    but when it is tested by unexpected events such as network instability.
                    <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                  </p>
                </div>
              )}
            </div>
          </div>
          <button className='hero_portfolo art mt-14 flex justify-center'>
            <img className='hero_icon ' src="https://img.icons8.com/laces/64/null/edit.png" />
            View more articles
          </button>
        </div>
      </div>
      <Footer />

    </div>
  )
}
