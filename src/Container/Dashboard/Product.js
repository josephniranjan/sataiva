import React, {components} from 'react';
import ReactDOM from 'react-dom';
import {Tab, Tabs,CardTitle,Card,CardText,CardActions,CardMenu,Button,IconButton} from 'react-mdl'
class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }
    currentTab(){
        if(this.state.activeTab ==0){
    return(
        <div>  
    <Card shadow={0} style={{width: '1024px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '356px', background: 'url(https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/15A6/production/_103724550_ronaldo.jpg) no-repeat center / cover  #46B6AC',backgroundSize:'auto' }}>Football updates</CardTitle>
    <CardText>
        You can get all football updates here through a click
    </CardText>
    <CardActions border>
        <Button colored><a href="http://www.espn.in/football/" target="_blank">football updates</a></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
    </div>

    )
        }
        else if(this.state.activeTab ==1){
            return(
                <div>  
           <Card shadow={0} style={{width: '1024px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '356px', background: 'url(https://www.wisden.com/wp-content/uploads/2018/08/GettyImages-993040716-e1535463352574-980x530.jpg) no-repeat center / cover  #46B6AC',backgroundSize:'auto' }}>cricket updates</CardTitle>
    <CardText>
        You can get all cricket updates here through a click
    </CardText>
    <CardActions border>
        <Button colored><a href="https://www.cricbuzz.com/cricket-match/live-scores"  target="_blank">cricket updates</a></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
        </div>)
        }
        else if(this.state.activeTab ==2){
            return(
                <div>  
           <Card shadow={0} style={{width: '1024px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '356px', background: 'url(https://lh5.googleusercontent.com/-a_k2d7g0xIU/UX_pVQmkoNI/AAAAAAAAHFo/QtxiwnnQPl0/s851/thala-ajith-birthday-wallpaper-fb-cover.jpg) no-repeat center / cover  #46B6AC',backgroundSize:'auto' }}>Film</CardTitle>
    <CardText>
        You can get all film updates here through a click
    </CardText>
    <CardActions border>
        <Button colored><a href="https://www.behindwoods.com"  target="_blank">film updates</a></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
        </div>)
        }
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Football</Tab>
                    <Tab>Cricket</Tab>
                    <Tab>Films</Tab>
                </Tabs>
                <section>
                    <div className="content">{this.currentTab()}</div>
                </section>
            </div>    
        );
    }
}
export default Product;