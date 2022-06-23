import React from 'react';
import { donnesData } from '../data';
import Elements from './Elements';
import '../css/section.css';

const Section = () => {
    
    const TexteClic = () => {
    
    }
  return (
    <div className='section'>
          
              {donnesData.map((el,index) => {
                  return (
                      <>
                          <Elements 
                              clic ={()=>TexteClic()}
                          key ={index}
                          titre = {el.nom}
                          commande = {el.commande}
                          prix ={el.prix}
                          annee={el.annee}
                          className='sectionContent'

                      />

                          </>
                      

                     
                  )
                 
              })}
          
    </div>
  )
}

export  default Section;
