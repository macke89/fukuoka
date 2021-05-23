import React from 'react';
import AboutCSS from '../styles/About.module.css';
import {CgNametag} from 'react-icons/cg';
import {FaLinkedinIn} from 'react-icons/fa';
import {HiHome} from 'react-icons/hi';
import {FaGithub} from 'react-icons/fa';
import {IoIosText} from 'react-icons/io';
import {motion} from "framer-motion";


const About = (props) => {
    return (
        <motion.div
            className={AboutCSS.layout}
            variants={props.pageAnimation}
            initial="initial"
            animate="in"
            exit="out">
            <div className={AboutCSS.info}>
                <div className={AboutCSS.info_text}>
                    <CgNametag size={'40px'} color={'white'}/>
                    Markus Oppelt
                </div>
                <div className={AboutCSS.info_text}>
                    <IoIosText size={'40px'} color={'white'}/>
                    I am a Web Developer living in Japan.
                </div>
            </div>
            <div className={AboutCSS.links}>
                <a
                    href="https://www.linkedin.com/in/markus-oppelt-2842831b8/" target="_blank" rel="noreferrer"
                    className={AboutCSS.links_text}>
                    <FaLinkedinIn size={'30px'}/>
                    <div>LinkedIn</div>
                </a>
                <a
                    href="https://mo-webdesign.com/" target="_blank" rel="noreferrer"
                    className={AboutCSS.links_text}>
                    <HiHome size={'30px'}/>
                    <div>Portfolio</div>
                </a>
                <a
                    href="https://github.com/macke89" target="_blank" rel="noreferrer"
                    className={AboutCSS.links_text}>
                    <FaGithub size={'30px'}/>
                    <div>GitHub</div>
                </a>
            </div>
        </motion.div>
    );
};

export default About;
