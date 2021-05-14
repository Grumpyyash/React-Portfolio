import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Work extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fal fa-code-branch"></i> Work Experience</h3><br />
                      <div className="text-area">
                      <h5>Developer</h5>
                       <p className="work-para"><span className="org-name">HackFest'21</span>(May,2020-Current)</p>
                       <h5>Web Developer</h5>
                       <p className="work-para"><span className="org-name">ACM Student Chapter, IIT(ISM) Dhanbad</span>(May,2020-Current)</p>
                       <h5>React Developer Intern</h5>
                       <p className="work-para"><span className="org-name">RYD Enterprises</span>(June,2020-July,2020)</p>
                       <h5>Web Developer Intern</h5>
                       <p className="work-para"><span className="org-name">KoobBox</span>(June,2020-Current)</p>
                      </div>                        
                      </div>
            </div>
        )
    }
}

export default Work;