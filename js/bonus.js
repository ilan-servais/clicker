//POKÉ
// Sélectionne l'élément avec l'ID "pokeball"
const pokeballBonus = document.getElementById("pokeball");

// Ajoute un écouteur d'événements sur cet élément
pokeballBonus.addEventListener("click", function() {
    // Vérifie si l'utilisateur a assez d'essences pour acheter le bonus
    if (essences >= 20) {
        // Déduit le coût du bonus des essences
        essences -= 20;
        // Augmente la valeur de chaque clic de 2
        clickAlchemy += 2;
        // Met à jour l'affichage
        updateDisplay();
    } else {
        // Affiche un message si l'utilisateur n'a pas assez d'essences
        alert("Vous n'avez pas assez d'essences pour acheter ce bonus !");
    }
});

//HONOR
// Sélectionne l'élément avec l'ID "pokeball"
const pokeballBonus2 = document.getElementById("honorball");

// Ajoute un écouteur d'événements sur cet élément
pokeballBonus2.addEventListener("click", function() {
    // Vérifie si l'utilisateur a assez d'essences pour acheter le bonus
    if (essences >= 50) {
        // Déduit le coût du bonus des essences
        essences -= 50;
        // Augmente la valeur de chaque clic de 2
        clickAlchemy += 5;
        // Met à jour l'affichage
        updateDisplay();
    } else {
        // Affiche un message si l'utilisateur n'a pas assez d'essences
        alert("Vous n'avez pas assez d'essences pour acheter ce bonus !");
    }
});

//SUPER
// Sélectionne l'élément avec l'ID "pokeball"
const pokeballBonus3 = document.getElementById("superball");

// Ajoute un écouteur d'événements sur cet élément
pokeballBonus3.addEventListener("click", function() {
    // Vérifie si l'utilisateur a assez d'essences pour acheter le bonus
    if (essences >= 80) {
        // Déduit le coût du bonus des essences
        essences -= 80;
        // Augmente la valeur de chaque clic de 2
        clickAlchemy += 8;
        // Met à jour l'affichage
        updateDisplay();
    } else {
        // Affiche un message si l'utilisateur n'a pas assez d'essences
        alert("Vous n'avez pas assez d'essences pour acheter ce bonus !");
    }
});

//HYPER
// Sélectionne l'élément avec l'ID "pokeball"
const pokeballBonus4 = document.getElementById("hyperball");

// Ajoute un écouteur d'événements sur cet élément
pokeballBonus4.addEventListener("click", function() {
    // Vérifie si l'utilisateur a assez d'essences pour acheter le bonus
    if (essences >= 100) {
        // Déduit le coût du bonus des essences
        essences -= 100;
        // Augmente la valeur de chaque clic de 2
        clickAlchemy += 5;
        // Met à jour l'affichage
        updateDisplay();
    } else {
        // Affiche un message si l'utilisateur n'a pas assez d'essences
        alert("Vous n'avez pas assez d'essences pour acheter ce bonus !");
    }
});
//MASTER
// Sélectionne l'élément avec l'ID "pokeball"
const pokeballBonus5 = document.getElementById("masterball");

// Ajoute un écouteur d'événements sur cet élément
pokeballBonus5.addEventListener("click", function() {
    // Vérifie si l'utilisateur a assez d'essences pour acheter le bonus
    if (essences >= 12) {
        // Déduit le coût du bonus des essences
        essences -= 120;
        // Augmente la valeur de chaque clic de 2
        clickAlchemy += 5;
        // Met à jour l'affichage
        updateDisplay();
    } else {
        // Affiche un message si l'utilisateur n'a pas assez d'essences
        alert("Vous n'avez pas assez d'essences pour acheter ce bonus !");
    }
});