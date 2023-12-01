function NavBar({ pokemonIndex, setPokemonIndex, pokemonListLength }){
    return(
        <div>
            {pokemonIndex > 0 ? <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>Précédent</button> : null}
            {pokemonIndex < pokemonListLength - 1 ? <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>Suivant</button> : null}
        </div>
        )
}

export default NavBar