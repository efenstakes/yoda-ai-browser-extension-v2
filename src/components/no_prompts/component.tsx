import React from 'react'
import { AiOutlineHourglass } from 'react-icons/ai'
import { motion } from 'framer-motion'

// styles
import "./component.scss"
import { containerVariants, itemVariants } from '../../variants/variants'

const NoPrompts = () => {
    return (
        <motion.div
          className='no_prompts'
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >

            <AiOutlineHourglass size={40} color='gray' />

            <motion.h2 variants={itemVariants}>
              No Prompts Yet.
            </motion.h2>

            <motion.p className='no_prompts_text' variants={itemVariants}>
              Ask Yoda anything and get an immediate response now..
            </motion.p>

        </motion.div>
    )
}

export default NoPrompts