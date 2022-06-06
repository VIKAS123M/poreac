import React from "react";
import PokemonInfo from "./PokemonInfo";
import PropTypes from "prop-types";

//temporary
//const pokemons = ["Pikachu", "Marshadow", "Drampa"];

function Results(props) {
  const [showPokemon, setShowPokemon] = React.useState(null);

  if (showPokemon) {
    return (
      <div>
        <PokemonInfo pokemon={showPokemon} />
        <button onClick={handleAddClick}>add to deck</button>
        <br /> <button onClick={handleBackClick}>Back</button>
      </div>
    );
  }

  function handleAddClick() {
    props.onAddToDeckClick(showPokemon);
  }
  //onAddToDeckClick is the connection to the index.js

  function handleBackClick() {
    return setShowPokemon(null);
  }

  function handleClick(pokemon) {
    return function() {
      setShowPokemon(pokemon);
    };
  }

  return (
    <div>
      {props.pokemons.map(pokemon => (
        <button onClick={handleClick(pokemon)} key={pokemon}>
          {pokemon}
        </button>
      ))}
      <div className="resultButton">
        {props.pokemons.length === 0 && <div> Sorry, no Pokemons found </div>}
      </div>
    </div>
  );
}

Results.propTypes = {
  pokemons: PropTypes.array.isRequired
};
//Proptypes is a help for developers, to make sure the property is there. Results is the function,

export default Results;
