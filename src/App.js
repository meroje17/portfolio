import React from 'react';

// React router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Experiences from './components/experiences/Experiences';
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
    </div>
);

export default App;
