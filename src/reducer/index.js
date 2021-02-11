const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_RIGHT_COUNTRIES':
            return {
                ...state,
                allCountries: action.payload,
            }
        case 'CHANGE_FILTER':
            return {
                ...state,
                filter: `region/${action.payload}`,
            }
        case 'LOOKING_FOR_THIS_COUNTRY':
            return {
                ...state,
                inputCountry: action.payload,
            }
        case 'GET_THE_SELECTED_COUNTRY':
            return {
                ...state,
                selectedCountry: action.payload,
                isSelected: true,
            }
        case 'SHOW_ME_THIS_COUNTRY':
            return {
                ...state,
                filter: `name/${state.inputCountry}`,
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer