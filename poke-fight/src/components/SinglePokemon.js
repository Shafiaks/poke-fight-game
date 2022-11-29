import React from 'react';
import {useParams} from 'react-router-dom';

function SinglePokemon() {
    const {id} =useParams();

  return (
    <div>
         {`Single View of pokemon with id ${id}`}
    </div>
  )
}

export default SinglePokemon
