import React from 'react';
import ScreenSide from "../assets/img/Screen Shot 2021-03-10 at 02.34.28.png";

function StickyFooter(props) {
    return (
        <img src={ScreenSide} className={`ScreenSide ${props.home!==undefined?'active':''} ${props.currentPage===2?'mt-fotPic':''}`} alt='img' />

    );
}

export default StickyFooter;