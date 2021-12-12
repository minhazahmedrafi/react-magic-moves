import React from 'react'




const Team = (props) => {
return (
<div>
    <div className="single-team">
        <div className="before-bg">
            <div className="team-person">
                <div className="after-img">
                    <img className="" src={props.imgs1} alt="" />
                </div>
                <h5 className="text-center">{props.name}</h5>
                <p className="text-center">Fitness Instructor</p>
            </div>
        </div>
    </div>
</div>
)
}

export default Team