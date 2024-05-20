
export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            // throw new Error('Action.type = ABC no está implementada');
            return [ ...initialState, action.payload ];
        case '[TODO] Remove Todo':
            return  initialState.filter( todo => todo.id !== action.payload);

        default:
            return initialState;
    }

}