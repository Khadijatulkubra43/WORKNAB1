import React from 'react'
import '../CSS/Workwithme.css'
const Workwithme = () => {
    return (

        <div>
            <header className="header">
                <img
                    src="../../public/assest/logo.png"
                    alt="WorkNab Logo"
                    className="logo" />
            </header>
            <div className="banner">
                <div className="container">
                    <div className="header">
                        <img
                            src="../../public/assest/home.png"
                            alt="Header"
                            className="header-img" />
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
            <div className='registration'>
                <h3>Register As:</h3>
                <hr />
                <from className='Signup'>
                    <div className='sign'>
                    <label>Select Your Role</label><br/><br/>
                    <input type='text' placeholder='Your Role' /><br/><br/>
                    <input type='text' placeholder='UserName' /><br/><br/>
                    <input type='text' placeholder='First Name' /><br/><br/>
                    <input type='text' placeholder='Last Name' /><br/><br/>
                    <input type='text' placeholder='Email' /><br/><br/>
                    <input type='text' placeholder='Mobile Number' /><br/><br/>
                    <input type='text' placeholder='Address' /><br/><br/>
                    <input type='password' placeholder='Password' /><br/><br/>
                    <input type='password' placeholder='Confirm Password' /><br/><br/>
                    <label> From where your hear about us:</label><br/><br/>
                    <select id="hear" name="media">
                        <option value="Google">Google</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Others">Others</option>
                    </select><br/><br/>
                    </div>
                    <div className='yesno'>
                    <label>Are you authorized to work in us</label><br/><br/>
                    <input type="checkbox" id="Yes" name="Yes" value=" Yes" />
                    <label for="Yes"> Yes</label><br/>
                        <input type="checkbox" id="NO" name="NO" value="No" />
                        <label for="NO">No</label><br/>
                    </div>
                    <div className='agree'>
                    <input type="checkbox" id="Agree" name="Agree" value="Agree" />
                        <label className='label2'for="Agree">Do you agree with our <span>Terms and condition</span></label><br/><br/>
                    </div>
                        <button className='first-btn'>Get started</button>
                        <p className='login'>Alerady have an account?<span>Login in</span></p>
                        </from>

                    </div>
            </div>
    )
}

export default Workwithme
