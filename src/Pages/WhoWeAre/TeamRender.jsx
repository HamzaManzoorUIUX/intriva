import React from 'react';
import TeamCard from './TeamCard';

import Fade from 'react-reveal/Fade';
import TeamData from "./TeamData.json";
function TeamRender(props) {
const CallTeam=(obj)=>{
    return <div className="col-md-4">
    <TeamCard data={obj} />
    </div>
}

    return (
        <div className='row'>
            {
                TeamData.map((obj, i) => {
                    if (i % 3 === 0)
                        return <Fade left big key={i}>
                            {CallTeam(obj)}
                        </Fade>
                    else if (i % 3 === 1)
                        return <Fade bottom big key={i}>
                            {CallTeam(obj)}
                        </Fade>
                    else
                        return <Fade right big key={i}>
                            {CallTeam(obj)}
                        </Fade>
                })
            }

        </div>

    );
}

export default TeamRender;