import { motion } from 'motion/react'
import React from 'react'

const RightDiv = ({children, className = "" }) => (
    <motion.div
        initial={{
            opacity: 0,
            x: 100
        }}
        whileInView={{
            opacity: 1,
            x:0
        }}
        viewport={{
            once: false,
            amount: 0.4
        }}
        transition={{
            type: "easeInOut",
            duration: 0.8,
        }}
        className={className}
    >
        {children}
    </motion.div>
);

export default RightDiv;