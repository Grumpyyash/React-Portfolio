import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class About extends React.Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
    render() {
        return (
            <div className=" col-lg-12">
            <div className="about-me col-lg-10">
            <h3 className="text-area-h3">About Me</h3><br />
            <div className="text-area">
                <p>Hi There! <br />
                 I am Yash Vardhan, a second year undergraduate at IIT(ISM)
                 Dhanbad with Mathematics and Computing as majors.
                 My interest lies primarily in the field of Full-Stack Development,
                 preferably MERN stack. 
                 I am also interested in Competitive Programming. Recently, I have been putting my hands
                 over App Development with React-Native.
                 Apart from these I love playing Cricket and Chess</p>
            </div>                        
            </div>
            </div>
        )
    }
}

export default About;