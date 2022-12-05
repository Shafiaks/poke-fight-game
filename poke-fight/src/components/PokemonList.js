import React from 'react';
import { useState,useEffect } from 'react';
import DataJson from '../DataJson.json';
import '../styles.css'
import { NavLink } from 'react-router-dom';
import SinglePokemon from './SinglePokemon';
import axios from 'axios';

function PokemonList({DataJson}) {
    console.log(DataJson)


    const [readMore, setReadMore] = useState(false);

    const linkName = readMore ? 'Show Less << ' : 'Show More >> ';

     let imgNum,imgUrl;
    const handleImgUrl = (id)=>{
        if(id<10 ) imgNum='00'+id;
        else if(id>=10 && id < 100) imgNum='0'+id;
        else imgNum=id;
        imgUrl='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+imgNum+'.png'
        return imgUrl;
     };
   
       // console.log(DataJson[0].base,DataJson.length);
   
      
    return (
        <div >
            <h2>Pokemon List</h2>
            <div className='grid-wrapper'>
            {DataJson.map(element => (
                <div className='name-list' key={element.id}>
                    <div>
                        <img className='poke-img' src={handleImgUrl(element.id)} alt={element.name.english} />
                        <div className='poke-Name' >{element.name.english}</div>
                        <NavLink to={`/pokemon/${element.id}`} onClick={() => {setReadMore(prev => !prev)}}><span>{linkName}</span>
                        </NavLink>
                        {readMore && <SinglePokemon pokemon={element}/> }
                    </div>
                </div>
            ))
            }
             </div>
        </div>
    )
}

export default PokemonList
