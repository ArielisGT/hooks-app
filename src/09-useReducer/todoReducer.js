
export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case 'Add Todo':
            // throw new Error('Action.type = ABC no está implementada');
            return [ ...initialState, action.payload ]
        default:
            return initialState;
    }

}