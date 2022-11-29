import React from 'react';
import DataJson from '../DataJson.json'

function PokemonList() {
   
//   {
//     console.log(DataJson[0].name.english,DataJson.length);
//   }
  return (
    <div>
      <h3>Pokemon List</h3>
          { DataJson.map( element =>(
            <div>
                <div key={element.id}> {element.name.english} </div>
                <div> <a href="#">show details</a></div>
            </div>
          ))
        }
    </div>
  )
}

export default PokemonList
