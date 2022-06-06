import React from "react";

/*function Deck() {
  const pokeDeck = ["pikachu", "XX", "Bulbasaur", "Maria", "Annika"];
  const pokeDeckElements = pokeDeck.map(function(element) {
    return <button className="deckbtn">{element}</button>;
  });
  return pokeDeckElements;
}*/

function Deck({ deckItems }) {
  return (
    <div>
      {deckItems.map((deckItem, index) => (
        <span key={deckItem + index} className="DeckItem">
          {deckItem}
        </span>
      ))}
    </div>
  );
}

export default Deck;
