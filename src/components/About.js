import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
return (
<>
<section id="about-2">
<Navbar></Navbar>
        <div className="container">
            <div className="row mx-auto py-5">
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
                <div className="col-lg-6">
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
    <Footer></Footer>
</>
)
}

export default About