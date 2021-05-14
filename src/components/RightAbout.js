import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import Work from "./Work";
import Skills from "./Skills";
import Education from "./Education";
import Courses from "./Courses";
import Achievement from "./Achievement";
import Apps from "./Apps";
import Parti from "./Parti";
import Github from "./Github";
import Code from "./Code";
import OpenSource from "./OpenSource";
import { Button } from 'react-bootstrap';

class RightAbout extends React.Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
      }
    render() {
        return (
            <div className="col-lg-4">
                  
                 <div className="row wow bounceIn">
                      <div className="col-lg-12">
                        <div className="col-lg-10 work-exp">
                        <div className="address">
                            <p><i class="fas add-icons fa-map-marker-alt"></i> IIT(ISM) Dhanbad, India</p>
                            <p className="email"><i class="far add-icons fa-envelope"></i> <a className="anchor-text" href="mailto:yash.19je0936@mech.iitism.ac.in">yash.19je0936@mech.iitism.ac.in</a></p>
                            <p className="email"><i class="fas add-icons fa-phone-alt"></i> <a className="anchor-text" href="tel:9065676023">+91-9065676023</a></p>
                      </div>
                        </div>  
                      </div>
                  </div>
                  
                                    
                  <div className="row wow bounceIn">
                     <Work /> 
                  </div>
                  
                  <div className="row wow bounceIn">
                      <Skills />
                  </div>
                  

                  <div className="row wow bounceIn">
                      <Education />
                  </div>
                 
                  <div className="row wow bounceIn">
                      <Courses />
                  </div>
                  
                  <div className="row wow bounceIn">
                      <Achievement />
                  </div>

                  <div className="row wow bounceIn">
                      <OpenSource />
                  </div>
                  
                  <div className="row wow bounceIn">
                      <Github />
                  </div>
                 
                  <div className="row coding-platform wow bounceIn">
                      <Code />
                  </div>
                  
                  <div className="row coding-platform wow bounceIn">
                      <Apps />
                  </div>
                  
                  <div className="row wow bounceIn">
                      <Parti />
                  </div>
                 </div>
        )
    }
}

export default RightAbout;