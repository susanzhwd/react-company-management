/*********************************************************************************
* WEB422 – Assignment 4
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Juanjuan Zhang    Student ID: 109026179     Date: Oct 16, 2019
*
*
********************************************************************************/

import React, { Component } from 'react';
import Overview from './Overview';
import{ Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import Employees from './Employees';
import Teams from './Teams';
import NotFound from './NotFound';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={()=> <Overview/>}/>
        <Route exact path='/Projects' render={()=> <Projects/>}/>
        <Route exact path='/Teams' render={()=> <Teams/>}/>
        <Route exact path='/Employees' render={()=> <Employees/>}/>
        <Route render={()=>(<NotFound/>)}/>
      </Switch>

    );
  }
}

export default App;
