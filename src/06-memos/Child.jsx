import { memo } from 'react'

// Prefijando el componente como parámetro de la función memo, evita un nuevo renderizado dentro del padre, optimizando el rendimiento.

export const Child = memo(( { value }) => {

    console.log('Me volví a dibujar');

  return (
    <code>{  value }</code>
)
});
