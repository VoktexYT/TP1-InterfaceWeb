$(document).ready(() => {
    // Exécute ce code lorsque le document HTML a été complètement chargé et prêt

    $("#btn-enregistrer").click(function() {
        // Ajoute un gestionnaire d'événements pour le clic sur le bouton avec l'ID 'btn-enregistrer'

        let couleur = $("#input-couleur").val(); 
        // Récupère la valeur saisie dans le champ avec l'ID 'input-couleur'

        let email = $("#input-email").val(); 
        // Récupère la valeur saisie dans le champ avec l'ID 'input-email'

        $(this).css("background-color", couleur); 
        // Change la couleur de fond du bouton cliqué en utilisant la couleur spécifiée

        if (email) {
            // Si un email est renseigné dans le champ d'entrée...
            $(this).text(email); 
            // Modifie le texte du bouton pour afficher l'email
        } else {
            // Sinon, si le champ email est vide...
            $(this).text("Voir aperçu"); 
            // Modifie le texte du bouton pour afficher 'Voir aperçu'
        }
    });
});
