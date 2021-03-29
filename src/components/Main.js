import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import News from './News';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/news" component={News}/>
        </Switch>
    </main>
);

export default Main;