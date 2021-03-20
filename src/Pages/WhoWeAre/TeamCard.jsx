import React from 'react';
import { Fade } from 'react-reveal';
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

function TeamCard({ data, modelOpen, setModelOpen,  setDetail }) {
    // const [details,setdetails]=useState(false)
    return (
        <div className='col-md-4 my-3'>
            <div className={`team-card ${modelOpen === data.id ?'active':''}`} onClick={() => { setModelOpen(modelOpen!==data.id?data.id:null); setDetail(data.detail) }}>
                <img src={data.img} alt="team" className='team-card-img' />
                <div className='team-card-content'>
                    <h5 className='team-card-heading'>
                        {data.heading}
                    </h5>
                    <div className="team-card-text">
                        {data.role}
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
            </div>
            <Fade>
            <div className={`cardDetails ${modelOpen === data.id ? 'show' : 'hide'}`}>
                {data.detail}
            </div>
            </Fade>
        </div>
    );
}

export default TeamCard;