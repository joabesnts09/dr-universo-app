'use client'

import { motion } from 'framer-motion'

interface ITemplateProps {
  children: React.ReactNode
}

export default function Template({ children }: ITemplateProps) {

  return (
    <>
      <motion.div
        initial={{y: 16, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{ease: 'easeInOut', duration: .75}}
      >
        { children }
      </motion.div>
    </>
  )
}