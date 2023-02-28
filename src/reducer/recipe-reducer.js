export const recipeState = {
    query: '',
    selected: 'popular'
}

export const recipeReducer = (state, action) => {
    switch(action.type){
        case 'SELECT_CUISINE_CATEGORY':
            return { ...recipeState, selected: action.payload }
        case 'INPUT_SEARCH_QUERY':
            return { ...recipeState, query: action.payload }
        case 'RESET_STATE':
            return { selected: undefined, query: '' }
        default:
            return state
    }
}