import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
    let pokemonName = 'charmeleon';
    const { data, isLoading, hasError, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ pokemonName }`);
 
    return (
        <>
            <h1>Información de Pokémon</h1>
            <hr />

            { isLoading && <p>Cargando...</p>}

            {/* <pre>{ JSON.stringify(data, null, 2) }</pre> */}

            <h2>{ data?.name }</h2>
            <img src={ data?.sprites.other.dream_world.front_default } alt="" />
        
        </>
    
  )
}
