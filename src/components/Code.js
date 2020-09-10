import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Code extends React.Component {
    render() {
        return (
            <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="far fa-code"></i> Coding Platforms</h3><br />
                      <div className="text-area">
                       <p ><a href="https://www.hackerrank.com/Yash_dn" className="code-links">Hackerrank <i class="fas code-user-hack fa-external-link-alt"></i></a>@Yash_dn</p>
                       <p ><a href="https://www.codechef.com/users/grumpyyash" className="code-links">CodeChef <i class="fas code-user-chef fa-external-link-alt"></i></a>@grumpyyash</p>
                       <p ><a href="https://codeforces.com/profile/Yash_dn" className="code-links">CodeForces <i class="fas code-user-force fa-external-link-alt"></i></a>@Yash_dn</p>
                      </div>                       
                      </div>
            </div>
        )
    }
} 

export default Code;