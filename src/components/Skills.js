import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Skills extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fas fa-laptop-code"></i> Skills</h3><br />
                      <p className="text-area-lang">Languages I speak..</p><br />
                      <div className="text-area">
                      <div className="scores">
                      <h5>HTML, CSS(BOOTSTRAP), Material UI</h5>
                       <div class="container">
                        <div class="skills html"></div>
                       </div>
                      </div>

                      <div className="scores">
                       <h5>JAVASCRIPT(JQUERY), EJS</h5>
                       <div class="container">
                        <div class="skills js"></div>
                       </div>  
                       </div>

                       <div className="scores">
                       <h5>REACT JS, Redux</h5>
                       <div class="container">
                        <div class="skills react"></div>
                       </div> 
                       </div>

                       <div className="scores">
                       <h5>NODE JS(EXPRESS)</h5>
                       <div class="container">
                        <div class="skills node"></div>
                       </div> 
                       </div>

                       <div className="scores">
                       <h5>MONGODB(MONGOOSE), MySQL</h5>
                       <div class="container">
                        <div class="skills ejs"></div>
                       </div>
                       </div>

                       <div className="scores">
                       <h5>C & C++</h5>
                       <div class="container">
                        <div class="skills cpp"></div>
                       </div>
                       </div>
                       
                       <div className="scores">
                       <h5>GIT & GITHUB</h5>
                       <div class="container">
                        <div class="skills git"></div>
                       </div>
                       </div>

                       <div className="scores">
                       <h5>PASSPORT AND JWT</h5>
                       <div class="container">
                        <div class="skills jwt"></div>
                       </div>
                       </div>

                       <div className="scores">
                       <h5>React-Native, Firebase</h5>
                       <div class="container">
                        <div class="skills native"></div>
                       </div>
                       </div>


                      <div className="scores">
                      <h5>Gatsby Js, Jekyll</h5>
                       <div class="container">
                        <div class="skills gatsby"></div>
                       </div>
                      </div>
                      </div>                       
                      </div>
        </div>
        )
    }
}

export default Skills;