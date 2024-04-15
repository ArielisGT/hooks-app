import React from 'react'

export const PokemonCard = ( {id, name, sprites = []} ) => {
  return (
    <>
        <h2>ID: { id } Name: { name }</h2>

        <div className="container">
            {
                sprites.map( sprite => (
                    <img key={ sprite } src={ sprite } alt="" />

                ))
            }
        </div>


    </>
  )
}
