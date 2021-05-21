import React, {useState, useEffect} from 'react';
import PlacesCSS from '../styles/Places.module.css';
import {GiBonsaiTree} from 'react-icons/gi';
import {VscRadioTower} from 'react-icons/vsc';
import {motion} from "framer-motion";
import {AiFillCloseCircle} from 'react-icons/ai';
import Modal from "../components/Modal";
import Uminonakamichi from "../images/marianna-berno-PfYn2omgT4M-unsplash.jpg";
import RadioTower from "../images/johanna-9TXjJITjs5k-unsplash.jpg";

const data = {
    umino: {
        text: "Uminonakamichi Seaside Park (海の中道海浜公園, Uminonakamichi Kaihin Kōen), is a sprawling, family-oriented" +
            " public park located on a narrow peninsula across the bay from central Fukuoka. The park is made up of" +
            " several different areas including flower gardens, playgrounds, sports fields, a water park, a zoo and" +
            " large open spaces and lawns perfect for picnicking.",
        image: Uminonakamichi,
    },
    radioTower: {
        text: "Although Fukuoka City is more famous for its food and culture than its landmarks, Fukuoka Tower is" +
            " one landmark worth seeing. Built to succeed the aging Hakata Port Tower as a symbol for the city," +
            " Fukuoka Tower is 234 meters (767.7 feet) tall at its highest point, with a 360-degree-view observatory" +
            " at 123 meters (403.5 feet). Construction was completed in 1989 on reclaimed land overlooking sandy" +
            " beaches and Hakata Bay, and it is the tallest sea-coast tower in Japan.",
        image: RadioTower,
    }
}

const Places = () => {
        const containerVariants = {
            hidden: {
                opacity: 0,
            },
            visible: {
                opacity: 1,
                transition: {
                    ease: 'easeInOut',
                    delay: .2,
                    duration: .4,
                }
            },
            exit: {
                opacity: 0,
                scale: 0,
                transition: {
                    ease: 'easeInOut',
                    delay: .2,
                    duration: .4,
                }
            }
        }
        const [modal, setModal] = useState(false);
        const [place, setPlace] = useState(['tesaa', Uminonakamichi]);

        function toggle(text, image) {
            setPlace([text, image])
            return setModal(() => modal => !modal);
        }

        console.log(modal);
        return (
            <motion.div
                className={PlacesCSS.layout}
                variants={containerVariants}
                inital="hidden"
                animate="visible"
                exit="exit">
                <div className={PlacesCSS.place} onClick={() => toggle(data.umino.text, data.umino.image)}>
                    <GiBonsaiTree size={'150px'}/>
                </div>
                <div className={PlacesCSS.place} onClick={() => toggle(data.radioTower.text, data.radioTower.image)}>
                    <VscRadioTower size={'150px'}/>
                </div>
                {modal && (
                    <Modal place={place} modal={modal} setModal={setModal}/>
                )}
            </motion.div>
        );
    }
;

export default Places;
