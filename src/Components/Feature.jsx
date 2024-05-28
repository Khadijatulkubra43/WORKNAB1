import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import '../CSS/Feature.css'
const Feature = () => {
    return (
        <div>
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
                <br /><br /><br /> <br /><br /><br /> <br /><br /><br />
            </div>
            <div className='card'>
                <div className='card1'>
                    <img className='item1' src='../../public/assest/build1.png' />
                    <h3>Tenant</h3>
                    <p>2023-09-01</p>
                    <p>Waltham,MA</p>
                    <p>Being System:Curtain all untililze system....</p>
                </div>
                <div className='card1'>
                    <img className='item1' src='../../public/assest/build2.png' />
                    <h3>Tenant</h3>
                    <p>2023-09-01</p>
                    <p>Waltham,MA</p>
                    <p>Being System:Curtain all untililze system....</p>
                </div>
                <div className='card1'>
                    <img className='item1' src='../../public/assest/build3.png' />
                    <h3>Tenant</h3>
                    <p>2023-09-01</p>
                    <p>Waltham,MA</p>
                    <p>Being System:Curtain all untililze system....</p>
                </div>
                <div className='card1'>
                    <img className='item4' src='../../public/assest/build4.png' />
                    <h3>Tenant</h3>
                    <p>2023-09-01</p>
                    <p>Waltham,MA</p>
                    <p>Being System:Curtain all untililze system....</p>
                </div>
                <div className='card1'>
                    <img className='item5' src='../../public/assest/build.png' />
                    <h3>Tenant</h3>
                    <p>2023-09-01</p>
                    <p>Waltham,MA</p>
                    <p>Being System:Curtain all untililze system....</p>
                </div>
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
        </div >
    )
}

export default Feature
