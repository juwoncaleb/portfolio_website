import React, { useState } from 'react'
import Footer from '../components/Footer'
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import Header from '../components/Header'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Landingpage() {
  const [active, setActive] = useState(null)
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const [selected, setSelected] = useState(null);
  const [portClick, setPortClick] = useState(null);
  const router = useRouter()
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <AnimatePresence >
      <motion.div key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.7
        }} className='language'>
        <Header onMenuItemClick={handleScrollToSection} />
        <div className='landingpage_content '>
          {/* HERO */}
          <motion.div
            style={{ y }}
            className='flex justify-between landsec'>
            <div>
              <div className='hero_head'>
                <p>I am Juwoncaleb</p>
                <p>a Frontend engineer</p>
                <p>& Web performance consultant</p>
              </div>
              <div className='hero_texts'>
                <p >YOU CAN CALL ME JC OR COMPUTER WHISPERER
                  YOU DEBUG CODE , <br /> I STARE AT MY CODE , TILL THE BUGS STARTS CONFESSING</p>

              </div>
              <div className='flex mt-10 buttons'>
                <Link href="./portfolio">
                <button className='hero_portfolo flex justify-center'>
                  <img className='hero_icon ' src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-suitcase-office-stationery-justicon-lineal-color-justicon.png" />
                  View portfolio
                </button>
                </Link>
             <Link href="./contact">
                       <button className='hero_message flex justify-center ml-10'>
                  <img className='hero_icon' src='./home/mail.png' />
                  Get in touch
                </button>
                    </Link>
              </div>
            </div>
            <img className='hero_img' src='https://ik.imagekit.io/juwoncaleb/land_awzYBUCr2.webp?updatedAt=1683135783020' />
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
                <img className='skills' src='https://ik.imagekit.io/juwoncaleb/dev_vXHq8cxNs.webp?updatedAt=1683136240455' />
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
                <img className='skills' src='https://ik.imagekit.io/juwoncaleb/perf_C4Zu7nOj4.webp?updatedAt=1683136967334' />
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
                <img className='skills' src='https://ik.imagekit.io/juwoncaleb/write_uILSWjGhI.webp?updatedAt=1683136967511' />
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
              <img className='box' src='https://ik.imagekit.io/juwoncaleb/box_kHc5Cl-yh.webp?updatedAt=1683136240321' />
              <p className='skills_head'>Get in touch</p>
              <p className='skill_text'>Looking for another service? Get in touch with me, there is a high chance that I will be able to help!</p>
              <button className='hero_message ml-auto mr-auto flex justify-center ml-10'>
                <img className='hero_icon' src='./home/mail.png' />
                Get in touch
              </button>
            </motion.div>

          </div>

          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.6
            }} id="div1" className='myself aboutme flex justify-between'>
            <div>
              <img className='lg' src='https://ik.imagekit.io/juwoncaleb/lg3_Eh72ewKf5.webp?updatedAt=1683135944199' />
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
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.6
            }} className='portfolio'>Take a look at my <br /> <span className='port_color'>Portfolio</span></motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.6
            }} className='flex test'>
            <motion.div

              onClick={() => {
                setPortClick(1)
                console.log("click");
              }}
              className={portClick === 1 ? "por_1_original_click flex  justify-around" : "flex  justify-around por_1_original"}
            >
              <div className='port_Des '>
                <div className='flex '>
                  <p className='port_head'>Pereview</p>
                  <img className='perlg' src=' https://ik.imagekit.io/juwoncaleb/perelogo_wcgpkU_cV.webp?updatedAt=1683136582742' />
                </div>
                <p className='port_det'>A DEVELOPER PRODUCTIVITY SASS <br />tO HELP DEVELOPERS ARE PRODUCT DESIGNERS  <br />
                  GATHER REAL USER FEEDBACK ON PRODUCT BEFORE DEPLOYMENT </p>
                <Link href='./pere'>
                  <button className='explore_black mt-8 flex justify-center '>
                    Explore
                    <img className=' ml-4 mb-2 arrow' src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-up.png" />
                  </button>
                </Link>
              </div>
              <img className='lacost_image port_Des' src=' https://ik.imagekit.io/juwoncaleb/pere_BldbFlPfY.webp?updatedAt=1683136583257  ' />


              <div className='port_sub'>
                <div className='flex justify-center small_head '>
                  <p className='port_head'>Pereview</p>
                  <img className='perlg' src='https://ik.imagekit.io/juwoncaleb/perelogo_wcgpkU_cV.webp?updatedAt=1683136582742' />
                </div>
                <img className='lacost_image' src='https://ik.imagekit.io/juwoncaleb/pere_BldbFlPfY.webp?updatedAt=1683136583257 ' />
                <Link href='./pere'>
                  <button className='explore_black mt-8 flex justify-center  '>
                    Explore
                    <img className=' ml-4 mb-2 arrow' src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-up.png" />

                  </button>
                </Link>
              </div>

            </motion.div>

            <motion.div
              onClick={() => {
                setPortClick(2)
                console.log("click");
              }}

              className={portClick === 2 ? "por_2_original_click flex  justify-around" : "por_2_original flex  justify-around"}
            >
              <div className='port_Des '>
                <div className='flex '>
                  <p className='port_head'>
                    NYX</p>
                  <img className='nyx ' src='https://ik.imagekit.io/juwoncaleb/24299_451616_JRSH0nPB2.jpg?updatedAt=1682348309296' />
                </div>
                <p className='port_det'>A FULL STACK ECOMMERCE STORE
                  MADE WITH <br /> NEXTJS IN THE FRONTENDS
                  MADE WITH NEXTJS IN THE BACKEND <br />
                  UTILIZES MONGODB AS A DATABASE SYSTEM </p>
                <Link href="./nysx">
                  <button className='explore_black mt-8 flex justify-center '>
                    Explore
                    <img className=' ml-4 mb-2 arrow' src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-up.png" />

                  </button>
                </Link>
              </div>

              <img className='lacost_image port_Des' src='https://ik.imagekit.io/juwoncaleb/nyx_9IMaCKkT6.webp?updatedAt=1683136582666' />
              <div className='port_sub'>
                <div className='flex justify-center '>
                  <p className='port_head'>NYX</p>
                  <img className='nyx' src='https://ik.imagekit.io/juwoncaleb/24299_451616_JRSH0nPB2.jpg?updatedAt=1682348309296' />
                </div>
                <img className='lacost_image' src='https://ik.imagekit.io/juwoncaleb/nyx_9IMaCKkT6.webp?updatedAt=1683136582666' />
                <Link href="./nysx">
                  <button className='explore_black mt-8 flex justify-center  '>
                    Explore
                    <img className=' ml-4 mb-2 arrow' src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-up.png" />
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              onClick={() => {
                console.log("click");
                setPortClick(3)
              }}

              className={portClick === 3 ? "por_3_original_click flex  justify-around" : "por_3_original flex justify-around"}
            >
              <div className='port_Des '>
                <div className='flex'>
                  <p className='port_head'>Lacoste </p>
                  <img className='nyx' src='https://ik.imagekit.io/juwoncaleb/laco_dVDVkRDQl.webp?updatedAt=1683136241642' />
                </div>

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
              <img className='lacost_image port_Des' src='https://ik.imagekit.io/juwoncaleb/lac_ox3vNaeYH.webp?updatedAt=1683136241155' />

              <div className='port_sub'>
                <div className='flex justify-center small_head '>
                  <p className='port_head'>Lacoste</p>
                  <img className='nyx' src='https://ik.imagekit.io/juwoncaleb/laco_dVDVkRDQl.webp?updatedAt=1683136241642' />
                </div>
                <img className='lacost_image' src='https://ik.imagekit.io/juwoncaleb/lac_ox3vNaeYH.webp?updatedAt=1683136241155' />
                <Link href='./lacoste'>
                  <button className='explore_black mt-8 flex justify-center  '>
                    Explore
                    <img className=' ml-4 mb-2 arrow' src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-up.png" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          <Link href='./portfolio'>
            <button className='port_sec flex mb-14 justify-center ml-10'>
              <img className='hero_icon ' src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-suitcase-office-stationery-justicon-lineal-color-justicon.png" />
              <p className='ml-4'>
                View more project
              </p>
            </button>
          </Link>


          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.6
            }} className='resume flex justify-around'>
            <div className='ress_head'>
              <p className='portfolio'>Take a look at my <br /> <span className='past'>past experience</span></p>
            <Link href="https://drive.google.com/file/d/1E9ltrUKo9xyMNTI-ADw2b37vGoq8NmxZ/view">
                  <button className='hero_portfol flex justify-center'>
                <img className='hero_icon ml-4 ' src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-suitcase-office-stationery-justicon-lineal-color-justicon.png" />
                See full resume
              </button>
                </Link>

            </div>
            <div className='workplace'>
              <div className='resume_card'>
                <div className='flex justify-between mb-4 ml-8 mr-8 '>
                  <img className='res' src='https://ik.imagekit.io/juwoncaleb/tru_P9iFBGeY5.webp?updatedAt=1683136967701' />
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
                  <img className='res' src='https://ik.imagekit.io/juwoncaleb/sabi_fUasHOn95.webp?updatedAt=1683136967643' />
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
                  <img className='res' src='https://ik.imagekit.io/juwoncaleb/blacklist_SC2gvf41q.webp?updatedAt=1683136967634' />
                  <p>Marc 2023 - Present</p>
                </div>
                <hr className='resume_head' />
                <div className='ml-8 mr-8'>
                  <p className='jb_title'>Frontend Engineer</p>
                  <p className='jb_con'>Fugiat velit consequat eiusmod fugiat mollit commodo esse sint velit dolore consequat veniam est pariatur.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.6
            }} id="div2" className='articles '>
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
                  <motion.div >
                    <p>
                      Hernán Cortés was a Spanish conquistador who led the invasion of the Aztec Empire in 1519.
                      He sailed from Cuba with a small force of around 600 men and landed on the Yucatan
                      Peninsula, where he began
                      his march towards the Aztec capital of Tenochtitlan, which is now Mexico City.
                      <a href='https://medium.com/@calebomojuwon/burn-the-ships-b38927ebc0f7' className='read'>READ MORE</a>
                    </p>
                  </motion.div>
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
          </motion.div>
        </div>
        <Footer />

      </motion.div>
    </AnimatePresence>
  )
}
