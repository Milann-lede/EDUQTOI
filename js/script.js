// Récupération de la hauteur totale de la page
const body = document.body,
    html = document.documentElement;
const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
);
// Fonction pour mettre à jour la largeur de la barre de progression
function updateProgressBar() {
    const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    const progress = (scrollTop / (height * 2)) * 150;
    document.getElementById("progress-bar").style.width = progress + "%";
}
// Appel de la fonction de mise à jour de la barre de progression au chargement de la page et à chaque événement de défilement
window.addEventListener("load", updateProgressBar);
window.addEventListener("scroll", updateProgressBar);
