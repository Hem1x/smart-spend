import React from 'react'
import {motion} from 'framer-motion'

const AnimatedPage = ({children}) => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='flex-1'
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage