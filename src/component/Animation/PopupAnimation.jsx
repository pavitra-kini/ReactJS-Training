import React from 'react';
import { motion } from "framer-motion";

const PopupAnimation = ({ child }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                delay: 0.1,
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            {child}
        </motion.div>
    );
}

export default PopupAnimation;
