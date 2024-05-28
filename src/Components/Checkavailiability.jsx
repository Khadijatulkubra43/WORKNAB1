import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { useNavigate} from 'react-router-dom'
import '../CSS/Checkavailaibility.css'
const Checkavailiability = () => {
    const navigate = useNavigate();
    return (
        <div>
            <header className="header">
                <img
                    src="../../public/assest/logo.png"
                    alt="WorkNab Logo"
                    className="logo"
                />
            </header>
            <div className="banner">
                <div className="container">
                    <div className="header">
                        <img
                            src="../../public/assest/home1.png"
                            alt="Header"
                            className="header-img"
                        />
                    </div>
                    <div className="circle">
                        <p>GLAZIERS ON DEMAND</p>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li>
                                <a href="/aboutus">About Agent |</a>
                            </li>
                            <li>
                                <a href="/feature">Featured Projects |</a>
                            </li>
                            <li>
                                <a href="/availablejobs">Available Jobs |</a>
                            </li>
                            <li>
                                <a href="/wherewework">Where we Work |</a>
                            </li>
                            <li>
                                <a href="#">Store |</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="subnav">
                        <ul>
                            <li>
                                <a href="/glazier">Glaziers</a>
                            </li>
                            <li>
                                <a href="/generallabour">General labour</a>
                            </li>
                            <li>
                                <a href="postjobwithme">Post Jobs With Me</a>
                            </li>
                            <li>
                                <a href="workwithme">Work With Me</a>
                            </li>
                            <li>
                                <a href="seeyourcart">See your Cart</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="form">
                        <input type="text" placeholder="Location" />
                        <input type="text" placeholder="Expertise" />
                        <input type="text" placeholder="Tools" />
                        <input type="text" placeholder="PPE" />
                        <input type="text" placeholder="Certifications" />
                    </div>
                </div>
            </div>
            <div className='check'>
                <p>
                    Labor Agent will notify you within 24 hrs. on the availability of your labor request. You will have a higher success rate in finding reliable labor by telling labor agent your exact needs such as tools, PPE, and certifications required. Your WorkNab labor agents knows how to handle all your safety, vetting, and onboarding for you.  Would you like to continue Checking Availability or Name Your Rate and allow your WorkNab labor agent to come up more options in case this user profile is currently unavailable.
                </p>
                <from className='checkin'>
                    <label>
                    Check Availaility 
                    </label>
                    <input type='text' placeholder='Yes'/><br/><br/>
                    <label>
                    Tentative Start Date
                    </label>
                    <input type='date' placeholder='Agu 28, 2024 '/><br/><br/>
                    <label>
                    Tentative Finish Date
                    </label>
                    <input type='date' placeholder='Agu 28, 2024 '/><br/><br/>
                    <label>
                        Name
                    </label>
                    <input type='text' placeholder='Jhon'/><br/><br/>
                    <label>
                    Eamil
                    </label>
                    <input type='text' placeholder='hon17@gmail.com'/><br/><br/>
                    <label>
                        Phone Number
                    </label>
                    <input type='text' placeholder='+1*************'/><br/><br/>
                    <button className='sec-btn' onClick={()=>navigate("/Thankyou")}>Submit</button>
                </from>
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
                <p className='final'>copyright and Company Information : WorkNab © 2024. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Checkavailiability
