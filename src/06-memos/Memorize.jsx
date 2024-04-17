import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Child } from "./Child";

export const Memorize = () => {

    const { counter, increment } = useCounter(0);
    const {show, setShow } = useState(true);

  return (
    <>
        <h1>Counter: <Child value={ counter } /></h1>
        <hr />

        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        >
            +1
        </button>
        <button
            className="btn btn-info"
            onClick={ () => setShow( !show ) }
        >
           Show/Hide { JSON.stringify(show) }
        </button>
    
    </>
)
}
