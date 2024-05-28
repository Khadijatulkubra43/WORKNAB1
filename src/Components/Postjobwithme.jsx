import React, { useState } from 'react';
import '../CSS/Postwithme.css';
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
const Postjobwithme = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        companyRepresentativeFirstName: '',
        companyRepresentativeLastName: '',
        email: '',
        phone1: '',
        phone2: '',
        address: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: '',
        projectName: '',
        projectAddress: '',
        projectAddressLine2: '',
        projectCity: '',
        projectState: '',
        projectZip: '',
        hasSuperintendent: false,
        projectStartDate: '',
        anticipatedCompletionDate: '',
        totalLaborRequested: '',
        projectBriefDescription: '',
        DavisBacon: false,
        enclosedWorkersComp: false,
        insuranceProgram: false,
        OSHARequired: false,
        selectedOSHA: '',
        insuranceType: [],
        projectImage: null,
        laborRates: [],
        ppeTypes: [],
        workTypes: [],
        equipmentCertsRequired: '',
        toolsProvided: [],
        totalRates: {
            foreman: 0,
            journeyman: 0,
            apprentice: 0,
            generalLabor: 0,
        },
        totalCrew: 0,
        totalCrewRate: 0,
        representativeName: '',
        projectStart: '',
    });

    const [rates, setRates] = useState({
        foreman: { withoutHousing: 0, withHousing: 0, quantity: 0 },
        journeyman: { withoutHousing: 0, withHousing: 0, quantity: 0 },
        apprentice: { withoutHousing: 0, withHousing: 0, quantity: 0 },
        generalLabor: { withoutHousing: 0, withHousing: 0, quantity: 0 },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, projectImage: e.target.files[0] });
    };

    const handleRateChange = (e, role, type) => {
        const { value } = e.target;
        setRates({
            ...rates,
            [role]: {
                ...rates[role],
                [type]: type === 'quantity' ? parseInt(value, 10) : parseFloat(value),
            },
        });
    };

    const calculateTotal = (type) => {
        return (
            rates.foreman[type] * rates.foreman.quantity +
            rates.journeyman[type] * rates.journeyman.quantity +
            rates.apprentice[type] * rates.apprentice.quantity +
            rates.generalLabor[type] * rates.generalLabor.quantity
        ).toFixed(2);
    };

    const calculateBlendedRate = (type) => {
        const totalQuantity =
            rates.foreman.quantity +
            rates.journeyman.quantity +
            rates.apprentice.quantity +
            rates.generalLabor.quantity;
        const totalCost = calculateTotal(type);
        return totalQuantity > 0 ? (totalCost / totalQuantity).toFixed(2) : '0.00';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

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
                            src="../../public/assest/home.png"
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
            {/* <form className="postform" onSubmit={handleSubmit}>
                <h1>Create Your Free Project Posting Now</h1>
                <h2>Free Request Quote</h2>
                <section className="company-info">
                    <h3>Company Information</h3>
                    <label>
                        Company Name
                        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                    </label>
                    <label>
                        Company Representative
                        <input type="text" name="companyRepresentativeFirstName" value={formData.companyRepresentativeFirstName} onChange={handleChange} placeholder="First Name" />
                        <input type="text" name="companyRepresentativeLastName" value={formData.companyRepresentativeLastName} onChange={handleChange} placeholder="Last Name" />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Phone 1
                        <input type="tel" name="phone1" value={formData.phone1} onChange={handleChange} />
                    </label>
                    <label>
                        Phone 2
                        <input type="tel" name="phone2" value={formData.phone2} onChange={handleChange} />
                    </label>
                    <label>
                        Address
                        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street Address" />
                        <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} placeholder="Street Address Line 2" />
                        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
                        <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State/Province" />
                        <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Postal / Zip Code" />
                    </label>
                </section>
                <section className="project-info">
                    <h3>Project Info</h3>
                    <label>
                        Project Name
                        <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} />
                    </label>
                    <label>
                        Project Address
                        <input type="text" name="projectAddress" value={formData.projectAddress} onChange={handleChange} placeholder="Street Address" />
                        <input type="text" name="projectAddressLine2" value={formData.projectAddressLine2} onChange={handleChange} placeholder="Street Address Line 2" />
                        <input type="text" name="projectCity" value={formData.projectCity} onChange={handleChange} placeholder="City" />
                        <input type="text" name="projectState" value={formData.projectState} onChange={handleChange} placeholder="State/Province" />
                        <input type="text" name="projectZip" value={formData.projectZip} onChange={handleChange} placeholder="Postal / Zip Code" />
                    </label>
                    <label>
                        Your project must be managed by your own Superintendent. Will your project have one?
                        <label>
                            <input type="radio" name="hasSuperintendent" value="yes" checked={formData.hasSuperintendent === 'yes'} onChange={handleChange} /> Yes
                        </label>
                        <label>
                            <input type="radio" name="hasSuperintendent" value="no" checked={formData.hasSuperintendent === 'no'} onChange={handleChange} /> No
                        </label>
                    </label>
                    <label>
                        Project Start Date
                        <input type="date" name="projectStartDate" value={formData.projectStartDate} onChange={handleChange} />
                    </label>
                    <label>
                        Anticipated Completion Date
                        <input type="date" name="anticipatedCompletionDate" value={formData.anticipatedCompletionDate} onChange={handleChange} />
                    </label>
                    <label>
                        Total Labor Requested
                        <input type="number" name="totalLaborRequested" value={formData.totalLaborRequested} onChange={handleChange} />
                    </label>
                    <label>
                        Project Brief Description
                        <textarea name="projectBriefDescription" value={formData.projectBriefDescription} onChange={handleChange}></textarea>
                    </label>
                </section>
                <section className="project-requirements">
                    <h3>Projects Requirements</h3>
                    <label>
                        Davis Bacon / Prevailing Wage
                        <input type="checkbox" name="DavisBacon" checked={formData.DavisBacon} onChange={handleChange} />
                    </label>
                    <label>
                        Enclosed Workers Comp
                        <input type="checkbox" name="enclosedWorkersComp" checked={formData.enclosedWorkersComp} onChange={handleChange} />
                    </label>
                    <label>
                        Insurance Program
                        <input type="checkbox" name="insuranceProgram" checked={formData.insuranceProgram} onChange={handleChange} />
                    </label>
                    <label>
                        OSHA Required
                        <input type="checkbox" name="OSHARequired" checked={formData.OSHARequired} onChange={handleChange} />
                    </label>
                    <label>
                        OSHA
                        <input type="radio" name="selectedOSHA" value="10" checked={formData.selectedOSHA === '10'} onChange={handleChange} /> 10
                        <input type="radio" name="selectedOSHA" value="30" checked={formData.selectedOSHA === '30'} onChange={handleChange} /> 30
                    </label>
                    <label>
                        Type of Insurance Program
                        <input type="checkbox" name="insuranceType" value="CCIP" checked={formData.insuranceType.includes('CCIP')} onChange={handleChange} /> CCIP
                        <input type="checkbox" name="insuranceType" value="OCIP" checked={formData.insuranceType.includes('OCIP')} onChange={handleChange} /> OCIP
                    </label>
                    <label>
                        Project Image
                        <input type="file" name="projectImage" onChange={handleFileChange} />
                    </label>
                </section>
                <section className="labor-rate-calculator">
                    <h3>Labor Rate Calculator</h3>
                    <p>This Rate is For 1 Worker Per Hour</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Calculate Hourly Rate (Without Housing)</th>
                                <th>Calculate Hourly Rate (With Housing)</th>
                                <th>Quantity / Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(rates).map((role) => (
                                <tr key={role}>
                                    <td>{role.charAt(0).toUpperCase() + role.slice(1)}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={rates[role].withoutHousing}
                                            onChange={(e) => handleRateChange(e, role, 'withoutHousing')}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={rates[role].withHousing}
                                            onChange={(e) => handleRateChange(e, role, 'withHousing')}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={rates[role].quantity}
                                            onChange={(e) => handleRateChange(e, role, 'quantity')}
                                        /> Workers
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="summary">
                        <div>
                            <strong>Total Per Hour Without Housing:</strong> ${calculateTotal('withoutHousing')}
                        </div>
                        <div>
                            <strong>Total Per Hour With Housing:</strong> ${calculateTotal('withHousing')}
                        </div>
                        <div>
                            <strong>Total Cost of Crew Without Housing:</strong> ${calculateTotal('withoutHousing')}
                        </div>
                        <div>
                            <strong>Total Cost of Crew With Housing:</strong> ${calculateTotal('withHousing')}
                        </div>
                        <div>
                            <strong>Blended Rate Without Housing:</strong> ${calculateBlendedRate('withoutHousing')}
                        </div>
                        <div>
                            <strong>Blended Rate With Housing:</strong> ${calculateBlendedRate('withHousing')}
                        </div>
                    </div>
                    </section>
                    <section className="additional-requirements">
                    <h3>Fill Your Requirement According To Category</h3>
                </section>
                <section className="summary">
                    <h3>Summary</h3>
                </section>
                <button className='butt' type="submit">Submit</button>
            </form> */}
            <div className='post'>
                <h2>Create Your Free Project Posting Now</h2>
                <h3>Free Request Quote</h3>
                <from className='Signup'>
                    <div className='sign'>
                        <p>Company information:</p><br /><br />
                        <input type='text' placeholder='Company Name' /><br /><br />
                        <input type='text' placeholder='First Name' /><br /><br />
                        <input type='text' placeholder='Last Name' /><br /><br />
                        <input type='text' placeholder='Email' /><br /><br />
                        <input type='text' placeholder='Mobile Number' /><br /><br />
                        <input type='text' placeholder='Address' /><br /><br />
                        <input type='text' placeholder='Country code' /><br /><br />
                        <input type='password' placeholder='City' /><br /><br />
                        <input type='password' placeholder='State/Province' /><br /><br />
                        <input type='password' placeholder='Postal Code' /><br /><br />
                        <p>Project information:</p><br /><br />
                        <input type='text' placeholder='Project Name' /><br /><br />
                        <input type='text' placeholder='Street Address' /><br /><br />
                        <input type='text' placeholder='Street Address No#02' /><br /><br />
                        <input type='text' placeholder='City' /><br /><br />
                        <input type='text' placeholder='Postal/Zip code' /><br /><br />
                    </div>
                    {/* <div className='yesno'>
                        <p>Your Project must be managed by your own Superinttendent.Will ypu have project one? </p><br /><br />
                        <input type="checkbox" id="Yes" name="Yes" value=" Yes" />
                        <label for="Yes"> Yes</label><br />
                        <input type="checkbox" id="NO" name="NO" value="No" />
                        <label for="NO">No</label><br />
                        <input type='Date' placeholder='Starting date' />
                        <input type='Date' placeholder='Starting date' />
                        <input type='text' placeholder='Total labour request' />
                        <textarea name='Project brief description'></textarea>
                    </div>
                    <div className='agree'>
                        <p>Projects Requirements</p>
                        <label>Davis Bacon/Privilege Wege</label>
                        <input type="checkbox" id="Yes" name="Yes" value=" Yes" />
                        <label for="Yes"> Yes</label><br />
                        <input type="checkbox" id="NO" name="NO" value="No" />
                        <label for="NO">No</label><br />
                        <label>Insurance Program</label>
                        <input type="checkbox" id="Yes" name="Yes" value=" Yes" />
                        <label for="Yes"> Yes</label><br />
                        <input type="checkbox" id="NO" name="NO" value="No" />
                        <label for="NO">No</label><br />
                        <label>Type of Insurance Program</label>
                        <input type="checkbox" id="Yes" name="Yes" value=" Yes" />
                        <label for="Yes"> Yes</label><br />
                        <input type="checkbox" id="NO" name="NO" value="No" />
                        <label for="NO">No</label><br />
                        <label>
                            Project Image
                            <input type="file" name="projectImage" onChange={handleFileChange} />
                        </label> */}
                    {/* </div> */}
                    <section className="laborrate">
                    <p>Labor Rate Calculator</p>
                    <p>This Rate is For 1 Worker Per Hour</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Calculate Hourly Rate (Without Housing)</th>
                                <th>Calculate Hourly Rate (With Housing)</th>
                                <th>Quantity / Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(rates).map((role) => (
                                <tr key={role}>
                                    <td>{role.charAt(0).toUpperCase() + role.slice(1)}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={rates[role].withoutHousing}
                                            onChange={(e) => handleRateChange(e, role, 'withoutHousing')}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={rates[role].withHousing}
                                            onChange={(e) => handleRateChange(e, role, 'withHousing')}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={rates[role].quantity}
                                            onChange={(e) => handleRateChange(e, role, 'quantity')}
                                        /> Workers
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="summary">
                        <div>
                            <strong>Total Per Hour Without Housing:</strong> ${calculateTotal('withoutHousing')}
                        </div>
                        <div>
                            <strong>Total Per Hour With Housing:</strong> ${calculateTotal('withHousing')}
                        </div>
                        <div>
                            <strong>Total Cost of Crew Without Housing:</strong> ${calculateTotal('withoutHousing')}
                        </div>
                        <div>
                            <strong>Total Cost of Crew With Housing:</strong> ${calculateTotal('withHousing')}
                        </div>
                        <div>
                            <strong>Blended Rate Without Housing:</strong> ${calculateBlendedRate('withoutHousing')}
                        </div>
                        <div>
                            <strong>Blended Rate With Housing:</strong> ${calculateBlendedRate('withHousing')}
                        </div>
                    </div>
                    </section>
                    <button className='firstbtn'>Submit</button>
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
                    <p className='final'>Copyright and Company Information : WorkNab © 2024. All rights reserved.</p>
                </footer>

        </div>
    );
};

export default Postjobwithme;
