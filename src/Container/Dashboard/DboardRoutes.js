import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import React, {components} from 'react';
import About from './About';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';

class DboardRoutes extends React.Component {
    render(){
        return(
        <BrowserRouter>
        <div>
        <Route path='/Home'  exact component ={Home}/>
        <Route path='/About'  exact component ={About}/>
        <Route path='/Product'  exact component ={Product}/>
        <Route path='/Contact'  exact component ={Contact}/>
        </div>
        </BrowserRouter>
        );
    }
}

export default DboardRoutes;