const textElement = document.getElementById('text');
const phrases = ["Des IAs pour tous. ", "Pour ecoles et entreprises. ", "Securite, flexibilite, gestion. "];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100;
let pauseTime = 3000; // Délai entre l'écriture et la suppression

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && charIndex <= currentPhrase.length) {
        // Ajout de caractères
        textElement.textContent = currentPhrase.substring(0, charIndex);
        charIndex++;
        speed = 100;  // Vitesse de frappe
    } else if (isDeleting && charIndex >= 0) {
        // Suppression des caractères
        textElement.textContent = currentPhrase.substring(0, charIndex);
        charIndex--;
        speed = 50;   // Vitesse d'effacement
    }

    if (charIndex === currentPhrase.length) {
        // Pause avant de commencer à effacer
        isDeleting = true;
        speed = pauseTime; // Utilise la variable pauseTime pour le délai
    } else if (charIndex === 0 && isDeleting) {
        // Passer à la phrase suivante
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;  // Boucle à travers les phrases
        speed = 500;  // Pause avant d'écrire la nouvelle phrase
    }

    setTimeout(type, speed);
}

// Démarrer l'animation après que la page soit complètement chargée
window.onload = function() {
    setTimeout(type, 1000);
};
