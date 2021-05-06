import React from 'react';
import { Fade } from 'react-reveal';
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import linkedInIcon from "../../assets/img/linkedInIcon.png";

function TeamCard({ data, modelOpen, setModelOpen, setDetail }) {
    const { innerWidth: width } = window;
    // const [details,setdetails]=useState(false)
    const toggleCard = (e) => {
        if(e.target.tagName!=='a'&&!e.target.classList.contains('linkedIn'))
        {
            setModelOpen(modelOpen !== data.id ? data.id : null);
            setDetail(data.detail);
        }
    }
    return (
        <div className='col-md-12 col-lg-4 pt-5' id={`team${data.id}`}>
            <div className="pt-3 pt-md-0">
                {
                    width > 767 ? <div className={`team-card ${modelOpen === data.id ? 'active' : ''}`} onClick={toggleCard} >
                        <img src={data.img} alt="team" className='team-card-img' />
                        <div className='team-card-content'>
                            <h6 className='team-card-heading'>
                                {data.heading}
                            </h6>
                            <div className="team-card-text">
                                {data.role} <a href={data.linkedIn} target="_blank" rel="noreferrer" className="f-20 linkedIn" style={{ color: "#0e76a8" }}>
                                <img src={linkedInIcon}  className='linkedIn' width='20px' alt="linkedIn"/>
                                </a>
                            </div>
                        </div>
                        <div className="f-30 curser ml-auto" >
                            {
                                modelOpen === data.id ?
                                    <BiMinusCircle className='text-primary' />
                                    :
                                    <BiPlusCircle />
                            }
                        </div>
                    </div> : <a href={`#team${data.id}`} className={`team-card ${modelOpen === data.id ? 'active' : ''}`} onClick={toggleCard} >
                        <img src={data.img} alt="team" className='team-card-img' />
                        <div className='team-card-content'>
                            <h6 className='team-card-heading'>
                                {data.heading}
                            </h6>
                            <div className="team-card-text">
                                {data.role} <a href={data.linkedIn} target="_blank" rel="noreferrer" className="f-20 linkedIn" style={{ color: "#0e76a8" }}>
                                    <img src={linkedInIcon} className='linkedIn' width='20px' alt="linkedIn"/>
                                </a>
                            </div>
                        </div>
                        <div className="f-30 curser ml-auto" >
                            {
                                modelOpen === data.id ?
                                    <BiMinusCircle className='text-primary' />
                                    :
                                    <BiPlusCircle />
                            }
                        </div>
                    </a>
                }
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