import React from 'react'

function Texte(props) {
  return (
    <div className={props.className}>
          <h1>{props.nom}</h1>
          <h2>{props.pre }</h2>
    </div>
  )
}

export default Texte
