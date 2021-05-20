import GalleryCSS from '../styles/Gallery.module.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {motion} from "framer-motion";
import React from "react";
import imageOne from "../images/christian-chen-YE593pZmkHs-unsplash.jpg";

const Gallery = (props) => {
    const variants = {
        open: {opacity: 1, y: 0},
        closed: {opacity: 0, x: "100%"},
    }
    return (
        <motion.div
            className={GalleryCSS.layout}
            animate={props.open ? "open" : "closed"}
            variants={variants}>
            <AiFillCloseCircle
                color={'white'}
                size={'35px'}
                onClick={() => props.onChange(!props.open)}
                className={GalleryCSS.layout_close}/>
            <img className={GalleryCSS.layout_image} src={imageOne} alt=""/>
            <FaArrowAltCircleLeft size={'30px'} color={'white'} className={GalleryCSS.arrows_left}/>
            <FaArrowAltCircleRight size={'30px'} color={'white'} className={GalleryCSS.arrows_right}/>
        </motion.div>
    );
};

export default Gallery;
