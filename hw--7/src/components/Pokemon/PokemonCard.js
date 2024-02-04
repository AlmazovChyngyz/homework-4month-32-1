import React, { useEffect, useState } from 'react';
import classes from './PokemonCard.module.css';
import axios from 'axios';
import Modal from '../modal/Modal';
import PokemonInfoPage from '../../pages/pokemonInfoPage/PokemonInfoPage'
import { Link } from 'react-router-dom';


const PokemonCard = ({ pokemon }) => {
    const [ pokemonOne, setPokemonOne ] = useState(null);
    console.log(pokemonOne, 'pokemonOnepokemonOne');
    const [ show, setShow ] = useState(false);
    const handleShow = () => setShow(prevState => !prevState);

    const getPokemon = async(url) => {
        try {
            const { data } = await axios.get(url);
            setPokemonOne(data)
            return console.log(data, 'sdfsdfsdfsdf');;
        } catch(e) {
            console.log('error'.e);
        } finally {
            console.log('final');
        }
    };

    useEffect(() => {
        getPokemon(pokemon.url);
    }, [ pokemon.url ]);


    return (
        <div className={classes.card}>
            <h1>{pokemon.name}</h1>
            {
                pokemonOne ? <img src={pokemonOne.sprites.other.dream_world.front_default} alt="pokemon"/>
                    :<p>l</p>
            }
            <button onClick={handleShow}>Подробнее</button>
            {
                show &&
                <Modal handleShow={handleShow}>
                    <PokemonInfoPage pokemonOne={pokemonOne}/>
                </Modal>
            }

        </div>
    );
};

export default PokemonCard;