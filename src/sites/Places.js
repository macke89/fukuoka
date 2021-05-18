import React from 'react';
import PlacesCSS from '../styles/Places.module.css';
import {GiBonsaiTree} from 'react-icons/gi';
import {VscRadioTower} from 'react-icons/vsc';

const Places = () => {
    return (
        <>
            <div className={PlacesCSS.place}>
                <GiBonsaiTree size={'150px'} color={'white'}/>
            </div>
            <div className={PlacesCSS.place}>
                <VscRadioTower size={'150px'} color={'darkcyan'}/>
            </div>
        </>
    );
};

export default Places;