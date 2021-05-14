import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends React.Component {
    render(){
        return (
           <div className="contact-form wow bounceIn">
           <h5 className="">CONTACT ME</h5>
             <form className="contact-form" action="https://formspree.io/f/mwkalbvw" method="post">
               
                 <input className="input-name" type="text" placeholder="Your Name" name="name" required/><br />
               
               
                 <input className="input-email" type="email" placeholder="Your Email" name="email" required/><br />
               
               
                 <textarea className="input-message" type="text" name="message" placeholder="Your Message" required /><br />
                          
               <button type="submit" class="btn btn-outline-success submit-button">MESSAGE ME <i class="fab fa-telegram-plane"></i></button>
            </form>
           </div>
        );
    }
}

export default Contact;