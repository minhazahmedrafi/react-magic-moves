import React from 'react'
import {NavLink} from 'react-router-dom'
import img5 from '../images/MaskGroup2.png';
import Navbar from './Navbar'
import Footer from './Footer';

const Classes = () => {
return (
<>
    <section id="popular-2">
    <Navbar></Navbar>
            <div className="row my-5 py-5">
                <div className="col-md-4 l-p-c">
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
                <div className="col-md-8">
                    <div className="popular-para">
                        <p className="para-1">A Institute with success</p> <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <div className="popular-r-img text-end">
                        <img className="img-fluid" src={img5} alt="" />
                    </div>
                </div>
            </div>
    </section>
    <Footer></Footer>
</>
)
}

export default Classes