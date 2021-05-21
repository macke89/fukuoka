import {Route, Switch, useLocation} from 'react-router-dom';
import Header from "./components/Header";
import Home from './sites/Home';
import About from './sites/About';
import Intro from "./sites/Intro";
import Places from "./sites/Places";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <Header/>
            <Switch location={location} key={location.key}>
                <Route exact path="/" >
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/intro">
                    <Intro/>
                </Route>
                <Route exact path="/places">
                    <Places/>
                </Route>
            </Switch>
        </AnimatePresence>
    );
}

export default App;
