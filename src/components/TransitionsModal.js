import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TransModalCSS from '../styles/TransitionsModal.module.css';
import PlacesCSS from '../styles/Places.module.css';
import {RiCloseCircleFill} from "react-icons/ri"

export default function TransitionsModal(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div onClick={handleOpen} className={`${TransModalCSS.button} ${PlacesCSS.place}`}>
                {props.children}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={TransModalCSS.layout}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={TransModalCSS.modal}>
                        <div className={TransModalCSS.modal_imageWrapper}>
                            <RiCloseCircleFill
                                onClick={handleClose}
                                className={TransModalCSS.modal_imageWrapper_icon}
                                color={'white'}
                                size={'35px'}/>
                            <img src={props.image} alt="Image"
                                 className={TransModalCSS.modal_imageWrapper_image}/>
                        </div>
                        <div className={TransModalCSS.modal_text}>{props.text}</div>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}
