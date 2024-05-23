import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePokemon } from '../api/api.js';

const SinglePokemon = () => {
    const { pokeId } = useParams();
    const [ pokemon, setPokemon ] = useState(null);

    useEffect(() => {
        const fetchSinglePokemon = async () => {
            try {
                const responsePokemon = await getSinglePokemon(pokeId);

                setPokemon(responsePokemon);
            } catch (e) {
                console.error(`Failed to fetch single pokemon in component.`);
            }
        };

        fetchSinglePokemon();
    }, []);

    return (
        <code>
            {JSON.stringify(pokemon)}
        </code>
    );
};

export default SinglePokemon;
