import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

const AllPokemon = ({
    pokemon,
    getMorePokemon,
}) => {
    return (
        <>
            {
                pokemon.map((pk) => {
                    return (
                        <p key={pk.name}>
                            <Link
                                to={`/pokemon/${pk.id}`}
                            >
                                {pk.name}
                            </Link>
                        </p>
                    );
                })
            }
            <Button
                variant={'contained'}
                onClick={getMorePokemon}
            >
                Load More Pokemon
            </Button>
        </>
    )
};

export default AllPokemon;
