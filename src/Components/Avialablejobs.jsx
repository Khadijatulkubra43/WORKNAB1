import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import '../CSS/Avilablejobs.css'
import { BiSearch } from 'react-icons/bi'
const Avialablejobs = () => {
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
            </div>
            <div className='jobs'>
                <h2>Available Jobs</h2>
            </div>
            <div className='search'>
                <p>By Project+</p>
                <p>By category+</p>
                <p>By State+</p>
                <p>Sort+</p>
                <BiSearch />
            </div>
            <div className='cards'>
                <img className='img' src='../../public/assest/pic3.png' />
                <h4>Central Plaza 2.0</h4>
                <p>All Inclusive Rate With Housing : 3.125/hr   All Inclusive Rate Without Housing:    3.125/hr      State: Los Angeles, CA, USA</p>
                <p>Journey Man (Available)
                    Required People: 2
                    2024-05-20</p>
                <p>Central Plaza One a skyscraper in the city of Brisbane, Queensland, Australia. At the time of its completion it was the tallest building in Brisbane, holding this title until Riparian Plaza’s completion in 2005. Central Plaza One has a unique window cleaning mechanism in which a section at the top of the building rotates, allowing for the suspension of outdoor window  More........................</p>
                <button className='btn'>Apply Now</button>
            </div>
            <div className='cards1'>
                <img className='img' src='../../public/assest/pic3.png' />
                <h4>Central Plaza 2.0</h4>
                <p>All Inclusive Rate With Housing : 3.125/hr   All Inclusive Rate Without Housing:    3.125/hr      State: Los Angeles, CA, USA</p>
                <p>Journey Man (Available)
                    Required People: 2
                    2024-05-20</p>
                <p>Central Plaza One a skyscraper in the city of Brisbane, Queensland, Australia. At the time of its completion it was the tallest building in Brisbane, holding this title until Riparian Plaza’s completion in 2005. Central Plaza One has a unique window cleaning mechanism in which a section at the top of the building rotates, allowing for the suspension of outdoor window  More........................</p>
                <button className='btn'>Apply Now</button>
            </div>
            <div className='cards2'>
                <img className='img' src='../../public/assest/pic3.png' />
                <h4>Central Plaza 2.0</h4>
                <p>All Inclusive Rate With Housing : 3.125/hr   All Inclusive Rate Without Housing:    3.125/hr      State: Los Angeles, CA, USA</p>
                <p>Journey Man (Available)
                    Required People: 2
                    2024-05-20</p>
                <p>Central Plaza One a skyscraper in the city of Brisbane, Queensland, Australia. At the time of its completion it was the tallest building in Brisbane, holding this title until Riparian Plaza’s completion in 2005. Central Plaza One has a unique window cleaning mechanism in which a section at the top of the building rotates, allowing for the suspension of outdoor window  More........................</p>
                <button className='btn'>Apply Now</button>
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
    )
}

export default Avialablejobs
