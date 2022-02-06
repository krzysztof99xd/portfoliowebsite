import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import emailjs from "@emailjs/browser"

export default function Footer() {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('gmailPortfolio', 'template_zy0hyid', e.target, 'user_wY6mhFmhHnfyUFpYVBSxA')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
        e.target.reset()
    }
    return (
        <div className="footer-container">
            <div className="before-form-description">
                    <em>Please use the form below to contact me</em>
            </div>
            <div className='form-container'>
                    <form className = "form-portfolio" onSubmit={sendEmail}>
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder='Name' name="name"/>
                        </div>
                        <div className="col-8">
                            <input type="email" className="form-control" placeholder='Email Address' name="email"/>
                        </div>
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder='Subject' name="subject"/>
                        </div>
                        <div className="col-8">
                            <textarea  className="form-control" cols="30" rows="5" placeholder='Your Message' name="message"/>
                        </div>
                        <div className="col-8">
                            <input type="submit" className="submit-button" value="Send Message"/>
                        </div>
                    </form>
            </div>
                <div className="footer-link-wrapper">
                    <div className="footer-rights">
                        <div className='footer-rights-description'>
                        2022 Krzysztof Wiesniakowski, All rights Reserved ©
                        </div>
                    {/* <Link
                    class='social-icon-link instagram'
                    to='https://www.instagram.com/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i class='fab fa-instagram' />
                    </Link> */}
                    </div>
                    <div className="footer-linkedin">
                    <Link
                    class='icon-description'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                           
                    <i class='fab fa-linkedin' />
                    </Link>
                    </div>
                </div>
        </div>
    )
}
