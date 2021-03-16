import React from 'react';
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

function TeamCard({ data, modelOpen, setModelOpen,  setDetail }) {
    // const [details,setdetails]=useState(false)
    return (
        <div className='col-md-4 my-3'>
            <div className="team-card">
                <img src={data.img} alt="team" className='team-card-img' />
                <div className='team-card-content'>
                    <h5 className='team-card-heading'>
                        {data.heading}
                    </h5>
                    <div className="team-card-text">
                        {data.role}
                    </div>
                </div>
                <div className="f-30 curser ml-auto" onClick={() => { setModelOpen(modelOpen!==data.id?data.id:null); setDetail(data.detail) }}>
                    {
                        modelOpen === data.id ?
                            <BiMinusCircle />
                            :
                            <BiPlusCircle />
                    }
                </div>
            </div>
            <div className={`cardDetails ${modelOpen === data.id ? 'show' : 'hide'}`}>
                {data.detail}
            </div>
        </div>
    );
}

export default TeamCard;