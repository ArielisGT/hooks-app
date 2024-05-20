import { useEffect, useReducer } from "react"
import { todoReducer } from "../09-useReducer/todoReducer";


const initialLoad = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    //  console.log(todos);
};

export const useTodos = () => {
    
    const initialState = [];

 // const [state, dispatch] = useReducer( reducer, initialArg,  init? )
 // const [todos, dispatch] = useReducer( todoReducer, initialState );
 // const [todos, dispatch] = useReducer( todoReducer, initialState, initialLoad );
    const [todos, dispatch] = useReducer( todoReducer, initialState, initialLoad );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) || []);
        // console.log(todos);
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch( action );
    };
    
    const handleDeleteTodo = ( id ) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }
        dispatch( action );
        //  console.log(id);
    };

    const handleToggleTodo = ( id ) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatch( action );
    };

    return {
        initialState,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}



