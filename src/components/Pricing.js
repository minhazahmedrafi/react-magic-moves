import React from 'react'
import {NavLink} from 'react-router-dom'
import img6 from '../images/MaskGroup3.png';
import Footer from './Footer';
import Navbar from './Navbar'

const Pricing = () => {
return (
<>
    <section id="price-2">
    <Navbar></Navbar>
        <div className="container">
            <div className="row pt-5">
                <div className="col-12">
                    <div className="headiline pb-5 mb-3">
                        <h2 className="text-center">Affordable Prices</h2>
                    </div>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col-lg-5 mx-auto">
                    <div className="left-card">
                        <div className="head-part d-flex">
                            <span>3</span><i class="fas fa-arrows-alt-v my-auto"></i>
                            <h5 className="my-auto ms-2">Monthly Subscription</h5>
                        </div>
                        <hr />
                        <div className="middle-part text-center">
                            <p><span className="dollar">$</span><span className="value">49</span><span
                                    className="value-point">.99</span> <span className="text-month">/ per month</span>
                            </p>
                            <ul className="price-list">
                                <div className="list-1"><i class="fas fa-check me-2"></i>
                                    <li>It is a long established fact that a reader will</li>
                                </div>
                                <div className="list-1"><i class="fas fa-check me-2"></i>
                                    <li>It is a long established fact that.</li>
                                </div>
                                <div className="list-1 mb-4"><i class="fas fa-check me-2"></i>
                                    <li>It is a long established fact that a reader will be distracted</li>
                                </div>
                            </ul>
                            <div className="card-btn text-center d-inline">
                                <button className="btn">GET STARTED NOW</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-5 mx-auto">
                    <div className="right-card text-center my-auto">
                        <div className="card-top">
                            <img className="img-fluid" src={img6} alt="" />
                        </div>
                        <div className="card-right-text">
                            <p>Are you looking for a personal instructor?</p>
                        </div>
                        <hr />
                        <div className="right-address">
                            <div className="row">
                                <div className="col-md-6 main-address">
                                    <p>Phone Number</p>
                                    <h6>+00-123 456 789</h6>
                                </div>
                                <div className="col-md-6 main-address">
                                    <p>Phone Number</p>
                                    <h6>companyname@mail.com</h6>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <NavLink className="right-footer" to="">REQUEST FOR A QUOTE</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
</>
)
}

export default Pricing