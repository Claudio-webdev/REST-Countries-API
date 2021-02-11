import React from 'react';
import './style.css';

function SelectedCountry({ state, dispatch}) {
    const country = state.selectedCountry
    return (
        <div>
        <button type="button" className="backBtn"><span className="backArrow">&#8592;</span>Back</button>
            <div className="selectedCountry">
                <img src={country.flag} className="nation__flag big" alt=""/>
                <div className="selectedCountry__info">
                    <h2 className="selectedCountry__name">{country.name}</h2>
                    <div className="selectedCountry__imore__info">
                        <div className="col">
                            <ul className="selectedCountry__info_list">
                                <li><b>Native Name: </b>{country.nativeName}</li>
                                <li><b>Population: </b>{country.population.toLocaleString('de-DE')}</li>
                                <li><b>Region: </b>{country.region}</li>
                                <li><b>Sub Region: </b>{country.subregion}</li>
                                <li><b>Capital: </b>{country.capital}</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="selectedCountry__info_list">
                                <li><b>Top Level Domain: </b>{country.topLevelDomain.toLocaleString('de-DE')}</li>
                                <li className="arrayInfo"><b>Currencies: </b>{country.currencies.map((el) => <p className="single_info">{el.name},</p>)}</li>
                                <li className="arrayInfo"><b>Languages: </b>{country.languages.map((el) => <p className="single_info">{el.name},</p>)}</li>
                            </ul>   
                        </div>
                    </div>
                    <div className="selectedCountry__borders">
                        <span>Border Countries</span>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default SelectedCountry;
