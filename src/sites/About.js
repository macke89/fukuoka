import React from 'react';
import AboutCSS from '../styles/About.module.css';
import {CgNametag} from 'react-icons/cg';
import {FaLinkedinIn} from 'react-icons/fa';
import {HiHome} from 'react-icons/hi';
import {FaGithub} from 'react-icons/fa';
import {IoIosText} from 'react-icons/io';



const About = () => {
    return (
        <>
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
                <div className={AboutCSS.links_text}>
                    <FaLinkedinIn size={'30px'}/>
                    <a href="https://www.linkedin.com/in/markus-oppelt-2842831b8/" target="_blank">LinkedIn</a>
                </div>
                <div className={AboutCSS.links_text}>
                    <HiHome size={'30px'}/>
                    <a href="https://mo-webdesign.com/" target="_blank">Portfolio</a>
                </div>
                <div className={AboutCSS.links_text}>
                    <FaGithub size={'30px'}/>
                    <a href="https://github.com/macke89" target="_blank">GitHub</a>
                </div>
            </div>
        </>
    );
};

export default About;
