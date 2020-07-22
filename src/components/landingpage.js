import React, {Component} from 'react';
                                                                                                                

class LandingPage extends Component{
    render(){
        return(
            <div className="landing-page">
                 <div id="left-landing">
                     <div id="left-landing-s"></div>
                 </div>
                 <div id="right-landing">
                 <div id="right-landing-s"></div>
                 </div>
               <div id="img-landing">
                   <img src="images/me2.png" alt="" style={{ width: '350px', height: '350px' }}></img>
               </div>
            </div>
        )
    }
}
export default LandingPage;