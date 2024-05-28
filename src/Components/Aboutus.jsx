import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import '../CSS/About.css'
const Aboutus = () => {
    return (
        <div>
            <div className="app">
                <header className="header">
                    <img src="../../public/assest/logo.png" alt="WorkNab Logo" className="logo" />
                </header>
                <div className="banner">
                    <div className="container">
                        <div className="header">
                            <img src="../../public/assest/home.png" alt="Header" className="header-img" />
                        </div>
                        <div className="circle">
                            <p>GLAZIERS ON DEMAND</p>
                        </div>
                        <nav className="navbar">
                            <ul>
                                <li><a href="/aboutus">About Agent |</a></li>
                                <li><a href="/feature">Featured Projects |</a></li>
                                <li><a href="/availablejobs">Available Jobs |</a></li>
                                <li><a href="/wherewework">Where we Work |</a></li>
                                <li><a href="#">Store |</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="profile">
                    <div class="profile-content">
                        <img src='../../public/assest/profile.png' />
                        <div class="profile-text">
                            <h3>ABOUT AGENT</h3>
                            <h4>Hello,<span>Yennefer !</span> </h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Sit neque diam nibh in eros et facilisis
                                commodo. Quam aliquet enim tristique praesent amet. Rhoncus pulvinar
                                cras gravida varius quis nunc senectus rhoncus tortor.
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div class='form-container'>
                    <div class='form-group'>
                        <label>First Name:</label>
                        <input type='text' placeholder='Yennefer' />
                    </div><br />
                    <div class='form-group'>
                        <label>Last Name:</label>
                        <input type='text' placeholder='Yennefer' />
                    </div><br />
                    <div class='form-group'>
                        <label>Location:</label>
                        <input type='text' placeholder='New Yoke' />
                    </div><br />
                    <div class='form-group'>
                        <label>Phone no:</label>
                        <input type='text' placeholder='+1***************' />
                    </div><br />
                </div>
                <div className='logo11'>
                    <img src='../../public/assest/logo.png' />
                    <p>Never Accept Boundaries</p>
                </div>
                <footer className="footer">
                    <div className='footer-text'>
                        <p>Follow Our Social Media</p>
                        <div className="social-links">
                            <BsWhatsapp />
                            <FaFacebook />
                            <BsInstagram />
                            <BsYoutube />
                        </div>
                    </div>
                    <div className="footer-links">
                        <a href="#Free Jobs Posting">Free Jobs Posting</a>
                        <a href="#Available Jobs">Available Jobs</a>
                        <a href="#About US">About US</a>
                        <a href="#Why Choose us">Why Choose us</a>
                    </div>
                    <div className='footer-second'>
                        <a href="#Support">Support</a>
                        <a href="#Help Center">Help Center</a>
                        <a href="#Privacy Policy">Privacy Policy</a>
                        <a href="#Terms and condition">Terms and condition</a>
                    </div>
                    <p className='final'>Copyright and Company Information : WorkNab © 2024. All rights reserved.</p>
                </footer>
            </div>
        </div>
    )
}

export default Aboutus
