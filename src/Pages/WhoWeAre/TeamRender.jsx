import React, { useEffect, useState } from 'react';
import RenderThree from './RenderThree';
import TeamData from "./TeamData.json";
function TeamRender(props) {
    const [modelOpen, setModelOpen] = useState(null)
    const [detail, setDetail] = useState('')
    const [result, setResult] = useState(null)
    useEffect(() => {
        if (result === null) {
            setResult(new Array(Math.ceil(TeamData.length / 3))
            .fill()
            .map(_ => TeamData.splice(0, 3)))
        }
    },[result])
    return (
        <div>
            {
                result!==null&&result!==undefined?
                result.map((obj, i) => {
                    return <RenderThree data={obj} key={i} modelOpen={modelOpen} setModelOpen={setModelOpen} detail={detail} setDetail={setDetail} />
                }):<></>

            }

        </div>

    );
}

export default TeamRender;