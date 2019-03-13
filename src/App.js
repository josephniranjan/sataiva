import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import signup from './Container/Login/signup'
import Dashboard from './Container/Dashboard/Dashboard'
import signin from './Container/Login/signin';
import {firebaseApp} from './firebase';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function PrivateRoute ({
  component: Component,
  ...rest
  }){
  return (
    <Route
      {...rest}
      render={props => {
        const user =firebaseApp.auth().currentUser;
        if (user) {
          return <Component email ={user.email}  {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};


class App extends Component {
  render() {
    return (
        <BrowserRouter history={history}>
          <div>
            <Route path='/'  exact component ={signup}/>
            <Route path='/signup'  exact component ={signup}/>
             <Route path='/signin' component ={signin}/> 
             <PrivateRoute path="/Dashboard" component={Dashboard} />
        </div>
        </BrowserRouter>
        // <DboardRoutes> </DboardRoutes>
    );
  }
}

export default App;
