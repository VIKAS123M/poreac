export function getDeckFromStorage() {
    try {
      const deckItem = localStorage.getItem("pokedex-deck");
      const parsed = JSON.parse(deckItem);
      return parsed || [];
    } catch (error) {
      return [];
    }
  }
  
  export function setDeckToStorage(deck) {
    localStorage.setItem("pokedex-deck", JSON.stringify(deck));
  }
  