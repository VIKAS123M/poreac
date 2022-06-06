import React from "react";
import ReactDOM from "react-dom";
import Title from "./components/Title";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Deck from "./components/Deck";
import { getDeckFromStorage, setDeckToStorage } from "./utils/storage";

import "./styles.css";
import Results from "./components/Results";

function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const [deck, setDeck] = React.useState(getDeckFromStorage());
  //getDeckFromStorage is coming from the utils/storage folder

  //build in of localstorage on deck buttons when browser is loaded.
  React.useEffect(() => {
    setDeckToStorage(deck);
  }, [deck]);

  function handlePokemonsChange(newPokemons) {
    setPokemons(newPokemons);
    //console.log("handlePokemonsChange", newPokemons);
  }

  function handleAddToDeckClick(pokeName) {
    const newDeck = [pokeName, ...deck];
    //the 3 dots are the "rest parameter" eg. it takes the rest of the elements
    const sliceDeck = newDeck.slice(0, 5);
    // to only show 5 elements, we use slice. Could also have used .length = 5
    setDeck(sliceDeck);
  }
  //this function is called below in results

  return (
    <div className="App">
      <Title title="Pokedex" />
      <Deck deckItems={deck} />
      <Search onPokemonsChange={handlePokemonsChange} />
      <Results pokemons={pokemons} onAddToDeckClick={handleAddToDeckClick} />
      <Footer name="Maria" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
