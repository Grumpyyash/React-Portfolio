import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class Projects extends React.Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
    render() {
        return (
            <div>

                  <div className="row wow bounceIn">
                      <div className=" col-lg-12">
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">ANNADATA</h3><br />                      
                      <div className="text-area">
                        <div className="text-area-image col-lg-12">
                        <a href="https://github.com/orgs/AnnadataHackfest/dashboard"><img className="acm-project" src={require("./Images/crop.png")} alt="annadata"/></a><br /><br />
                        <h5>ANNADATA</h5><br />
                        <Button href="https://github.com/orgs/AnnadataHackfest/dashboard" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://github.com/orgs/AnnadataHackfest/dashboard" className="button-1"  variant="success">Live Project</Button>{' '}
                        </div>
                        <p>A complete cross-platform application for full assistance to farmers right from sowing till harvesting<br /><br />
                        Technologies used: MERN (React Js, Redux, MongoDB, Node Js), Python, Falsk, PyTorch
                        </p>
                      </div>                        
                      </div>
                      </div>
                  </div>

                  <div className="row wow bounceIn">
                      <div className=" col-lg-12">
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">RN Social App</h3><br />                      
                      <div className="text-area">
                        <div className="text-area-image col-lg-12">
                        <a href="https://github.com/Grumpyyash/Native-SocialApp"><img className="acm-project-native" src={require("./Images/native.png")} alt="socialApp"/></a><br /><br />
                        <h5>RN SocialApp</h5><br />
                        <Button href="https://github.com/Grumpyyash/Native-SocialApp" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://github.com/Grumpyyash/Native-SocialApp" className="button-1"  variant="success">Live Project</Button>{' '}
                        </div>
                        <p>A progressive socialApp with Chat support, profile updates and add posts features built for both android and ios<br /><br />
                        Technologies used: React-Native, Firebase
                        </p>
                      </div>                        
                      </div>
                      </div>
                  </div>



            <div className="row wow bounceIn">
                      <div className=" col-lg-12">
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">ACM Student Chapter</h3><br />                     
                      <div className="text-area">
                        <div className="text-area-image col-lg-12">
                        <a href="https://acm-iit-dhanbad.netlify.app/"><img className="acm-project" src={require("./Images/acm-port.png")} alt="acm-iit-dhanabd"/></a><br /><br />
                        <h5>ACM-IIT(ISM) Dhanbad official Website</h5><br />
                        <Button href="https://github.com/Hirdeshgupta/Website-of-ACM-In-IIT-ISM-DHANBAD" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://acm-iit-dhanbad.netlify.app/" className="button-1"  variant="success">Live Site</Button>{' '}
                        </div>
                        <p>IIT(ISM) Dhanbad ACM chapter official Website developed by the students of IIT(ISM) Dhanbad <br /><br/>
                        Technologies used: ReactJS, React-Bootstrap, MDBootstrap, Firebase.
                        </p>
                      </div>                      
                      </div>
                      </div>
                  </div>

                  <div className="row wow bounceIn">
                      <div className=" col-lg-12">                     
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">MediFast</h3>                      
                      <div className="text-area">                      
                        <div className="text-area-image col-lg-12">
                        <a href="https://github.com/Grumpyyash/MediFast"><img className="acm-project" src={require("./Images/medifast-img.png")} alt="Medifast"/></a><br /><br />
                        <h5>Medifast: A Healthcare Application</h5><br />
                        <Button href="https://github.com/Grumpyyash/MediFast" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://github.com/Grumpyyash/MediFast" className="button-1"  variant="success">Live Site</Button>{' '}
                        </div>
                        <p>A collaborative website developed while working in a team for a hackathon
                         which provides complete medical assistance to people.<br /><br />
                        Technologies used: HTML, CSS(Bootstrap), EJS, NODE JS, EXPRESS, MONGODB, PASSPORT JS, JWT
                        </p>
                      </div>                        
                      </div>                      
                      </div>
                  </div>
                                    
                  <div className="row wow bounceIn">
                      <div className=" col-lg-12">                     
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">Admit-IT</h3>                      
                      <div className="text-area">                      
                        <div className="text-area-image col-lg-12">
                        <a href="https://shielded-caverns-83501.herokuapp.com/"><img className="acm-project" src={require("./Images/Admit-it.png")} alt="admit-it"/></a><br /><br />
                        <h5>Admit-it: a Confession Site</h5><br />
                        <Button href="https://github.com/Grumpyyash/Admit-IT" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://shielded-caverns-83501.herokuapp.com/" className="button-1"  variant="success">Live Site</Button>{' '}
                        </div>
                        <p>A collaborative website developed for the community of people to share something out of their hearts out which they
                        won't have been able to say otherwise.<br /><br />
                        Technologies used: HTML, CSS(Bootstrap), EJS, NODE JS, EXPRESS, MONGODB, MATERIAL-UI
                        </p>
                      </div>                        
                      </div>                      
                      </div>
                  </div>
                  
                  <div className="row wow bounceIn">
                      <div className=" col-lg-12">
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">ReEngine-IT</h3><br />                      
                      <div className="text-area">
                        <div className="text-area-image col-lg-12">
                        <a href="https://sleepy-retreat-60004.herokuapp.com/"><img className="acm-project" src={require("./Images/Re-engine.png")} alt="reengine-it"/></a><br /><br />
                        <h5>Re-Engine IT</h5><br />
                        <Button href="https://github.com/Grumpyyash/ReEngine-IT-MERN" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://sleepy-retreat-60004.herokuapp.com/" className="button-1"  variant="success">Live Site</Button>{' '}
                        </div>
                        <p>A simple prototype of Reselling application to enable consumers and sellers to provide with an interactive interface.<br /><br />
                        Technologies used: React JS, MongoDB, Reactstrap, Node(Express), MDBootstrap
                        </p>
                      </div>                        
                      </div>
                      </div>
                  </div>

                  {/* <div className="row wow bounceIn">
                      <div className=" col-lg-12">
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">Project</h3>
                      <span className="org-name">*PC-recommended</span><br /><br />                      
                      <div className="text-area">
                        <div className="text-area-image col-lg-12">
                        <a href="https://grumpyyash.github.io/My-music-player/#"><img className="acm-project" src={require("./Images/music-port.png")} alt="google-music-player"/></a><br /><br />
                        <h5>Musically Website</h5><br />
                        <Button href="https://github.com/Grumpyyash/My-music-player" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://grumpyyash.github.io/My-music-player/#" className="button-1"  variant="success">Live Site</Button>{' '}
                        </div>
                        <p>A plain music website with great UI and basic functionalities of play, pause, next, prev, repeat, shuffle, favourite and much more.<br /><br />
                        Technologies used: HTML, CSS(Bootstrap), JAVASCRIPT(JQUERY)
                        </p>
                      </div>                       
                      </div>
                      </div>
                  </div> */}

                  
                  </div>
        )
    }
}
export default Projects;