import React from 'react';
import PlacesCSS from '../styles/Places.module.css';
import {GiBonsaiTree} from 'react-icons/gi';
import {VscRadioTower} from 'react-icons/vsc';
import {motion} from "framer-motion";
import {AiFillCloseCircle} from 'react-icons/ai';

const Places = () => {
    return (
        <>
            <div className={PlacesCSS.place}>
                <GiBonsaiTree size={'150px'}/>
            </div>
            <div className={PlacesCSS.place}>
                <VscRadioTower size={'150px'}/>
            </div>
        </>
    );
};

export default Places;
