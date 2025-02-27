window.addEventListener('scroll', function() {
    var imageContainer = document.getElementById('competences');
    var imageContainer2 = document.getElementById('project');
    var scrollPosition = window.scrollY;  // Position du scroll
    var scrollSpeed = 0.5;  // Ajuste cette valeur pour que l'effet soit plus ou moins rapide


    // Calculer la nouvelle position de l'image de fond en fonction du défilement
    var yOffset = scrollPosition * scrollSpeed;

    // Appliquer la position de fond dynamique pour l'image
    imageContainer.style.backgroundPosition = 'center ' + (-yOffset) + 'px'; // Inverser le signe pour faire remonter l'image
    imageContainer2.style.backgroundPosition = 'center ' + (-yOffset) + 'px'; 
});

const cvLink = './images/Mon_CV.pdf'; // Remplacez 'monCV.pdf' par le chemin vers votre fichier PDF

        // Lorsque l'utilisateur clique sur le bouton
        document.getElementById('cvButton').addEventListener('click', function() {
            // Ouvre le PDF dans une nouvelle fenêtre ou un nouvel onglet
            window.open(cvLink, '_blank');
        });


