import React from 'react';
import { motion } from "framer-motion";
import TextAnimationH1 from '../../Animation/TextAnimationh1';
import TextAnimationP from '../../Animation/TextAnimationp';

const Contents = ({ modelContent, applyFramerMotion }) => {
    return (
        <div ClassName="flex justify-center">
            <div ClassName="bg-white shadow-lg rounded my-5 w-[45%] h-[250px] mx-20 mt-2">
                <TextAnimationH1 applyFramerMotion={applyFramerMotion} text={modelContent.header} ClassName={"py-10 px-20 text-5xl font-bold text-black text-center"} />
                <TextAnimationP applyFramerMotion={applyFramerMotion} text={modelContent.paragraph} ClassName={"font-normal text-xl text-black text-center pb-10"} />
            </div>
        </div>
    );
}

export default Contents;
