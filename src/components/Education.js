import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Education extends React.Component {
    render() {
        return (
                     <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="far fa-university"></i> Education</h3><br />
                      <div className="text-area">
                       <h5><i class="fas fa-graduation-cap"></i>Maths and Computing(DD)</h5>
                       <p>Indian Institute of Technology Dhanbad (2019-24)</p>
                       <h5><i class="fas fa-graduation-cap"></i> Seconadary and Higher Secondary</h5>
                       <p>Delhi Public School Gaya (2013-19)</p>                       
                      </div>                        
                      </div>
                      </div>
        )
    }
}

export default Education;