import React from 'react';
import './style.css';

function Nation({item, dispatch}) {
    const handleClick = (e) => {
        e.preventDefault()
        dispatch({ type: 'GET_THE_SELECTED_COUNTRY', payload: item})
    }
    
    return (
     <a href="/" className="nation light_moode" onClick={handleClick}>
        <img src={item.flag} alt={`flag ${item.name}`} className="nation__flag"/>
        <div className="nation__info">
            <h2>{item.name}</h2>
            <ul className="nation__info_list">
                <li><b>Population: </b>{item.population.toLocaleString('de-DE')}</li>
                <li><b>Region: </b>{item.region}</li>
                <li><b>Capital: </b>{item.capital}</li>
            </ul>
        </div>
     </a>
    );
}

export default Nation;
