import React from 'react';

function London(props) {
    return (
        <video autoPlay onEnded={() => props.videos()} muted loop className='headerHome-video'>
                    <source src={props.videoSrc} type='video/mp4' />
                </video>
    );
}

export default London;