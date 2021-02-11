import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function SerachingBar({ dispatch, state}) {
    const handleOnChange = (e) => {
        dispatch({ type: 'LOOKING_FOR_THIS_COUNTRY', payload: e.target.value})
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'SHOW_ME_THIS_COUNTRY' })
        document.getElementById('countryForm').value=null;
    }

    return (
        <form className="searchingBar" onSubmit={handleOnSubmit}>
            <input type="text" id="countryForm" className="searchingBar-input" placeholder="Search for a Country..." onChange={handleOnChange}/>
            <FontAwesomeIcon className="searchingBar-lent" icon={faSearch}/>
        </form>
    );
}

export default SerachingBar;