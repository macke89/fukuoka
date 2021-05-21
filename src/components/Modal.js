import React from 'react';
import ModalCSS from "../styles/Modal.module.css";
import {motion, AnimatePresence} from "framer-motion";
import {RiCloseCircleFill} from "react-icons/ri"

const Modal = ({place, modal, setModal}) => {
    const backdrop = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {modal && (
                <motion.div
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    className={ModalCSS.layout}>
                    <div className={ModalCSS.layout_modal}>
                        <div className={ModalCSS.layout_modal_imageWrap}>
                            <RiCloseCircleFill className={ModalCSS.layout_modal_imageWrap_close} size={'30px'} onClick={()=>setModal(false)}/>
                            <img src={place[1]} alt="Picture" className={ModalCSS.layout_modal_imageWrap_image}/>
                        </div>
                        <div className={ModalCSS.layout_modal_text}>
                            {place[0]}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
