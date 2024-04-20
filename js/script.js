// Initial state
let essences = 0;
let elements = [];
let bonuses = [];
let pointsParClic = 1;

// Load state from localStorage
if(localStorage.getItem("pokemonClickerSave")) {
    const saveData = JSON.parse(localStorage.getItem("pokemonClickerSave"));
    essences = saveData.essences;
    elements = saveData.elements;
    bonuses = saveData.bonuses;
}

// Update display
function updateDisplay() {
    document.getElementById("essenceDisplay").innerText = `Essences: ${essences}`;
    document.getElementById("elementsContainer").innerHTML = elements.map(element => `<div class="element">${element.name} (${element.cost} Essences)</div>`).join("");
}

// Click to alchemize
function clickAlchemy() {
    essences += pointsParClic;
    updateDisplay();
}

// Save state to localStorage every 30 seconds
setInterval(() => {
    localStorage.setItem("pokemonClickerSave", JSON.stringify({ essences, elements, bonuses }));
}, 30000);

// Initial display update
updateDisplay();

// Add event listener to alchemy image for shake effect and clickAlchemy function
document.getElementById("alchemyImage").addEventListener("click", function() {
    // Call clickAlchemy function
    clickAlchemy();
    
    // Add 'shake' class to the image
    this.classList.add("shake");

    // Remove 'shake' class after a short duration
    setTimeout(() => {
        this.classList.remove("shake");
    }, 500); // Duration of the shake animation in milliseconds
});
