import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo"

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
];

// Para persistir los TODOs usando localStorage, se cargan inicialmente en la función initialLoad que carga la data inicial en el reducer:
const initialLoad = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    //  console.log(todos);
};

export const TodoApp = () => {
    
 // const [state, dispatch] = useReducer( reducer, initialArg,  init? )
 // const [todos, dispatch] = useReducer( todoReducer, initialState );
    const [todos, dispatch] = useReducer( todoReducer, initialState, initialLoad );


// para persistir la data que vamos creando en el componente AddTodo usamos localStorage:
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

  return (
    <>
        <h1>TodoApp 10,  <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos}
                    onDeleteTodo={ handleDeleteTodo }
                />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <AddTodo 
                    onNewTodo={ handleNewTodo }
                />
            </div>
        </div>
    </>

  )
}
