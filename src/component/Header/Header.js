import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    
    return (
        <header>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col">
                        <div className="logo-area">
                           <img src="https://i.ibb.co/Snjf3fp/logo2.png" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="header-right">
                            <div className="d-flex">
                                <a href="/signup">
                                    <button className="signup-btn">Sign Up</button>
                                </a>
                                <a href="/login">
                                    <button>Login</button>
                                </a>
                                <a href="/cart">
                                    <button><FontAwesomeIcon icon={faCartPlus} /> </button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

