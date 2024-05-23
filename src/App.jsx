import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import { getPokemon } from './api/api.js';
import AllPokemon from './components/AllPokemon.jsx';
import SinglePokemon from './components/SinglePokemon.jsx';

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const responsePokemon = await getPokemon();

                setPokemon(responsePokemon);
            } catch (e) {
                console.error('Failed to fetch pokemon to initialize application.');
                console.error(e);
            }
        };

        fetchPokemon();
    }, []);

    const getMorePokemon = async () => {
        try {
            const responsePokemon = await getPokemon(page + 1);
            setPage(page + 1);
            setPokemon([...pokemon, ...responsePokemon]);
        } catch (e) {
            console.error('Failed to fetch more pokemon on request.');
            console.error(e);
        }
    };

    return (
        <div className={classes.centered_container}>
            <Typography variant={'h2'} component={'h2'}>
                Pokedex V2
            </Typography>
            <main className={`${classes.main} ${classes.centered_container}`}>
                <Routes>
                    <Route
                        path={'/pokemon/:pokeId'}
                        element={<SinglePokemon />}
                    >
                    </Route>
                    <Route
                        path={'*'}
                        element={
                            <AllPokemon
                                pokemon={pokemon}
                                getMorePokemon={getMorePokemon}
                            />
                        }
                    >
                    </Route>
                </Routes>
            </main>
        </div>
    );
}

export default App;
