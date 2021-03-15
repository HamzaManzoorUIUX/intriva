import React, { useState } from 'react';
import { BiMinusCircle,BiPlusCircle } from "react-icons/bi";

function TeamCard(props) {
    const [details,setdetails]=useState(false)
    
    return (
        <div className='my-3'>
        <div className="team-card">
            <img src={props.data.img} alt="team" className='team-card-img' />
            <div className='team-card-content'>
                <h5 className='team-card-heading'>
                {props.data.heading}
                                </h5>
                <div className="team-card-text">
                {props.data.detail.slice(0,20)}
                                </div>
            </div>
            <div className="f-30" onClick={()=>setdetails(!details)}>
                {
                    details?
                    <BiPlusCircle/>:
                    <BiMinusCircle/>
                }
            </div>
        </div>
        <div className={`cardDetails ${details?'show':'hide'}`}>
                {props.data.detail}
        </div>
        </div>
    );
}

export default TeamCard;