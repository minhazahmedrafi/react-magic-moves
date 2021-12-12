import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
return (
<div>
    <footer id="footer">
        <div className="container">
            <div className="row pt-5">
                <div className="col-lg-3">
                    <div className="ft-logo">
                        <NavLink class="navbar-brand" to="/"><span className="bold-logo">Magic</span> Moves</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 pt-2">
                    <div className="footer-contact">
                        <ul class="ft-menu">
                          <li className="ft-list"><NavLink className="ft-list-item active" exact to="/">Home</NavLink></li>
                          <li className="ft-list"><NavLink className="ft-list-item" to="/about">About</NavLink></li>
                          <li className="ft-list"><NavLink className="ft-list-item" to="/teams">Team</NavLink></li>
                          <li className="ft-list"><NavLink className="ft-list-item" to="/classes">Classes</NavLink></li>
                          <li className="ft-list"><NavLink className="ft-list-item" to="/pricing">Pricing</NavLink></li>
                          <li className="ft-list"><NavLink className="ft-list-item" to="/subscribe">Subscribe</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="icons mt-1 text-end">
                        <NavLink to=""><i class="fa fa-facebook" aria-hidden="true"></i></NavLink>
                        <NavLink to=""><i class="fa fa-twitter" aria-hidden="true"></i></NavLink>
                        <NavLink to=""><i class="fa fa-instagram" aria-hidden="true"></i></NavLink>
                        <NavLink to=""><i class="fa fa-linkedin" aria-hidden="true"></i></NavLink>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="text-center copyright">Circular Copyright 2020. All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
</div>
)
}

export default Footer