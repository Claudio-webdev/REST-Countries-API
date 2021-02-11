import React from 'react';
import FIlterByRegion from './FilterByRegion';
import SerachingBar from './SearchingBar';
import  './style.css';

function Navigation({ dispatch, state }) {
    return (
        <div className="navigation">
            <SerachingBar
                dispatch={dispatch}
                state={state}
            />
            <FIlterByRegion
                dispatch={dispatch}
            />
        </div>
    );
}

export default Navigation;
