import React, {components} from 'react';


class About extends React.Component{
    render(){
    return(
<div class="w3-content w3-margin-top" style={{maxWidth:"1400px"}}>
<div class="w3-row-padding">
  
  <div class="w3-third">

    <div class="w3-white w3-text-grey w3-card-4">
      <div class="w3-display-container">
        <img src="https://scontent.fmaa3-1.fna.fbcdn.net/v/t1.0-9/8386_936529153068858_3445227733814209784_n.jpg?_nc_cat=101&_nc_ht=scontent.fmaa3-1.fna&oh=9b16e3c260176e8210f90df8047a8e32&oe=5D17E9B5" style={{width:'100%'}} alt="NJ"/>
        <div class="w3-display-bottomleft w3-container w3-text-black">
          <h2>Joseph Niranjan</h2>
        </div>
      </div>

      <div class="w3-container">
        <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>MERN stack developer</p>
        <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Chennai,India</p>
        <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>josephniranjna07@mail.com</p>
        <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+91 9629674492</p>
        <hr/>

        <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
        <p>Adobe Photoshop</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
          <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'70%'}}>70%</div>
        </div>
        <p>Photography</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
          <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'75%'}}>
            <div class="w3-center w3-text-white">75%</div>
          </div>
        </div>
        <p>Java</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
          <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'75%'}}>75%</div>
        </div>
        <p>Javascript</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
          <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'75%'}}>75%</div>
        </div>
        <br/>

        <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
        <p>Tamil</p>
        <div class="w3-light-grey w3-round-xlarge">
          <div class="w3-round-xlarge w3-teal" style={{height:'24px',width:'100px'}}></div>
        </div>
        <p>English</p>
        <div class="w3-light-grey w3-round-xlarge">
          <div class="w3-round-xlarge w3-teal" style={{height:'24px',width:'55px'}}></div>
        </div>
        <p>Hindi</p>
        <div class="w3-light-grey w3-round-xlarge">
          <div class="w3-round-xlarge w3-teal" style={{height:'24px',width:'25px'}}></div>
        </div>
          <br/>
        </div>
      </div><br/>
     </div>
     

      <div class="w3-twothird">
    
    <div class="w3-container w3-card w3-white w3-margin-bottom">
      <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Technologies Explored</h2>
      <div class="w3-container">
        <h5 class="w3-opacity"><b>MERN stack developer</b></h5>
        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i> 2019 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
        <p>Have some Hands on experience  in working working React,Vue,Node js and also have an outline idea with Mongo DB. Have much more desre to explore these kind of Technologies.  </p>
        <hr/>
      </div>
      <div class="w3-container">
        <h5 class="w3-opacity"><b>Internet of Things</b></h5>
        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>May 2017 - June 2018</h6>
        <p>Developed an IoT based application to Detect the leakage in the Seweage pipes at the earliest. This application helps to detect and locate the leakage in the undergoing seweage pipes. </p><br/>
      </div>
    </div>

    <div class="w3-container w3-card w3-white">
      <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>

      <div class="w3-container">
        <h5 class="w3-opacity"><b>SSN College of Engineering</b></h5>
        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2016 - 2018</h6>
        <p>Master of Engineering</p>
        <hr/>
      </div>
      <div class="w3-container">
        <h5 class="w3-opacity"><b>Karunya Institute of Technology and Sciences</b></h5>
        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2012 - 2016</h6>
        <p>Bachelor of Engineering</p><br/>
      </div>

    </div>

    </div> <br/>
    </div>

    </div>

 
    );
}
}
export default About;
