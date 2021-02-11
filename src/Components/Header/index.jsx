import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import './style.css';

function Header() {
    return (
        <div className="header">
            <h1>Where in the world?</h1>
            <button type="button" className="header__switcher">
                <FontAwesomeIcon icon={faMoon} className="moon"/> Dark Mode
            </button>
            
           
        </div>
    );
}

export default Header;
