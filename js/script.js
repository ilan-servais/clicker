// Initialisation des données de l'état initial
let essences = 0; // Nombre d'essences
let elements = []; // Liste des éléments
let bonuses = []; // Liste des bonus
let pointsParClic = 1; // Points gagnés par clic

// Charger l'état depuis le stockage local s'il existe
if(localStorage.getItem("pokemonClickerSave")) {
    const saveData = JSON.parse(localStorage.getItem("pokemonClickerSave"));
    essences = saveData.essences;
    elements = saveData.elements;
    bonuses = saveData.bonuses;
}

// Fonction pour sauvegarder l'état actuel dans le stockage local
function saveState() {
    localStorage.setItem("pokemonClickerSave", JSON.stringify({ essences, elements, bonuses }));
}

// Mettre à jour l'affichage
function updateDisplay() {
    document.getElementById("essenceDisplay").innerText = `Essences: ${essences}`;
    document.getElementById("elementsContainer").innerHTML = elements.map(element => `<div class="element">${element.name} (${element.cost} Essences)</div>`).join("");
}

// Fonction pour cliquer et gagner des essences
function clickAlchemy() {
    essences += pointsParClic;
    updateDisplay();
    saveState(); // Sauvegarder l'état après chaque clic
}

// Sauvegarder l'état automatiquement toutes les 30 secondes
setInterval(() => {
    saveState();
}, 30000);

// Mettre à jour l'affichage au chargement de la page
updateDisplay();
