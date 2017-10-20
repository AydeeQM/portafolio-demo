import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import './App.css';

import Home from './Home';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';

const App = (props) => {
    const {model} =  props;
    console.log('app.props', props)
    return (<BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" render={() => <Redirect to= {'/home'}/>}/>
                <Route  path="/home" render={() => <Home model={model} />}/>
                <Route  path="/about" render={() => <About model={model} />}/>
                <Route path="/skill" render={() => <Skill model={model}/>}/>
                <Route  path="/project" render={() => <Project model={model} />}/>
                <Route path="/contact" render={() => <Contact model={model}/>}/>
                <Route path='/portafolio-demo' render={() => <Redirect to="/home"/>}/>
            </Switch>
        </div>
    </BrowserRouter>)
}

export default App;
