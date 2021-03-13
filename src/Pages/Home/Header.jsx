import React from 'react';
import Londan from "../../assets/videos/London City - The United Kingdom_2.mp4";

function Header(props) {
    return (
        <div className='headerHome pt-4'>
            <video autoPlay muted loop className='headerHome-video'>
                <source src={Londan} type='video/mp4' />
            </video>
            <div className="z-10 position-relative">
                <h1 className="text-right font-weight-thin f-93">
                    we provide
                </h1>
                <h3 className="text-right font-weight-light text-light">
                opportunistic capital, timely investing decisions and differentiated solutions
                </h3>
            </div>
        </div>
    );
}

export default Header;