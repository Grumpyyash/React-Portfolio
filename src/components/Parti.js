import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Parti extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fas fa-award"></i> Participations</h3><br />
                      <div className="text-area">
                       <h6>SPIDER: The Web Crawler</h6><hr />
                       <p>Organised by: </p>
                        <div className="row">
                            <div className="col-sm-6 col-lg-6 col-md-6 bit-div">
                              <a href="https://istebits.com/"><img className="git-img" className="bit-img" src={require("./Images/isteLogo (1).png")} alt="iste-bits"/></a>
                              <p>ISTE BIT Sindri</p>
                            </div>
                            <div className="col-sm-6 col-lg-6 col-md-6 bit-div">
                              <a href="https://spider.istebits.com/"><img className="git-img" className="bit-img" src={require("./Images/spider (1).png")} alt="spider-the-web-crawler"/></a>
                            </div>
                        </div>
                      </div>                       
                      </div>
            </div>
        )
    }
}

export default Parti;