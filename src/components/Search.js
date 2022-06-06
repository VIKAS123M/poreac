import React from "react";
import pokemons from "json-pokemon";
import PropTypes from "prop-types";

function filterPokemonsByName(filterName) {
  return pokemon => {
    const lowerCasePokemonName = pokemon.name.toLowerCase();
    const lowerCaseFilterName = filterName.toLowerCase();
    return lowerCasePokemonName.includes(lowerCaseFilterName);
  };
}
//this function is used below under .filter
// startsWith could also be replaced with .includes() to have all pokemons where ex. pi is includes. Otherwise it is only the pokemons that starts with pi.

function Search(props) {
  function handleChange(event) {
    const value = event.target.value.toLowerCase();

    if (value !== "") {
      const filteredPokemons = pokemons
        .filter(filterPokemonsByName(value))
        // see how this could also have been written in one line at the end of sheet
        .map(pokemon => pokemon.name)
        // use map to return all elements and then only the pokemon names
        .sort((firstName, secondName) => {
          const lowerCaseFirstName = firstName.toLowerCase();
          const lowerCaseSecondName = secondName.toLowerCase();
          if (
            lowerCaseFirstName.startsWith(value) &&
            lowerCaseSecondName.startsWith(value)
          ) {
            return lowerCaseFirstName.localeCompare(lowerCaseSecondName);
          }
          // only first starts with value
          if (lowerCaseFirstName.startsWith(value)) {
            return -1;
          }
          // only second starts with value
          if (lowerCaseSecondName.startsWith(value)) {
            return 1;
          }
          // both don't start with value -> sort by name
          return lowerCaseFirstName.localeCompare(lowerCaseSecondName);
        });

      props.onPokemonsChange(filteredPokemons);
    } else {
      props.onPokemonsChange([]);
    }
  }

  return (
    <>
      <h2>Find your Pokemon!</h2>
      <label>
        Search:
        <input onChange={handleChange} placeholder="Type in Pokemon" />
      </label>
    </>
  );
}

Search.propTypes = {
  onPokemonsChange: PropTypes.func.isRequired
};

export default Search;

/*   const filteredPokemons = pokemons
//.filter(pokemon =>
  pokemon.name.toLowerCase().startsWith(value.toLowerCase())
)
.map(pokemon => pokemon.name);
props.onPokemonsChange(filteredPokemons);
} */
