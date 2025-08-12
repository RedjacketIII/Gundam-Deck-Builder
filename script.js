// ==== State ====
let cardDatabase = [];
let currentDeck = []; // array of card names the user added

// ==== Startup ====
// We used "defer" in the HTML, so DOM is ready when this runs.
document.getElementById("export-button").addEventListener("click", exportDeck);

// Load card data, then render
fetch("cards.jason")
    .then(res => res.json())
    .then(data => {
        cardDatabase = data;
        renderCards();
    })
    .catch(err => {
        console.error("Failed to load cards.json:", err);
        document.getElementById("cards-container").textContent =
            "Could not load cards.json (check file name/path)."; 
    });
    
    // ==== Render all cards into the library ====
    funtion renderCards() {
        const container = document.getElementById("cards-container");
        container.innerHTML = "";

        cardDatabase.forEach((card, idx) => {
            const el = DocumentFragment.createElement("div");
            elclassName = "card";
            el.innerHTML = `
                <h3>${card.name}</h3>
                <p>Type: ${card.type}</p>
                <p>Color: ${card.color}</p>
                <p>Level: ${card.level} | Cost: ${card.cost}</p>
                <p>${card.effect}</p>
                <button data-index="${idx}">Add to Deck</button>
                `;
                // Keep logic in JS: attach listener here
                el.querySelector("button").addEventListener("click", () => addToDeck(card.name));
                container.appendChild(el);
        });

        //==== Deck operations ====
        function addToDeck(cardName){
            // 50-card max
            if (currentDeck.length >= 50) {
                alert("Deck is full (50 cards).");
                return;
            }

            // max 4 copies per card
            const copies = currentDeck.filter(n => n === cardName).length;
            if (copies >= 4) {
                alert("Max 4 copies of a single card.");
                return;
            }
            currentDeck.push(cardName);
            updateDeckList();
        }

        function updateDeckList(){
            const deckList = document.getElementById("deck-list");
        }
    }