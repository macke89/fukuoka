import React from 'react';
import coast from '../videos/coast.mp4';
import BackgroundCSS from '../styles/BackgroundVideo.module.css';

const BackgroundVideo = () => {
    return (
        <>
            <div className={BackgroundCSS.container}>
                <video autoPlay loop muted className={BackgroundCSS.video}>
                    <source src={coast} type="video/mp4"/>
                </video>
                <div className={BackgroundCSS.overlay}></div>
            </div>
        </>
    );
};

export default BackgroundVideo;
