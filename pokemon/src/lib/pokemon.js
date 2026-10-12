export async function getPokemons() {
  const LATEST_GAMES = "https://pokeapi.co/api/v2/pokemon?limit=50";

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const { results: items } = json;

  return items.map((item) => {
    const { name, url } = item;

    return {
      name,
      image: url,
    };
  });
}

export async function getPokemonsWithImages(pokemons) {
  const res = pokemons.map(async (pokemon) => {
    const response = await fetch(pokemon.image);
    const data = await response.json();
    const {
      sprites: {
        other: {
          home: { front_shiny },
        },
      },
    } = data;
    return {
      name: pokemon.name,
      image: front_shiny,
    };
  });

  return Promise.all(res);
}

export async function getPokemonInfo(pokename) {
  const POKEMON_DETAIL = `https://pokeapi.co/api/v2/pokemon/${pokename}`;

  const rawData = await fetch(POKEMON_DETAIL);
  const json = await rawData.json();

  const image = json.sprites.other.home.front_default;
  const name = pokename

  const MOVE_DETAIL = json.moves[0].move.url
  const rawMove = await fetch(MOVE_DETAIL);
  const jsonMove = await rawMove.json();

  const rawMoves = jsonMove.effect_entries
  const move = rawMoves.find((m) => m.language.name === "en").effect

  return {
    name,
    image,
    move
  };
}
