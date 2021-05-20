import React from 'react';
import IntroCSS from '../styles/Intro.module.css';

import imageOne from "../images/ji-seongkwang-htMMBc71Hjc-unsplash.jpg";
import imageTwo from "../images/alexander-schimmeck-Si4k9aNcr1c-unsplash.jpg";
import imageThree from "../images/jcs-chen-g6k9GPrktFU-unsplash.jpg";
import imageFour from "../images/akihiko-sayo-qUU-iMpzIv4-unsplash.jpg";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Intro = () => {
    return (
        <>
            <div className={IntroCSS.imageWrapper}>
                {/*<AwesomeSlider animation="cubeAnimation">*/}
                {/*    <div><img className={IntroCSS.imageWrapper_image} src={imageOne} alt="Image"/></div>*/}
                {/*    <div><img className={IntroCSS.imageWrapper_image} src={imageTwo} alt="Image"/></div>*/}
                {/*    <div><img className={IntroCSS.imageWrapper_image} src={imageThree} alt="Image"/></div>*/}
                {/*    <div><img className={IntroCSS.imageWrapper_image} src={imageFour} alt="Image"/></div>*/}
                {/*</AwesomeSlider>*/}

                <AwesomeSlider>
                    <div data-src={imageOne} />
                    <div data-src={imageTwo} />
                    <div data-src={imageThree} />
                </AwesomeSlider>
            </div>
            <div className={IntroCSS.textWrapper}>
                It is the most populous city on the island, followed by Kitakyushu. It is the largest city and
                metropolitan area west of Keihanshin. The city was designated on April 1, 1972, by government ordinance.
                Greater Fukuoka, with a population of 2.5 million people (2005 census), is part of the heavily
                industrialized Fukuoka–Kitakyushu zone.
            </div>
        </>
    );
};

export default Intro;
