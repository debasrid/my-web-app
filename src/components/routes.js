import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Resume from './resume';
import ContactMe from './contactme';
import Projects from './projects';

const Main = ()=> (
    <Switch>
        <Route exact path = '/' component = {LandingPage} />
        <Route path = '/aboutme' component = {AboutMe} /> 
        <Route path = '/resume' component = {Resume} /> 
        <Route path = '/projects' component = {Projects} />   
        <Route path = '/contactme' component = {ContactMe} />     
    </Switch>
   
)

export default Main;