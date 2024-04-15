import React from 'react';
import { useCounter } from '../hooks/useCounter';
// import { useFetch } from '../hooks/useFetch';
import {  useFetchWithCache } from '../hooks/useFetchWithCache';
import { PokemonCard } from '../components/PokemonCard';


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement} = useCounter(1);
    // const { data, isLoading, hasError, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
    const { data, isLoading, hasError, error } = useFetchWithCache(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
 
    return (
        <>
            <h1>Información de Pokémon</h1>
            <hr />

            { isLoading && <p>Cargando...</p>}

            <PokemonCard 
                id={ counter }
                name={ data?.name }
                sprites= {[
                    data?.sprites.front_default,
                    data?.sprites.front_shiny,
                    data?.sprites.back_default,
                    data?.sprites.back_shiny,

                ]}
            />

            <button
                className='btn btn-primary me-3'
                onClick={ () => counter > 1 ? decrement() : null }
            >
                Anterior
            </button>
            <button
                className='btn btn-primary me-3'
                onClick={ () => increment() }
            >
                Siguiente
            </button>
        
        </>
    
  )
}
