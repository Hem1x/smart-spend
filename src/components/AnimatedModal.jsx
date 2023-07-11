import React from 'react'
import {motion} from 'framer-motion'

const AnimatedModal = ({children}) => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            transition={{
                ease: "linear",
                x: { duration: 1 }
              }}
            className='opacity-0 absolute left-0 top-0 w-full h-full bg-overlay z-10'
        >
            {children}
        </motion.div>
    )
}

export default AnimatedModal