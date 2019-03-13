import React from 'react';
import ReactDOM from 'react-dom';
import {Link, withRouter} from 'react-router-dom';
import {Drawer, Header,Navigation,Content, Layout,Footer,FooterSection,FooterLinkList} from 'react-mdl';
import DboardRoutes from './DboardRoutes';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import {firebaseApp} from '../../firebase';
import { createBrowserHistory } from 'history';
import About from './About';
const history = createBrowserHistory();



class Dashboard extends React.Component{
  constructor(props){
    super(props); 
    this.state ={
        mail : '',
        currentView: 'Home'
      }
  }

    signout(){
        firebaseApp.auth().signOut() .then((response) => {
            this.props.history.push('/');
          })
          .catch(function(error) {
            // An error happened.
          });
    }

    changeComponent(comp) {
      console.log(comp)
      switch(comp) {
        case 'About':
          return <About />;
          case 'Contact':
          return <Contact  />;
          case 'Product':
          return <Product />;
        default:
          return <Home {...this.props} />;
      }
      }

      changeCurrentView(tab){
       this.setState(()=>({
         currentView : tab
       }))
      }
    
    
    render(){  
      console.log("email   :"+this.props.email);   
     return(
        <div>     
         <DboardRoutes> </DboardRoutes>
        <div className="demo-big-content">
        <Layout >
            <Header title="Title" scroll  style ={{backgroundColor : 'rgb(236, 0, 120)'}}>
                <Navigation>
                    <div onClick={()=>this.changeCurrentView('Home')}>Home</div>
                    <div onClick={()=>this.changeCurrentView('About')}>About</div>
                    <div onClick={()=>this.changeCurrentView('Product')}>product</div>
                    <div onClick={()=>this.changeCurrentView('Contact')}>contact us</div>    
                </Navigation>
                <button type="button" onClick={()=>this.signout()}>sign out</button>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <div onClick={()=>this.changeCurrentView('Home')}>Home</div>
                    <div onClick={()=>this.changeCurrentView('About')}>About</div>
                    <div onClick={()=>this.changeCurrentView('Product')}>product</div>
                    <div onClick={()=>this.changeCurrentView('Contact')}>contact us</div>  
                </Navigation>
            </Drawer>
            {/* <h1>hello {this.state.mail}</h1> */}
            <Content>
                <div className="page-content" > {this.changeComponent(this.state.currentView)} </div>
            </Content>
        </Layout>
   
    </div>
    </div>


);

    }   
 }


 export default withRouter(Dashboard);