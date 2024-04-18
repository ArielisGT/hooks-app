import React from "react";

//Para que funcione el useCallback en el padre, hay que memoizar el componente en el hijo:

export const ShowIncrement = React.memo( ({ increment }) => {

    console.log('Me volvi a generar');

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={ () => {
                    increment( 5 );
                }}
            >
                Incrementar
            </button>
        </>
    )
} );
