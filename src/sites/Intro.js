import React from 'react';
import IntroCSS from '../styles/Intro.module.css';
import imageOne from "../images/ji-seongkwang-htMMBc71Hjc-unsplash.jpg";
import imageTwo from "../images/alexander-schimmeck-Si4k9aNcr1c-unsplash.jpg";
import imageThree from "../images/jcs-chen-g6k9GPrktFU-unsplash.jpg";
import imageFour from "../images/akihiko-sayo-qUU-iMpzIv4-unsplash.jpg";
import imageFive from "../images/christian-chen-YE593pZmkHs-unsplash.jpg";
import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
import '../styles/custom.css';
import {motion} from "framer-motion";

const Intro = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                delay: .2,
                duration: .4,
            }
        },
        exit: {
            opacity: 0,
            scale: 0,
            transition: {
                ease: 'easeInOut',
                delay: .2,
                duration: .4,
            }
        }
    }
    return (
        <motion.div
            className={IntroCSS.layout}
            variants={containerVariants}
            inital="hidden"
            animate="visible"
            exit="exit">
            <div className={IntroCSS.layout_imageWrapper}>
                <AwesomeSlider>
                    <div data-src={imageOne}/>
                    <div data-src={imageTwo}/>
                    <div data-src={imageThree}/>
                    <div data-src={imageFour}/>
                    <div data-src={imageFive}/>
                </AwesomeSlider>
            </div>
            <div className={IntroCSS.layout_textWrapper}>
                It is the most populous city on the island, followed by Kitakyushu. It is the largest city and
                metropolitan area west of Keihanshin. The city was designated on April 1, 1972, by government ordinance.
                Greater Fukuoka, with a population of 2.5 million people (2005 census), is part of the heavily
                industrialized Fukuoka–Kitakyushu zone.
            </div>
        </motion.div>
    );
};

export default Intro;
