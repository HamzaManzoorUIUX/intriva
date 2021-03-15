import React from 'react';
import TeamCard from './TeamCard';

import TeamData from "./TeamData.json";
function TeamRender(props) {

    
    return (
<div className='row'>
{
    TeamData.map((obj,i)=>{
        return <TeamCard key={i} data={obj}/>
    })
}

</div>
        
    );
}

export default TeamRender;