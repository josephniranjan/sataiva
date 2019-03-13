import React, {components} from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import {firebaseApp} from '../../firebase';
import {Grid,Cell,CardTitle,Card,CardText,CardActions,CardMenu,Button,IconButton} from 'react-mdl'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

class Home extends React.Component{
    constructor(props){
      super(props); 
    }

    render(){
        return(
      <div>
     <div style={{backgroundColor: '#e8eef4'}}>
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
       welcome {this.props.email}
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
      <div style={{width: '80%', margin: 'auto'}}>
      <Grid className="demo-grid-1" style={{backgroundColor: 'pink',marginTop:100}}>
        <Cell col={4}>welcome to our new home page this is all about different components</Cell>
        <Cell col={4}> How such documents are actually stored depends on the file format. 
        hey  page this is all about</Cell>
        <Cell col={4}> page this is all about  page this is all about</Cell>
    </Grid>
    </div>
    
    </div>
        );
    }
}
export default Home;
