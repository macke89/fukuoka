import React from 'react';
import {CgMenuGridR} from 'react-icons/cg';
import HeaderCSS from '../styles/Header.module.css';
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";
import {useState} from "react";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const variants = {
        open: {
            opacity: 1, y: "100%", transition: {
                type: 'tween'
            }
        },
        closed: {opacity: 0, y: 0},
    }
    const toggle = () => setIsOpen(isOpen => !isOpen);

    return (
        <>
            {props.width < props.breakpoint900 ? <div className={HeaderCSS.menu}>
                <CgMenuGridR size={'40px'} color={'white'} onClick={toggle}/>
            </div> :
                <nav className={HeaderCSS.desktopNav}>
                    <Link to="/" onClick={toggle}>Home</Link>
                    <Link to="/intro" onClick={toggle}>Intro</Link>
                    <Link to="/places" onClick={toggle} className={HeaderCSS.right}>Places</Link>
                    <Link to="/about" onClick={toggle} className={HeaderCSS.right}>About</Link>
                </nav>
            }


            <motion.nav
                className={HeaderCSS.nav}
                animate={isOpen ? "open" : "closed"}
                variants={variants}>
                <Link to="/" className={HeaderCSS.nav_text} onClick={toggle}>Home</Link>
                <Link to="/intro" className={HeaderCSS.nav_text} onClick={toggle}>Intro</Link>
                <Link to="/places" className={HeaderCSS.nav_text} onClick={toggle}>Places</Link>
                <Link to="/about" className={HeaderCSS.nav_text} onClick={toggle}>About</Link>
            </motion.nav>
        </>
    );
};

export default Header;
