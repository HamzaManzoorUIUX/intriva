import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'
function MyNavBar(props) {
    return (
            <>
            <div className='sticky-top'>
                <div className="container">
                    <div className="myNavBar">
                        <Link to='/'>
                            <img src={Logo} className='myNavBar-logo' alt="logo" />
                        </Link>
                        <button className='btn btn-primary'>
                            
                        </button>
                    </div>
                </div>
            </div>

            </>
    );
}

export default MyNavBar;