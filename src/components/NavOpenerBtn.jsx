import React from 'react';

function NavOpenerBtn({active,setActive}) {
    return (
        <button className={`btn btn-primary btn-myRound hamburger hamburger--collapse text-light ${active===null?'':active?'active is-active':'nonActive'}`} onClick={()=>setActive(!active)}>
         <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
    </button>

    );
}

export default NavOpenerBtn;