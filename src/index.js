import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {firebaseApp} from './firebase';
import Dashboard from './Container/Dashboard/Dashboard';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

// firebaseApp.auth().onAuthStateChanged(function(user) {
//     // if(user.emailVerified) {
//             console.log('user has been logged in',user);
//             this.context.history.push('/Dashboard');
           
//           // } 
//           // else{
//           //   console.log("No user is logged");
//           // }
  
// }); 




ReactDOM.render(<App />, document.getElementById('root'));
