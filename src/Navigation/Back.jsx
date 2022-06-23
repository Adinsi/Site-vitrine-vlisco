import React, { useState } from 'react';
import '../css/back.css'
import Texte from './Texte';

function Back() {

    // Mes states//
    const [titre, setTitre] = useState({
        nom1: "La maison des pagnes du Benin",
        nom2: "Moouth Design Housse"
    });

    // Mes Fonctions//

  const HandleClick =(titre3,titre4) => {
     
      const nouveauTitre = { ...titre };
      
      nouveauTitre.nom1 = titre3;
      nouveauTitre.nom2 =titre4
      setTitre(nouveauTitre)

        
   
    }
    
  return (
      <div className="back">
          <div className="texte">

              <Texte
                  nom={titre.nom1}
                  pre={titre.nom2}
                  className ='texteContent'
              />
        
              <div className="button">
                  
                  <button onClick={()=>HandleClick('Explorer notre site vitrine ','Christem Adinsi')}  >En savoir plus</button>
              </div>
              
          </div>
   </div>
  )
}

export default Back
