import React from 'react'
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'

export default function Data() {
  const router = useRouter()

  return (
    <AnimatePresence >
      <motion.div
        key={router.route}
        initial={{ scaleY: 0, borderRadius: "20%"}}
        animate={{ scaleY: 1, borderRadius: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1
        }} className='data'
      >
        kjlk
      </motion.div>
    </AnimatePresence>
  )
}
