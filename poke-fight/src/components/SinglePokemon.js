import { React, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function SinglePokemon({ DataJson }) {
    const { id } = useParams();
    const [showBase, setShowBase] = useState(false);
    const [showType, setShowType] = useState(false);

    const ShowBaseMore = showBase ? 'Show Less << ' : 'Show More  >> ';
    const ShowTypeMore = showType ? 'Show Less << ' : 'Show More  >> ';
    let imgNum;

    // array.find() -> takes a function and finds the first item in that array that matches
    const selectedPokemon = DataJson.find(element => element.id == id)
    console.log("selectedPokemon  ", selectedPokemon);
     const imgPrefix = ()=>{
        if(selectedPokemon.id<10 ) imgNum='00'+selectedPokemon.id;
        else if(selectedPokemon.id>=10 && selectedPokemon.id < 100) imgNum='0'+selectedPokemon.id;
        else imgNum=selectedPokemon.id;
     };

    return (
        <div className='card-component'>
            {  selectedPokemon ?
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        width="300"
                        image={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgNum}+id.png`}
                        alt="pokemon"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {selectedPokemon.name.english}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" >
                            <h5><NavLink to={`/pokemon/${id}/:info`} onclick={() => { setShowBase(prev => !prev) }} > {ShowBaseMore} </NavLink> </h5>
                            <ul>
                                { showBase &&
                                Object.keys(selectedPokemon.base).map(key => <li> {key + " : " + selectedPokemon.base[key]}</li>) 
                              }
                            </ul>
                        </Typography>

                        {/* <Typography variant="body2" color="text.secondary" >
                            <h5><NavLink onclick={() => { setShowType(prev => !prev) }} to={`/pokemon/${selectedPokemon.id}`}>TYPE :  {ShowTypeMore}</NavLink> </h5>
                            <ul>
                                {showType ? Object.keys(selectedPokemon.type).map(key => <li>{selectedPokemon.type[key]}</li>) : "Loading..."}
                            </ul>
                        </Typography> */}
                    </CardContent>
                    <CardActions>
                        <Button size="small" onclick={() =>{setShowType(prev => !prev) }}> TYPE :  {ShowTypeMore} </Button>
                          <ul>
                               {
                               showType && Object.keys(selectedPokemon.type).map(key => <li>{selectedPokemon.type[key]}</li>)
                              }
                         </ul>
                    </CardActions>
                </Card>
                : "Loading ..."  
                }

            {/* <Link to={`/pokemon/${id}/name`}>Go to detailed view</Link> */}
        </div>
    )
}


export default SinglePokemon
