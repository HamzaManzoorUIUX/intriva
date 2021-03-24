import React from 'react';

function NavOpenerBtn({active,setActive}) {
    return (
        <button className={`btn btn-primary btn-myRound hamburger hamburger--collapse text-light ${active?'active is-active':'nonActive'}`} onClick={()=>setActive(!active)}>
         <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
    </button>

    );
}

export default NavOpenerBtn;