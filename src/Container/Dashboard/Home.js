import React, {components} from 'react';
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
      <h2 style={{color: '#ff9532'}}>  {this.props.email} </h2>
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
      <Grid className="demo-grid-1" style={{backgroundColor: 'grey',marginTop: 100 ,color:'white'}}>
        <Cell col={4}>welcome to our new home page this is all about rendering different components</Cell>
        <Cell col={4}> How such documents are actually stored depends on the file format. </Cell>
        <Cell col={4}>The data is new oil. And major of the data is going to be unstructured</Cell>
    </Grid>
    </div>
    
    </div>
        );
    }
}
export default Home;
