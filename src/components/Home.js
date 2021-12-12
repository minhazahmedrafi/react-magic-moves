import React from 'react'
import Navbar from './Navbar'
import Team from './Team'
import {NavLink} from 'react-router-dom'
import img1 from '../images/instructor.png'
import img3 from '../images/ins.png';
import img4 from '../images/lady.png';
import img5 from '../images/MaskGroup2.png';
import img6 from '../images/MaskGroup3.png';
import Footer from './Footer'
const Home = () => {
return (
<>
    <header id="header">
        <Navbar></Navbar>
        <div className="container">
            <div className="hero-sec">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hero-title mt-5">
                            <h1>Personalized<br></br> Instructor</h1>
                            <p className="hero-art">It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The point </p>
                            <button className="appoinment-btn">BOOK FREE APPOINTMENT</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right-img text-center">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section id="about">
        <div className="container">
            <div className="row mx-auto">
                <div className="col-lg-6">
                    <div className="left-about-text">
                        <h2>About Our<br /> Company</h2>
                        <div className="about-para pt-4">
                            <div className="main-para">
                                <p className="para-1">A Institute with success</p> <i
                                    class="fas fa-long-arrow-alt-right"></i>
                            </div>
                            <hr />
                            <p className="para-2">Our Main Vision</p>
                            <hr />
                            <p className="para-3">Important Values</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                    <div className="right-about-text">
                        <div className="single-about mb-4">
                            <h2>Lorem Ipsum is simply dummy text of the</h2>
                            <p>It is a long established fact that a reader will be a page when looking at its layout.
                                The point </p>
                        </div>
                        <div className="single-about">
                            <h2>Lorem Ipsum is simply dummy text of the</h2>
                            <p>It is a long established fact that a reader will be a page when looking at its layout.
                                The point </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="team">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="headiline">
                        <h2 className="text-center">A Team of Professionals</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <Team name="David Hatson" imgs1={img3}></Team>
                </div>
                <div className="col-lg-4">
                    <Team name="Eliana Patric" imgs1={img3}></Team>
                </div>
                <div className="col-lg-4">
                    <Team name="Olivia Addyson" imgs1={img4}></Team>
                </div>
            </div>
        </div>
    </section>
    <section id="popular">
        <div className="">
            <div className="row">
                <div className="col-lg-4 l-p-c">
                    <div className="popular-l-content">
                        <h1>Popular Courses</h1>
                        <span>RECOMENDED FOR WEIGHT LOSS</span>
                        <p>It is a long established fact that a reader will be distracted </p>
                        <div className="left-btn-1">
                            <NavLink to="" className="btn1">Aerobics</NavLink>
                            <NavLink to="" className="btn2">CrossFit</NavLink>
                        </div>
                        <div className="left-btn-2">
                            <NavLink to="" className="btn3">Yoga</NavLink>
                            <NavLink to="" className="btn4">Pilates</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="popular-r-main">
                        <div className="popular-para">
                            <p className="para-1">A Institute with success</p> <i
                                class="fas fa-long-arrow-alt-right"></i>
                        </div>
                        <div className="popular-r-img text-end">
                            <img className="img-fluid" src={img5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="price">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="headiline pb-5 mb-3">
                        <h2 className="text-center">Affordable Prices</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 mx-auto">
                    <div className="left-card">
                        <div className="head-part d-flex ms-5">
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
    <section id="subscribe">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 text-center">
                    <div className="sub-left">
                        <p>Start improving your life. <span>Subscribe Now</span></p>
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                    <div className="sub-right">
                        <input className="form-control" placeholder="enter your email address" type="text" />
                        <button>subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
</>
)
}

export default Home