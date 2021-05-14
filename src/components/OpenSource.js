import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class OpenSource extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fab fa-osi"></i> Open-Source</h3><br />
                      <div className="text-area">
                       <p ><a href="https://github.com/layer5io/layer5" className="code-links">Layer5/Layer5.io <i class="fas  fa-external-link-alt"></i></a></p>
                       <p ><a href="https://github.com/layer5io/getnighthawk" className="code-links">Layer5/GetNighthawk <i class="fas  fa-external-link-alt"></i></a></p>
                       <p ><a href="https://github.com/scorelab/Webiu" className="code-links">ScoreLab/Webiu <i class="fas  fa-external-link-alt"></i></a></p>
                       <p ><a href="https://github.com/codeforcauseorg/edu-client" className="code-links">CodeForCause <i class="fas  fa-external-link-alt"></i></a></p>
                      </div>                       
                      </div>
            </div>
        )
    }
}

export default OpenSource;