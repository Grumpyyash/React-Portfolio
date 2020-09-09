import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import { Button } from 'react-bootstrap';

class MainContent extends React.Component {
    render() {
        return (
            <div className="main-content-div">
             <div className="row">
                 <div className="col-lg-8">

                 
                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">About Me</h3><br />
                      <div className="text-area">
                      <p>Hi There! <br />
                           Myself Yash Vardhan , a second year undergrad at IIT(ISM)
                            Dhanbad with Mathematics and Computing as majors. I am a tech enthusiast
                             who likes to be updated with the newer technologies.
                              I like to keep it simple and enjoy the challenges encountered along the way.
                               My interest lies primarily in the field of Web Development,
                                both front and back-end while dealing with databases and MERN stack. 
                                I am also deeply interested in Computer Programming.
                           Apart from these I love Cricket and enjoy deep discussions over it.</p>
                      </div>
                        
                      </div>
                      </div>

                  </div>
                  

                  
                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">Latest Project</h3><br />
                      <MDBAnimation reveal type="zoomIn">
                      <div className="text-area">
                        <div className="text-area-image col-lg-12">
                        <a href="https://acm-iit-dhanbad.netlify.app/"><img className="acm-project" src={require("./Images/acm-port.png")} alt="ACM-pic"/></a><br /><br />
                        <h5>ACM-IIT(ISM) Dhanbad official Website</h5><br />
                        <Button href="https://github.com/Hirdeshgupta/Website-of-ACM-In-IIT-ISM-DHANBAD" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://acm-iit-dhanbad.netlify.app/" className="button-1"  variant="success">Live Site</Button>{' '}
                        </div>
                        <p>IIT(ISM) Dhanbad ACM chapter official Website developed by the students of IIT(ISM) Dhanbad <br /><br/>
                        Technologies used: ReactJS, React-Bootstrap, MDBootstrap, Firebase.
                        </p>

                      </div>
                      </MDBAnimation>
                        
                      </div>
                      </div>

                  </div>
                  

                  
                  <div className="row ">
                      <div className=" col-lg-12">
                      
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">MERN-Project</h3>
                      <MDBAnimation reveal type="zoomIn">
                      <div className="text-area">
                      
                        <div className="text-area-image col-lg-12">
                        <a href="https://shielded-caverns-83501.herokuapp.com/"><img className="acm-project" src={require("./Images/Admit-it.png")} alt="ACM-pic"/></a><br /><br />
                        <h5>Admit-it: a Confession Site</h5><br />
                        <Button href="https://github.com/Grumpyyash/Admit-IT" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://shielded-caverns-83501.herokuapp.com/" className="button-1"  variant="success">Live Site</Button>{' '}
                        </div>
                        <p>A collaborative website developed for the community of people to share something out of their hearts out which they
                        won't have been able to say otherwise.<br /><br />
                        Technologies used: HTML, CSS(Bootstrap), EJS, NODE JS, EXPRESS, MONGODB, MATERIAL-UI
                        </p>

                      </div>
                      </MDBAnimation>
                        
                      </div>
                      
                      </div>

                  </div>
                  

                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">MERN-Project</h3><br />
                      <MDBAnimation reveal type="zoomIn">
                      <div className="text-area">
                        <div className="text-area-image col-lg-12">
                        <a href="https://sleepy-retreat-60004.herokuapp.com/"><img className="acm-project" src={require("./Images/Re-engine.png")} alt="ACM-pic"/></a><br /><br />
                        <h5>Re-Engine IT</h5><br />
                        <Button href="https://github.com/Grumpyyash/ReEngine-IT-MERN" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://sleepy-retreat-60004.herokuapp.com/" className="button-1"  variant="success">Live Site</Button>{' '}
                        </div>
                        <p>A simple prototype of Reselling application to enable consumers and sellers to provide with an interactive interface.<br /><br />
                        Technologies used: React JS, MongoDB, Reactstrap, Node(Express), MDBootstrap
                        </p>

                      </div>
                      </MDBAnimation>
                        
                      </div>
                      </div>

                  </div>

                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">Project</h3>
                      <span className="org-name">*PC-recommended</span><br /><br />
                      <MDBAnimation reveal type="zoomIn">
                      <div className="text-area">
                        <div className="text-area-image col-lg-12">
                        <a href="https://grumpyyash.github.io/My-music-player/#"><img className="acm-project" src={require("./Images/music-port.png")} alt="ACM-pic"/></a><br /><br />
                        <h5>Musically Website</h5><br />
                        <Button href="https://github.com/Grumpyyash/My-music-player" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://grumpyyash.github.io/My-music-player/#" className="button-1"  variant="success">Live Site</Button>{' '}
                        </div>
                        <p>A plain music website with great UI and basic functionalities of play, pause, next, prev, repeat, shuffle, favourite and much more.<br /><br />
                        Technologies used: HTML, CSS(Bootstrap), JAVASCRIPT(JQUERY)
                        </p>

                      </div>
                      </MDBAnimation>
                        
                      </div>
                      </div>

                  </div>

                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="about-me col-lg-10">
                      <h3 className="text-area-h3">Project</h3>
                      <MDBAnimation reveal type="zoomIn">
                      <div className="text-area">
                        <div className="text-area-image col-lg-12">
                        <a href="https://lmcp4.csb.app/"><img className="acm-project" src={require("./Images/keeper.png")} alt="ACM-pic"/></a><br /><br />
                        <h5>Musically Website</h5><br />
                        <Button href="https://github.com/Grumpyyash/Keeper-React" className="button-1"  variant="success">More <i class="fas fa-external-link-alt"></i></Button>{' '}
                        <Button href="https://lmcp4.csb.app/" className="button-1"  variant="success">Live Site</Button>{' '}
                        </div>
                        <p>A plain simple keeper app capable of holding notes and much more.<br /><br />
                        Technologies used: React JS
                        </p>

                      </div>
                      </MDBAnimation>
                        
                      </div>
                      </div>

                  </div>

                 
                  <Button href="https://github.com/Grumpyyash" className="button-2 left-button"  variant="success"> <i class="fas fa-external-link-alt"></i> More on Github</Button>{' '}
                  </div>

                  



                 <div className="col-lg-4">
                 <MDBAnimation reveal type="zoomIn">
                 <div className="row ">
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
                  </MDBAnimation>


                  <MDBAnimation reveal type="zoomIn">
                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fal fa-code-branch"></i> Work Experience</h3><br />
                      <div className="text-area">
                       <h5>Web Developer</h5>
                       <p className="work-para"><span className="org-name">ACM Student Chapter, IIT(ISM)</span>(May,2020-Current)</p>
                       <h5>React Developer Intern</h5>
                       <p className="work-para"><span className="org-name">RYD Enterprises</span>(June,2020-July,2020)</p>
                       <h5>Web Developer Intern</h5>
                       <p className="work-para"><span className="org-name">KoobBox</span>(June,2020-Current)</p>
                       <h5>Tech Team Member</h5>
                       <p className="work-para"><span className="org-name">E-Cell, IIT(ISM) Dhanbad</span>(March,2020-Current)</p>
                      </div>
                        
                      </div>
                      </div>

                  </div>
                  </MDBAnimation>
                  <MDBAnimation reveal type="zoomIn">
                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fas fa-laptop-code"></i> Skills</h3><br />
                      <p className="text-area-lang">Languages I speak..</p><br />
                      <div className="text-area">
                      <div className="scores">
                      <h5>HTML, CSS(BOOTSTRAP)</h5>
                       <div class="container">
                        <div class="skills html"></div>
                       </div>
                      </div>

                      <div className="scores">
                       <h5>JAVASCRIPT(JQUERY)</h5>
                       <div class="container">
                        <div class="skills js"></div>
                       </div>  
                       </div>

                       <div className="scores">
                       <h5>REACT JS</h5>
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
                       <h5>EJS, MONGODB(MONGOOSE)</h5>
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
                      <h5>NEXT JS, CHAKRA-UI</h5>
                       <div class="container">
                        <div class="skills chakra"></div>
                       </div>
                      </div>

                      <div className="scores">
                      <h5>MATERIAL-UI, MDBOOTSTRAP</h5>
                       <div class="container">
                        <div class="skills mdbootstrap"></div>
                       </div>
                      </div>

                      </div>
                        
                      </div>
                      </div>

                  </div>
                  </MDBAnimation>

                  <MDBAnimation reveal type="zoomIn">

                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="far fa-university"></i> Education</h3><br />
                      <div className="text-area">
                       <h5><i class="fas fa-graduation-cap"></i>INT. M.TECH in MATHS AND COMPUTING</h5>
                       <p>Indian Institute of Technology Dhanbad (2019-24)</p>
                       <h5><i class="fas fa-graduation-cap"></i> Seconadary and Higher Secondary</h5>
                       <p>Delhi Public School Gaya (2013-19)</p>
                       
                      </div>
                        
                      </div>
                      </div>

                  </div>
                  </MDBAnimation>

                  <MDBAnimation reveal type="zoomIn">
                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="far fa-cog"></i> Courses Undertaken</h3><br />
                      <div className="text-area">
                       <h5>Web Development Bootcamp</h5>
                       <p>UDEMY (-Angela Yu)</p>
                       <h5>Front-end Development with React</h5>
                       <p>Coursera (- J Muppala)</p>
                       <h5>C++ for Everybody</h5>
                       <p>Coursera (- Dr. Chuck)</p>
                       
                      </div>
                        
                      </div>
                      </div>

                  </div>
                  </MDBAnimation>

                  <MDBAnimation reveal type="zoomIn">
                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fas fa-award"></i> Achievements</h3><br />
                      <div className="text-area">
                       <h5>JEE ADVANCED 2019</h5>
                       <p>CRL: 3299</p>
                       <h5>JEE MAINS 2019</h5>
                       <p>CRL: 5433</p>
                       <h5>Higher Secondary Board Examination 2019</h5>
                       <p>96.2%</p>
                      </div>
                        
                      </div>
                      </div>

                  </div>
                  </MDBAnimation>

                  <MDBAnimation reveal type="zoomIn">
                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fab fa-github-alt"></i> Github Profile</h3><br />
                      <div className="text-area">
                       <div className="right-image-div">
                       <a href="https://github.com/Grumpyyash"><img className="git-img" src={require("./Images/git-port.png")} alt="Git-profile"/></a><br /> 
                       </div>
                       <p>Summary of commits and pull request by <a className="code-links" href="https://github.com/Grumpyyash">@Grumpyyash</a></p>
                      </div>
                        
                      </div>
                      </div>

                  </div>
                  </MDBAnimation>

                  <MDBAnimation reveal type="zoomIn">
                  <div className="row coding-platform">
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

                  </div>
                  </MDBAnimation>

                  <MDBAnimation reveal type="zoomIn">
                  <div className="row coding-platform">
                      <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="far fa-browser"></i> More Apps</h3><br />
                      <div className="text-area">
                       <p ><a href="https://lmcp4.csb.app/" className="code-links">Keeper-App React <i class="fas  fa-external-link-alt"></i></a></p>
                       <p ><a href="https://grumpyyash.github.io/simon-game/" className="code-links">Simon-game JAVASCRIPT <i class="fas  fa-external-link-alt"></i></a></p>
                       <p ><a href="https://blooming-reaches-65515.herokuapp.com/" className="code-links">To-Do List App <i class="fas  fa-external-link-alt"></i></a></p>
                       <p ><a href="https://grumpyyash.github.io/drum-kit/" className="code-links">DRUM-KIT App <i class="fas  fa-external-link-alt"></i></a></p>
                       <p ><a href="https://rocky-eyrie-08271.herokuapp.com/" className="code-links">Stack-Alert <i class="fas  fa-external-link-alt"></i></a></p>
                      </div>
                        
                      </div>
                      </div>

                  </div>
                  </MDBAnimation>

                  <MDBAnimation reveal type="zoomIn">
                  <div className="row ">
                      <div className=" col-lg-12">
                      <div className="col-lg-10 work-exp">
                      <h3 className="text-area-h3"><i class="fas fa-award"></i> Participations</h3><br />
                      <div className="text-area">
                       <h6>The Web Crawler</h6><hr />
                       <p>Organised by: </p>
                        <div className="row">
                            <div className="col-sm-6 bit-div">
                              <a href="https://istebits.com/"><img className="git-img" className="bit-img" src={require("./Images/isteLogo (1).png")} alt="Git-profile"/></a>
                            </div>
                            <div className="col-sm-6 bit-div">
                              <a href="https://spider.istebits.com/"><img className="git-img" className="bit-img" src={require("./Images/spider (1).png")} alt="Git-profile"/></a>
                            </div>
                        </div>
                      </div>
                        
                      </div>
                      </div>

                  </div>
                  </MDBAnimation>

                 </div>
             </div>
             <div className="row">
                 <div className="col-lg-12 footer">
                     <p className="footer-p">Bored of all the technical stuffs, I'm too :( Let's play a <a className="code-links" href="https://grumpyyash.github.io/simon-game/">game</a>, or <a className="code-links" href="https://grumpyyash.github.io/My-music-player/#">music</a> or a <a className="code-links" href="https://grumpyyash.github.io/drum-kit/">band</a> :)</p>
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