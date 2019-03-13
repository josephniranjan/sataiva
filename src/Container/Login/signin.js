import React, {components} from 'react';
//import {Link} from 'react-router';
import { Link } from 'react-router-dom'
import {firebaseApp} from '../../firebase'
import './signup.css';


class signin extends React.Component{
 
  constructor(props){
    super(props);
    {
 this.state = {
   email:'',
   password:'',
   error :{
     message : ''
   }
 }
}
}


  signin(){
    console.log("this state", this.state);
    const {email,password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email,password)
    .then((response) => {
      console.log(response);
      this.props.history.push('/Dashboard');
    })
    .catch(error => {
      this.setState({error})
    })

  }

  render(){
    return(
      
    <div>
     <div className="container">
      <div className = "col-lg-4"> </div>
       <div className = "col-lg-4">
        <div className="jumbotron">
            <h3>Sign in</h3>
    <form className="form-signin">
    
    <div className="form-label-group">
    <input 
    type="email"
    id="inputEmail" 
    className="form-control" 
    placeholder="Email address" 
    onChange ={event => this.setState({email: event.target.value})}
    required autoFocus/>
    </div>
  
    <div className="form-label-group">
     <input 
     type="password" 
     id="inputPassword" 
     className="form-control" 
     placeholder="Password"
     onChange ={event => this.setState({password: event.target.value})} 
     required/>
    </div>
  
  
  <button 
   className="btn  text-uppercase" 
   type="button"
   onClick={()=>this.signin()}>
   Sign In
   </button>
  
  </form>
  <div><Link to={'/signup'}>new user? signup</Link></div>
  <div>{this.state.error.message}</div>
   <div className = "col-lg-4"> </div>
       </div>
      </div>
     </div>
   </div>
  );
  };
  };

  export default signin;