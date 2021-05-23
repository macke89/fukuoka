import React from 'react';
import BackgroundVideo from "../components/BackgroundVideo";
import HomeCSS from '../styles/Home.module.css';
import {motion} from "framer-motion";

const Home = (props) => {
    return (
        <motion.div
            variants={props.pageAnimation}
            initial="initial"
            animate="in"
            exit="out">
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
