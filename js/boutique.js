// Définition des éléments de la boutique
const BOUTIQUE_ELEMENTS = [
    { name: "Potion", cost: 10, effect: () => { utiliserPotion() }, image: "asset/potion.webp" },
];

const BOUTIQUE_BONUS = [
    { name: "Evoli", cost: 1, effect: () => { recruterEvoli() } },
    { name: "Pikachu", cost: 10, effect: () => { recruterPikachu() } }
];

// Variable pour suivre l'évolution d'Évoli
let evolutionEvoli = "Evoli";

// Objets contenant les chemins d'accès aux images pour chaque évolution d'Évoli
const evolutionImages = {
    "Evoli": "asset/eevee.webp",
    "Voltali": "asset/voltali.webp",
    "Pyroli": "asset/pyroli.webp"
};

// Fonction pour recruter Évoli
function recruterEvoli() {
    // Liste des évolutions d'Évoli
    const evoliEvolutions = ["Evoli", "Voltali", "Pyroli"];
    // Obtient un index aléatoire pour sélectionner l'évolution
    const randomIndex = Math.floor(Math.random() * evoliEvolutions.length);
    // Sélectionne l'évolution à partir de l'index aléatoire
    const evolutionEvoli = evoliEvolutions[randomIndex];

    // Récupère l'image d'Évoli
    const imgEvoli = document.getElementById("evoli-image");
    // Met à jour l'image selon l'évolution sélectionnée
    imgEvoli.src = evolutionImages[evolutionEvoli];
    imgEvoli.alt = evolutionEvoli;
    imgEvoli.className = "bonus-image shake";

    // Supprime la classe de secousse après un certain délai
    setTimeout(() => {
        imgEvoli.classList.remove("shake");
    }, 500);

    // Applique les effets correspondants à chaque évolution
    switch (evolutionEvoli) {
        case "Voltali":
            pointsParClic *= 2;
            setTimeout(() => {
                pointsParClic /= 2;
            }, 10000);
            break;
        case "Pyroli":
            const pyroliInterval = setInterval(() => {
                essences += 1;
                updateDisplay();
            }, 1000);
            setTimeout(() => {
                clearInterval(pyroliInterval);
            }, 30000);
            break;
        // Ajoutez d'autres cas pour les autres évolutions d'Évoli avec leurs effets respectifs
    }
}

// Fonction pour afficher les éléments de la boutique
function afficherBoutique() {
    const boutiqueElement = document.getElementById("boutique");

    // Affiche les éléments
    BOUTIQUE_ELEMENTS.forEach(element => {
        const item = document.createElement("div");
        item.className = "boutique-item";

        // Vérifie si l'élément est une potion
        if (element.name === "Potion") {
            const potionContainer = document.createElement("div");
            potionContainer.className = "potion-container";

            const img = document.createElement("img");
            img.src = element.image;
            img.alt = element.name;
            img.className = "bonus-image";
            potionContainer.appendChild(img);

            // Crée le texte pour l'élément "Potion"
            const potionText = document.createElement("span");
            potionText.innerText = `${element.name} ${element.cost}`;
            potionContainer.appendChild(potionText);

            item.appendChild(potionContainer);

            // Ajout de l'événement de clic pour la potion
            potionContainer.onclick = () => acheterElement(element);
        } else {
            // Création de l'image de l'élément
            const img = document.createElement("img");
            img.src = element.image;
            img.alt = element.name;
            img.className = "bonus-image";
            item.appendChild(img);

            // Ajout du nom et du coût de l'élément
            const itemName = document.createElement("span");
            itemName.innerText = `${element.name}`;
            item.appendChild(itemName);

            const itemCost = document.createElement("span");
            itemCost.innerText = ` (${element.cost} essences)`;
            item.appendChild(itemCost);

            // Gestion du clic sur l'élément
            item.onclick = () => acheterElement(element);
        }

        // Ajout de l'élément à la boutique
        boutiqueElement.appendChild(item);
    });

    // Affiche les bonus
    BOUTIQUE_BONUS.forEach(bonus => {
        const item = document.createElement("div");
        item.className = "boutique-item";

        // Si le bonus est Évoli
        if (bonus.name === "Evoli") {
            const img = document.createElement("img");
            img.id = "evoli-image"; // ID pour cibler l'image d'Évoli
            img.src = "asset/eevee.webp";
            img.alt = "Evoli";
            img.className = "bonus-image";
            item.appendChild(img);

            // Texte à côté de l'image
            const texteBonus = document.createElement("span");
            texteBonus.innerText = "Evoli 1";
            item.appendChild(texteBonus);

            // Clic pour recruter Évoli
            item.onclick = () => {
                acheterBonus(bonus);
                recruterEvoli();
            };
        } else if (bonus.name === "Pikachu") {
            const img = document.createElement("img");
            img.src = "asset/pikachu.webp";
            img.alt = "Pikachu";
            img.className = "bonus-image";
            item.appendChild(img);

            const texteBonus = document.createElement("span");
            texteBonus.innerText = "Pikachu 10";
            item.appendChild(texteBonus);

            item.onclick = () => {
                acheterBonus(bonus);
                img.classList.add("shake");
                setTimeout(() => {
                    img.classList.remove("shake");
                }, 500);
            };
        } else {
            // Si ce n'est ni Évoli ni Pikachu, affiche juste le nom du bonus
            item.innerText = `${bonus.name} (${bonus.cost} essences)`;
            item.onclick = () => acheterBonus(bonus);
        }

        boutiqueElement.appendChild(item);
    });
}

// Fonction pour recruter Pikachu
function recruterPikachu() {
    // Pikachu génère des points passifs à intervalles réguliers, même lorsque vous ne cliquez pas
    const pikachuInterval = setInterval(() => {
        essences += 2; // par exemple, Pikachu génère 2 essences par seconde
        updateDisplay();
    }, 1000); // génère des points toutes les secondes
    // Arrête de générer des points automatiquement après un certain temps
    setTimeout(() => {
        clearInterval(pikachuInterval);
    }, 60000); // par exemple, l'effet dure 60 secondes
}

// Fonction pour utiliser une potion
function utiliserPotion() {
    // Logique pour utiliser la potion
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
