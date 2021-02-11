import React from 'react';
import Nation from './Nation';
import Navigation from './Navigation';
import SelectedCountry from './SelectedCountry';
import './style.css';

function MainContainer({ state, dispatch}) {
    if(state.isSelected){
        return (
            <SelectedCountry
                state={state}
                disaptch={dispatch}
            />
        )
    }
    return (
        <React.Fragment>
            <Navigation 
                state={state}
                dispatch={dispatch}
            />
            <div className="inner_box">
                {state.allCountries.map((item) => (
                    <Nation 
                        key={item.numericCode}
                        item={item}
                        dispatch={dispatch}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}

export default MainContainer;
