import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
return (
<>
    <nav class="navbar navbar-expand-lg navbar-dark pt-4" >
        <div class="container">
            <NavLink class="navbar-brand" to="/"><span className="bold-logo">Magic</span> Moves</NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                    <li class="nav-item px-2">
                        <NavLink class="nav-link active" exact aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item px-2">
                        <NavLink class="nav-link" to="/about">About</NavLink>
                    </li>
                    <li class="nav-item px-2">
                        <NavLink class="nav-link" to="/teams">Team</NavLink>
                    </li>
                    <li class="nav-item px-2">
                        <NavLink class="nav-link" to="/classes">Classes</NavLink>
                    </li>
                    <li class="nav-item px-2">
                        <NavLink class="nav-link" to="/pricing">Pricing</NavLink>
                    </li>
                    <li class="nav-item px-2">
                        <NavLink class="nav-link" to="/subscribe">Subscribe</NavLink>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-outline-success nav-contact-btn me-5" type="submit">CONTACT US</button>
                </form>
            </div>
        </div>
    </nav>
</>
)
}

export default Navbar