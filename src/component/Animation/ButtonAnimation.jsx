import React from 'react';
import { motion } from "framer-motion";

const ButtonAnimation = ({ child }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {child}
        </motion.button>
    );
}

export default ButtonAnimation;
