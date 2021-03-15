import React from 'react';
import TeamCard from './TeamCard';

function RenderThree({ data, modelOpen, setModelOpen, detail, setDetail }) {
    const ids = data.map(obj => {
        return obj.id
    })
    return (
        <div>
            <div className="row">
                {
                    data.map((obj, i) => {
                        return <TeamCard key={i} data={obj} modelOpen={modelOpen} setModelOpen={setModelOpen} detail={detail} setDetail={setDetail} />

                    })
                }
            </div>
            <div className={`showCardData ${ids.indexOf(modelOpen) >= 0 ? 'd-block' : 'd-none'}`}>
                {
                    detail
                }
            </div>
        </div>
    );
}

export default RenderThree;