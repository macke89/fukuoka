import React from 'react';
import imageOne from '../images/christian-chen-YE593pZmkHs-unsplash.jpg';
import IntroCSS from '../styles/Intro.module.css';

const Intro = () => {
    return (
        <div className={IntroCSS.layout}>
            {/*TODO: Create Overlay*/}
            <div className={IntroCSS.imageWrapper}>
                <img src={imageOne} alt="BackgroundImage" className={IntroCSS.imageWrapper_image}/>
            </div>
            <div className={IntroCSS.textWrapper}>
                <span className={IntroCSS.textWrapper_text}>
                    It is the most populous city on the island, followed by Kitakyushu. It is the largest city and metropolitan area west of Keihanshin. The city was designated on April 1, 1972, by government ordinance. Greater Fukuoka, with a population of 2.5 million people (2005 census), is part of the heavily industrialized Fukuoka–Kitakyushu zone.
                </span>
            </div>
        </div>
    );
};

export default Intro;
