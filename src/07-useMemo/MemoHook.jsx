import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"

//declaramos una función que consuma bastantes recursos del PC:

const calculateValue = ( iterationNumber = 1 ) => {

    for( let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamossss');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [show, setShow ] = useState(true);

    // UseMemo: const cachedValue = useMemo(() => calculateValue, [dependencies])
    // Llama a useMemo en el nivel superior de tu componente para guardar en caché un cálculo entre rerenderizados:

    const cachedValue = useMemo( () => calculateValue( counter ), [counter] )

  return (
    <>
        <h1>Counter: <code>{ counter }</code> </h1>
        <hr />

        <h4>{ cachedValue }</h4>

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
