import React, { useEffect, useState } from 'react';
import classes from "./PokemonInfoPage.module.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';


const PokemonInfoPage = ({pokemonOne}) => {
    console.log (pokemonOne)
    return (
        <div className={classes.modalWrap}>
             <img className={classes.imgPok} src={pokemonOne.sprites.other.dream_world.front_default} alt="pokemon"/>
             <p>Name: {pokemonOne.name}</p>
             <p>Type:{pokemonOne.types.map(value=> value.type.name).join(', ')}</p>
             <p>Stats: {pokemonOne.stats.map(value=> value.stat.name).join(', ')}</p>
             <p>Abilities: {pokemonOne.abilities.map(value => value.ability.name).join(', ')}</p>
             <p>Weight: {pokemonOne.weight}</p>

        </div>
    );
};

export default PokemonInfoPage;