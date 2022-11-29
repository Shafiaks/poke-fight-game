import React from 'react';
import { useState } from 'react';
import DataJson from '../DataJson.json'
import '../styles.css'

function PokemonList() {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <p className="extra-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab
            porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
            commodi officia aliquam! Maxime.
        </p>
    </div>
    const linkName = readMore ? 'Read Less << ' : 'Read More >> '
    //   {
    //     console.log(DataJson[0].name.english,DataJson.length);
    //   }
    return (
        <div>
            <h2>Pokemon List</h2>
            {DataJson.map(element => (
                <div className='name-list' key={element.id}>
                    <p>
                        <span className='poke-Name'>{element.name.english}</span>
                        <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><span>{linkName}</span>
                        </a>
                        {readMore && extraContent}
                    </p>
                </div>
            ))
            }
        </div>
    )
}

export default PokemonList
