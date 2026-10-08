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

export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { components } = json;
  const { title, description, criticScoreSummary, images } = components[0];
  const { score } = criticScoreSummary;

  // get the card image
  const cardImage = images.find((image) => image.typeName === "cardImage");
  const { bucketType, bucketPath } = cardImage;
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  const rawReviews = components[3].data.items;

  // get the reviews
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review;
    return { quote, score, date, publicationName, author };
  });

  return {
    img,
    title,
    slug,
    description,
    score,
    reviews,
  };
}
