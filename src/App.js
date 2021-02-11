import React, { useEffect, useReducer } from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';

//import Function
import reducer from './reducer'

const initialState = {
  allCountries: [],
  filter: '',
  isSelected: false,
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = `https://restcountries.eu/rest/v2/${state.filter}`


  useEffect(() => {
    fetch(url)
    .then((response) => {
      if (response.ok) { 
       return response.json();
      }
      return Promise.reject(response); 
    })
      .then(response => dispatch({ type: 'GET_RIGHT_COUNTRIES', payload: response }))
      .catch((error) => {
        console.log('Something went wrong.', error); 
      })
  }, [url])
  console.log(url)
  if (!state.allCountries) {
    return (
      <FontAwesomeIcon icon={faSpinner} spinner/>
    )
  }
  console.log(state.allCountries)
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <MainContainer 
          state={state}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default App;
