import React from 'react';
import { motion } from "framer-motion";

const TextAnimationP = ({ text, applyFramerMotion, ClassName }) => {
    return (
        <motion.p
            initial={{ x: -1000 }}
            animate={applyFramerMotion}
            class={ClassName}
        >{text}</motion.p>
    );
}

export default TextAnimationP;
