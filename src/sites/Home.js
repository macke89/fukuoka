import React from 'react';
import BackgroundVideo from "../components/BackgroundVideo";
import HomeCSS from '../styles/Home.module.css';

const Home = () => {
    return (
        <>
            <BackgroundVideo />
            <div className={HomeCSS.titleContainer}>
                <h1 className={HomeCSS.h1}>Fukuoka</h1>
                <h2 className={HomeCSS.h2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, nulla sapiente. Fugiat libero saepe tenetur?</h2>
            </div>
        </>
    );
};

export default Home;
