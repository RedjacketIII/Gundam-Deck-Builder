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