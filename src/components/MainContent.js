import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftProject from "./LeftProject";
import RightAbout from "./RightAbout";
import {MDBAnimation } from "mdbreact";
import { Button } from 'react-bootstrap';

class MainContent extends React.Component {
    render() {
        return (
            <div className="main-content-div">
             <div className="row">
                <LeftProject /> 
                 <RightAbout />                
             </div>
             <div className="row">
                 <div className="col-lg-12 footer-game">
                     <p className="footer-p">Bored of all the technical stuffs, Let's play a <a className="code-links" href="https://grumpyyash.github.io/simon-game/">game</a> or <a className="code-links" href="https://grumpyyash.github.io/My-music-player/#">music</a> or a <a className="code-links" href="https://grumpyyash.github.io/drum-kit/">band</a></p>
                 </div>
             </div>
             <div className="row">
                 <div className="col-lg-12 footer">
                     <p className="footer-p">Copyright © 2020 Yash Vardhan @ Spider-The Web Crawler</p>
                 </div>
             </div>
            </div>
        )
    }
}

export default MainContent;