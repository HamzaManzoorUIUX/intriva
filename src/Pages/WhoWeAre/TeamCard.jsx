import React, { useState } from 'react';
import { BiMinusCircle,BiPlusCircle } from "react-icons/bi";
import teamImg from "../../assets/img/hunters-race-MYbhN8KaaEc-unsplash.svg";

function TeamCard(props) {
    const [details,setdetails]=useState(false)
    return (
        <div className='col-md-4 my-3'>
        <div className="team-card">
            <img src={teamImg} alt="team" className='team-card-img' />
            <div className='team-card-content'>
                <h5 className='team-card-heading'>
                    Luis Dominguez Cortés
                                </h5>
                <div className="team-card-text">
                    Partner, Portfoio Manager
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius architecto ut maxime quidem dolores temporibus! Voluptatem, molestiae magni vel voluptates nulla dolores quae eos sequi commodi alias dicta repudiandae. Iusto?
        </div>
        </div>
    );
}

export default TeamCard;