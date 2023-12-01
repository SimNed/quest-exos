const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

function PokemonCard() {
    let pokemon = pokemonList[0]
    return(
        <figure>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={`${pokemon.name} profil`} /> : <p>???</p>}
            <figcaption>{pokemon.name.toUpperCase()}</figcaption>
        </figure>
    )
}

export default PokemonCard