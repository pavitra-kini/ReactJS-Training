import React from 'react';
import { motion } from "framer-motion";

const TextAnimationH1 = ({ text, applyFramerMotion, ClassName }) => {
    return (
        <motion.h1
            initial={{ x: -1000 }}
            animate={applyFramerMotion}
            className={ClassName}
        >{text}</motion.h1>
    );
}

export default TextAnimationH1;
