import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function FilterByRegion({ dispatch }) {
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const handleClick = (e, el) => {
        e.preventDefault()
        dispatch({ type: 'CHANGE_FILTER' , payload:el})
    }

    return (
    <div className="dropdown">
        <button className="dropbtn">
            Filter by Region
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-arrow"/>
        </button>
        <div className="dropdown-content">
            {regions.map((el) => (
                <a href="/" key={el} onClick={(e) => handleClick(e, el)}>{el}</a>
            ))}
        </div>
    </div>
    );
}

export default FilterByRegion;
