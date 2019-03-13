import React, {components} from 'react';
//import {Link} from 'react-router';
import { Link } from 'react-router-dom'
import {firebaseApp} from '../../firebase'
import './signup.css';

class signup extends React.Component{
 
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


  signup(){
    console.log("this state", this.state);
    const {email,password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
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
            <h3>Sign up</h3>
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
   onClick={()=>this.signup()}>
   Sign up
   </button>
  
  </form>
  <div><Link to={'/signin'}>if already a user? signin</Link></div>
  <div>{this.state.error.message}</div>
   <div className = "col-lg-4"> </div>
       </div>
      </div>
     </div>
   </div>
  );
  };
  };

  export default signup;