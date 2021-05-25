import {Route, Switch, useLocation} from 'react-router-dom';
import Header from "./components/Header";
import Home from './sites/Home';
import About from './sites/About';
import Intro from "./sites/Intro";
import Places from "./sites/Places";
import { AnimatePresence } from "framer-motion";
import React from 'react';

// Checks width of browser window
const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // Return the width so we can use it in our components
    return {width};
}

function App() {
    const {width} = useViewport();
    const breakpoint900 = 900; // Breakpoint for Responsive Design

    const location = useLocation()
    const pageAnimation = {
        initial: {
            opacity: 0,
            transition: {
                duration: .5,
            }
        },

        in: {
            opacity: 1,
            transition: {
                duration: .5,
            }
        },

        out: {
            opacity: 0,
            transition: {
                duration: .5,
            }
        },
    }
    return (
        <AnimatePresence exitBeforeEnter>
            <Header breakpoint900={breakpoint900} width={width}/>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/" >
                    <Home pageAnimation={pageAnimation} width={width} breakpoint900={breakpoint900}/>
                </Route>
                <Route exact path="/about">
                    <About pageAnimation={pageAnimation} width={width} breakpoint900={breakpoint900}/>
                </Route>
                <Route exact path="/intro">
                    <Intro pageAnimation={pageAnimation} width={width} breakpoint900={breakpoint900}/>
                </Route>
                <Route exact path="/places">
                    <Places pageAnimation={pageAnimation} width={width} breakpoint900={breakpoint900}/>
                </Route>
            </Switch>
        </AnimatePresence>
    );
}

export default App;
