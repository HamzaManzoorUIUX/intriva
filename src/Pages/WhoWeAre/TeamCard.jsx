import React from 'react';
import { Fade } from 'react-reveal';
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

function TeamCard({ data, modelOpen, setModelOpen,  setDetail }) {
    // const [details,setdetails]=useState(false)
    return (
        <div className='col-md-12 col-lg-4 pt-5' id={`team${data.id}`}>
            <div className="pt-3 pt-md-0">
            <a href={`#team${data.id}`} className={`team-card ${modelOpen === data.id ?'active':''}`} onClick={() => { setModelOpen(modelOpen!==data.id?data.id:null); setDetail(data.detail) }} >
                <img src={data.img} alt="team" className='team-card-img' />
                <div className='team-card-content'>
                    <h6 className='team-card-heading'>
                        {data.heading}
                    </h6>
                    <div className="team-card-text">
                        {data.role} <a href={data.linkedIn} target="_blank" rel="noreferrer" className="f-20" style={{color:"#0e76a8"}}>
                        <FaLinkedin/>
                        </a>
                    </div>
                </div>
                <div className="f-30 curser ml-auto" >
                    {
                        modelOpen === data.id ?
                            <BiMinusCircle className='text-primary'/>
                            :
                            <BiPlusCircle />
                    }
                </div>
            </a>
            </div>
            <div className={`cardDetails ${modelOpen === data.id ? 'show' : 'hide'}`}>
            <Fade>
                {data.detail}
            </Fade>
            </div>
        </div>
    );
}

export default TeamCard;