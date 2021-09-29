import React from 'react';

// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Experiences from './components/experiences/Experiences';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

const App = () => (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/experiences'>
                    <Experiences />
                </Route>
            </Switch>
        </Router>
        <Footer />
    </div>
);

export default App;
