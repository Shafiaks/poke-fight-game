import React from 'react';
import DataJson from '../DataJson.json'
import '../styles.css'

function PokemonList() {
   
//   {
//     console.log(DataJson[0].name.english,DataJson.length);
//   }
  return (
    <div>
      <h3>Pokemon List</h3>
          { DataJson.map( element =>(
            <div key={element.id}>
                <p><span className='poke-Names'>{element.name.english}</span><a href="#">show details</a></p>
            </div>
          ))
        }
    </div>
  )
}

export default PokemonList
