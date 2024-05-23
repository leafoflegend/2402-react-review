const PAGE_LIMIT = 50;

export const getPokemon = async (startPage = 0) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${PAGE_LIMIT}&offset=${startPage * PAGE_LIMIT}`);
        const data = await response.json();

        return data.results.map((el, idx) => {
            return {
                ...el,
                id: idx + 1,
            };
        });
    } catch (e) {
        console.error(`Failed to fetch pokemon starting at page ${startPage}.`);
        console.error(e);
    }
};

export const getSinglePokemon = async (pokemonId) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();

        return data;
    } catch (e) {
        console.error(`Failed to fetch pokemon with ID ${pokemonId}.`);
        console.error(e);
    }
};
