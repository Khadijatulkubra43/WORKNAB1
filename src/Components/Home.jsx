import React from 'react'
import '../CSS/Home.css'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
const Home = () => {
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
            <nav className="subnav">
              <ul>
                <li><a href="/glazier">Glaziers</a></li>
                <li><a href="/generallabour">General labor</a></li>
                <li><a href="postjobwithme">Post Jobs With Me</a></li>
                <li><a href="workwithme">Work With Me</a></li>
                <li><a href="seeyourcart">See your Cart</a></li>
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
          <div className="featured-section" id="general-labors">
            <h2>Featured General Labors</h2>
            <div className="profiles">
              <div className="card1">
                <img src="../../public/assest/card1.png" alt="card 1" />
                <div className='text'>
                <h4>
                  Giovanni <span>Forman</span></h4>
                  <div className='button'>
                    <button>Add to cart</button>
                    <button>Click here to see profile</button>
                </div>
                  </div>
              </div>
              <div className='card2'>
                <img src="../../public/assest/card2.png" alt="card 2" />
                <div className='text'>
                <h4>
                  Giovanni <span>Forman</span></h4>
                  <div className='button'>
                    <button>Add to cart</button>
                    <button>Click here to see profile</button>
                </div>
                  </div>
              </div>
              <div className='card3'>
                <img src="../../public/assest/card3.png" alt="card 3" />
                <div className='text'>
                <h4>
                  Giovanni <span>Forman</span></h4>
                  <div className='button'>
                    <button>Add to cart</button>
                    <button>Click here to see profile</button>
                </div>
                  </div>
              </div>
              <div className='card4'>
                <img src="../../public/assest/card4.png" alt="card 4" />
                <div className='text'>
                <h4>
                  Giovanni <span>Forman</span></h4>
                  <div className='button'>
                    <button>Add to cart</button>
                    <button>Click here to see profile</button>
                </div>
                  </div>
              </div>
              <div className='card5'>
                <img src="../../public/assest/card5.png" alt="card 5" />
                <div className='text'>
                <h4>
                  Giovanni <span>Forman</span></h4>
                  <div className='button'>
                    <button>Add to cart</button>
                    <button>Click here to see profile</button>
                </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="featured-section" id="glaziers">
            <h2>Featured Glaziers</h2>
            <div className="profiles">
            <div className='card6'>
                <img src="../../public/assest/card6.png" alt="card 6" />
                <div className='text'>
                <h4>
                  Giovanni <span>Forman</span></h4>
                  <div className='button'>
                    <button>Add to cart</button>
                    <button>Click here to see profile</button>
                </div>
                  </div>
              </div>
              <div className='card7'>
                <img src="../../public/assest/card7.png" alt="card 7" />
                <div className='text'>
                <h4>
                  Giovanni <span>Forman</span></h4>
                  <div className='button'>
                    <button>Add to cart</button>
                    <button>Click here to see profile</button>
                </div>
                  </div>
              </div>
              <div className='card8'>
                <img src="../../public/assest/card8.png" alt="card 8" />
                <div className='text'>
                <h4>
                  Giovanni <span>Forman</span></h4>
                  <div className='button'>
                    <button>Add to cart</button>
                    <button>Click here to see profile</button>
                </div>
                  </div>
              </div>
              <div className='card9'>
                <img src="../../public/assest/card9.png" alt="card 9" />
                <div className='text'>
                <h4>
                  Giovanni <span>Forman</span></h4>
                  <div className='button'>
                    <button>Add to cart</button>
                    <button>Click here to see profile</button>
                </div>
                  </div>
              </div>
              <div className='card10'>
                <img src="../../public/assest/card10.png" alt="card 10" />
                <div className='text'>
                <h4>
                  Giovanni <span>Forman</span></h4>
                  <div className='button'>
                    <button>Add to cart</button>
                    <button>Click here to see profile</button>
                </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="featured-jobs">
            <h2>Featured Jobs</h2>
            <div className="jobs">
              <div className="job">
                <img src="../../public/assest/pic1.png" alt="pic 1" />
                <h3>Central Plaza 2.0</h3>
                <p>324 Cedar Street, Brisbane</p>
              </div>
              <div className="job">
                <img src="../../public/assest/pic2.png" alt="pic 2" />
                <h3>Walmart HQ</h3>
                <p>Bentonville, AR, USA</p>
              </div>
            </div>
          </div>
          <div className="featured-projects">
            <h2>Featured Projects</h2>
            <div className="projects">
              <div className="project">
                <img src="../../public/assest/build1.png" alt="Project 1" />
                <p>New High School</p>
              </div>
              <div className="project">
                <img src="../../public/assest/build2.png" alt="Project 2" />
                <p>Portside Hub</p>
              </div>
              <div className="project">
                <img src="../../public/assest/build3.png" alt="Project 3" />
                <p>Forest View Apartments</p>
              </div>
              <div className="project">
                <img src="../../public/assest/build4.png" alt="Project 3" />
                <p>Pen states hospital</p>
              </div>
            </div>
          </div>
          <div className='logo1'>
            <img src='../../public/assest/logo.png'/>
            <p>Never Accept Boundaries</p>
          </div>
          <footer className="footer">
            <div className='footer-text'>
          <p>Follow Our Social Media</p>
            <div className="social-links">
            <BsWhatsapp/>
              <FaFacebook/>
              <BsInstagram/>
              <BsYoutube/>
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
    </div>
  )
}

export default Home
