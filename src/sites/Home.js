import React from 'react';
import BackgroundVideo from "../components/BackgroundVideo";
import HomeCSS from '../styles/Home.module.css';
import {motion} from "framer-motion";

const Home = () => {
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
            variants={containerVariants}
            inital="hidden"
            animate="visible"
            exit="exit">
            <BackgroundVideo/>
            <div className={HomeCSS.titleContainer}>
                <h1 className={HomeCSS.h1}>Fukuoka</h1>
                <h2 className={HomeCSS.h2}>Fukuoka (福岡) is Kyushu's largest and one of Japan's ten most populated
                    cities.</h2>
            </div>
        </motion.div>
    );
};

export default Home;
