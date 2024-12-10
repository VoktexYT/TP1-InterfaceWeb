$(document).ready(() => {
    // Exécute ce code lorsque le document HTML a été complètement chargé et prêt

    $("#image-map").click(function() {
        // Ajoute un gestionnaire d'événements pour le clic sur l'élément avec l'ID 'image-map'

        $(this).hide(300); 
        // Cache l'élément cliqué (dans ce cas, 'image-map') avec une animation qui dure 300 millisecondes
    });

});
