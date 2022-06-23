import React from 'react'

function Elements(props) {
  return (
    <div onClick={props.clic} className={props.className}>
          
              <h1> {props.titre}</h1>
              <p>Pays d'exportation : {props.commande}</p>
              <span> Prix unitaire : {props.prix}</span>
              <small>Annee de production : { props.annee}</small>
      
    </div>
  )
}

export default Elements
