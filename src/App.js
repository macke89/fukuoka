import {Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import Home from './sites/Home';
import About from './sites/About';
import Intro from "./sites/Intro";
import Places from "./sites/Places";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/">
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
        </>
    );
}

export default App;
