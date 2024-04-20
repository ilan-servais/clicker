// Définition des éléments de la boutique
const BOUTIQUE_ELEMENTS = [
    { name: "Potion", cost: 10, effect: () => { utiliserPotion() } },
    { name: "Pokeball", cost: 20, effect: () => { utiliserPokeball() } }
];

const BOUTIQUE_BONUS = [
    { name: "Evoli", cost: 50, effect: () => { recruterEvoli() } },
    { name: "Pikachu", cost: 100, effect: () => { recruterPikachu() } }
];

// Fonction pour utiliser une potion
function utiliserPotion() {
    // Augmente temporairement le nombre de points gagnés par clic
    pointsParClic *= 2;
    // Remet le nombre de points gagnés par clic à sa valeur normale après un certain temps
    setTimeout(() => {
        pointsParClic /= 2;
    }, 10000); // par exemple, l'effet dure 10 secondes
}

// Fonction pour utiliser une pokeball
function utiliserPokeball() {
    // Ajoute un Pokémon bonus à l'équipe
    // Par exemple, ajoute un événement qui génère des points automatiquement toutes les secondes
    const pokemonBonusInterval = setInterval(() => {
        essences += 1; // par exemple, le pokemon bonus génère 1 essence par seconde
        updateDisplay();
    }, 1000); // génère des points toutes les secondes
    // Arrête de générer des points automatiquement après un certain temps
    setTimeout(() => {
        clearInterval(pokemonBonusInterval);
    }, 30000); // par exemple, l'effet dure 30 secondes
}

// Fonction pour recruter Évoli
function recruterEvoli() {
    // Évolue aléatoirement en l'un des huit Pokémon d'Évoli, chaque évolution offrant un avantage unique pendant un certain temps
    const evoliEvolutions = ["Voltali", "Pyroli", "Aquali", "Mentali", "Noctali", "Phyllali", "Givrali", "Lockpin"];
    const randomEvolution = evoliEvolutions[Math.floor(Math.random() * evoliEvolutions.length)];
    // Applique l'effet de l'évolution choisie
    switch (randomEvolution) {
        case "Voltali":
            // Effet de Voltali : augmente temporairement le nombre de points par clic
            pointsParClic *= 2;
            // Remet le nombre de points par clic à sa valeur normale après un certain temps
            setTimeout(() => {
                pointsParClic /= 2;
            }, 10000); // par exemple, l'effet dure 10 secondes
            break;
        case "Pyroli":
            // Effet de Pyroli : génère des points passifs à intervalles réguliers
            const pyroliInterval = setInterval(() => {
                essences += 1; // par exemple, Pyroli génère 1 essence par seconde
                updateDisplay();
            }, 1000); // génère des points toutes les secondes
            // Arrête de générer des points automatiquement après un certain temps
            setTimeout(() => {
                clearInterval(pyroliInterval);
            }, 30000); // par exemple, l'effet dure 30 secondes
            break;
        // Ajoute d'autres cas pour les autres évolutions d'Évoli avec leurs effets respectifs
    }
}

// Fonction pour recruter Pikachu
function recruterPikachu() {
    // Pikachu génère des points passifs à intervalles réguliers, même lorsque vous ne cliquez pas
    // Par exemple, ajoute un événement qui génère des points passifs toutes les secondes
    const pikachuInterval = setInterval(() => {
        essences += 2; // par exemple, Pikachu génère 2 essences par seconde
        updateDisplay();
    }, 1000); // génère des points toutes les secondes
    // Arrête de générer des points automatiquement après un certain temps
    setTimeout(() => {
        clearInterval(pikachuInterval);
    }, 60000); // par exemple, l'effet dure 60 secondes
}




// Fonction pour afficher les éléments de la boutique
//
// Fonction pour afficher les éléments de la boutique
function afficherBoutique() {
    const boutiqueElement = document.getElementById("boutique");
    
    // Affiche les éléments
    BOUTIQUE_ELEMENTS.forEach(element => {
        const item = document.createElement("div");
        item.className = "boutique-item";
        item.innerText = `${element.name} (${element.cost} essences)`;
        item.onclick = () => acheterElement(element);
        boutiqueElement.appendChild(item);
    });

    // Affiche les bonus
    BOUTIQUE_BONUS.forEach(bonus => {
        const item = document.createElement("div");
        item.className = "boutique-item";
        item.innerText = `${bonus.name} (${bonus.cost} essences)`;
        item.onclick = () => acheterBonus(bonus);
        boutiqueElement.appendChild(item);
    });
}

// Fonction pour acheter un élément 
function acheterElement(element) {
    if (essences >= element.cost) {
        essences -= element.cost;
        element.effect();
        updateDisplay();
    } else {
        console.log("Vous n'avez pas assez d'essences pour acheter cet élément.");
    }
}

// Fonction pour acheter un bonus 
function acheterBonus(bonus) {
    if (essences >= bonus.cost) {
        essences -= bonus.cost;
        bonus.effect();
        updateDisplay();
    } else {
        console.log("Vous n'avez pas assez d'essences pour acheter ce bonus.");
    }
}

// Appel à la fonction d'affichage 
afficherBoutique();
