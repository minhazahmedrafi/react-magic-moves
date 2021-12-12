import React from 'react'
import Team from './Team'
import img3 from '../images/ins.png';
import img4 from '../images/lady.png';
import Navbar from './Navbar';
import Footer from './Footer';

const Teams = () => {
return (
<>
    <section id="team-2">
        <Navbar></Navbar>
        <div className="container">
            <div className="row pt-5">
                <div className="col-12">
                    <div className="headiline">
                        <h2 className="text-center">A Team of Professionals</h2>
                    </div>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col-md-4">
                    <Team name="David Hatson" imgs1={img3}></Team>
                </div>
                <div className="col-md-4">
                    <Team name="Eliana Patric" imgs1={img3}></Team>
                </div>
                <div className="col-md-4">
                    <Team name="Olivia Addyson" imgs1={img4}></Team>
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
</>
)
}

export default Teams