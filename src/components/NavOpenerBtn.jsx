import React from 'react';

function NavOpenerBtn({active,setActive}) {
    return (
        <button className='btn btn-primary btn-myRound text-light p-3' onClick={()=>setActive(!active)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">

            <g id="menu-8" className={active?'active':''} transform="translate(0 -4)">
                <line id="_3" data-name="3" x2="22" transform="translate(1 19)" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                    strokeWidth="2" />
                <line id="_2" data-name="2" x2="22" transform="translate(1 5)" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                    strokeWidth="2" />
                <line id="_1" data-name="1" x2="15" transform="translate(1 12)" fill="none" stroke="currentColor"
                    strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                    strokeWidth="2" />
            </g>
        </svg>
    </button>
    );
}

export default NavOpenerBtn;