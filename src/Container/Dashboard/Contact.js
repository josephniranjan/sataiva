import React, {components} from 'react';
import {Grid, Cell} from 'react-mdl'
class Contact extends React.Component {
    render(){
    return(
      <div className="demo-big-content">
      <div style={{width: '60%', margin: 'auto'}}>
      <Grid className="demo-grid-1" style={{backgroundColor: '#0d9b8b',marginTop:'50px',borderRadius:'15px 50px 30px 5px',paddingLeft:'60px', color:'white'}}>
      <Cell col={12}><h1 style={{textAlign:'center'}}>GET IN TOUCH</h1></Cell>
        <Cell col={4}><img src="https://img.icons8.com/ios/50/000000/marker-filled.png" height="85" width="80"/><h3>ADDRESS</h3> <h5 style ={{color: 'black'}}>69 S T U D I O S</h5>38/B Kandasamy puram,<br/> Tuticorin - 628002</Cell>
        <Cell col={4}><img src="https://img.icons8.com/wired/64/000000/phone.png" height="85" width="80"/><h3>PHONE</h3><h5 style ={{color: 'black'}}>69 S T U D I O S</h5>+91 9629674492</Cell>
        <Cell col={4}><img src="https://img.icons8.com/ios/100/000000/secured-letter.png" height="85" width="80"/><h3>EMAIL</h3><h5 style ={{color: 'black'}}>69 S T U D I O S</h5> josephniranjan07@gmail.com</Cell>
    </Grid>
    </div>
    
 <footer class="w3-container w3-teal w3-center w3-margin-top">
  <p>Find me on social media.</p>
  <a href="https://www.facebook.com/jniranjan" target="_blank" class="fa fa-facebook "></a>
  <a href="#" class="fa fa-twitter "></a>
  <a href="https://in.linkedin.com/in/joseph-niranjan"target="_blank" class="fa fa-linkedin w3-hover-opacity"></a>
  <a href ="https://github.com/josephniranjan" target="_blank" class="fa fa-github w3-hover-opacity"></a>
  <p>© 69studious.com, Inc. All rights reserved</p>
</footer>
</div>
);
}
}

export default Contact;
