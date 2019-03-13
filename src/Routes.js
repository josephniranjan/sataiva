import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import signup from './Container/Login/signup';
import signin from './Container/Login/signin';
import Dashboard from './Container/Dashboard/Dashboard';




class Routes extends React.Component {
    render () {
      return (
      
        <BrowserRouter>
          <div>
            <Route path='/'  exact component ={signup}/>
            <Route path='/signin'  component ={signin}/>
            <Route path="/Dashboard" component ={Dashboard}/>
        </div>
        </BrowserRouter>
       

      )
    }
  }

  export default Routes;