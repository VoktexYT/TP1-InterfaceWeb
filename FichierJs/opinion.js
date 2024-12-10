$(document).ready(() => {
    // Exécute ce code lorsque le document HTML a été complètement chargé et prêt

    $("#btn-annuler").click(() => {
        // Ajoute un gestionnaire d'événements pour le clic sur le bouton 'btn-annuler'

        $("#input-nom").val(""); 
        // Réinitialise le champ 'input-nom' à une valeur vide

        $("#input-nom").focus(); 
        // Met automatiquement le focus sur le champ 'input-nom'

        $("#input-prenom").val(""); 
        $("#input-age").val(""); 
        $("#select-genre").val("defaut"); 
        // Réinitialise le champ 'select-genre' à l'option par défaut

        $("#input-suggestion1").val(""); 
        $("#input-suggestion2").val(""); 
        $("#input-pays").val(""); 
        // Réinitialise tous les autres champs de formulaire à une valeur vide ou par défaut
    });

    $("#btn-enregistrer").click(() => {
        // Ajoute un gestionnaire d'événements pour le clic sur le bouton 'btn-enregistrer'

        const nom = $("#input-nom");
        const prenom = $("#input-prenom");
        const age = $("#input-age");
        const genre = $("#select-genre");
        const pays = $("#input-pays");
        const suggestion1 = $("#input-suggestion1");
        const suggestion2 = $("#input-suggestion2");

        let erreur = false; 
        // Variable pour suivre si une erreur de validation est détectée

        // Vérifie si le champ 'pays' est vide
        if (!pays.val()) {
            pays.focus(); 
            // Met le focus sur le champ 'pays' si vide
            erreur = true;
        }

        // Vérifie si le champ 'prenom' est vide
        if (!prenom.val()) {
            prenom.focus(); 
            // Met le focus sur le champ 'prenom' si vide
            erreur = true;
        }

        // Vérifie si le champ 'nom' est vide
        if (!nom.val()) {
            nom.focus(); 
            // Met le focus sur le champ 'nom' si vide
            erreur = true;
        }

        if (erreur) {
            // Si des erreurs sont détectées, affiche un message d'alerte
            alert("Il manque des informations dans ce champ");
            return; 
            // Arrête l'exécution du reste du code
        }

        const listePays = {
            France: "de",
            Belgique: "de", 
            Canada: "du", 
            Allemagne: "d'", 
            Argentine: "d'", 
            Australie: "d'"
        };

        // Vérifie si le pays saisi est dans la liste des pays
        if (Object.keys(listePays).includes(pays.val())) {
            let genreMsg = ""; 
            // Initialise une variable pour stocker le message du genre

            if (genre.val() == "F") {
                genreMsg = "madame"; 
                // Définit le message pour les femmes
            } else if (genre.val() == "M") {
                genreMsg = "monsieur"; 
                // Définit le message pour les hommes
            }

            let ageMsg = " pour vos suggestions"; 
            // Message par défaut pour l'âge

            // Détermine le message basé sur l'âge
            if (age.val() <= 18) {
                ageMsg = ", vous êtes trop jeune!";
            } else if (age.val() >= 19 && age.val() <= 25) {
                ageMsg = ", vous devez revenir après 2 ans!";
            } else {
                // Si l'âge est supérieur à 25, affiche les suggestions
                const parent = document.createElement("div");
                const enfant1 = document.createElement("p");
                const enfant2 = document.createElement("p");

                // Ajoute des classes CSS pour styliser les éléments
                parent.classList.add("row", "m-0", "col-12", "w-100");
                enfant1.classList.add("col-6", "border", "p-2", "text-danger", "fw-bold", "fst-italic");
                enfant2.classList.add("col-6", "border", "p-2", "text-danger", "fw-bold", "fst-italic");

                enfant1.innerText = suggestion1.val(); 
                // Remplit le premier paragraphe avec la première suggestion
                enfant2.innerText = suggestion2.val(); 
                // Remplit le deuxième paragraphe avec la deuxième suggestion
                
                parent.appendChild(enfant1); 
                parent.appendChild(enfant2); 
                // Ajoute les paragraphes au conteneur parent

                document.getElementById("toutLesSuggestions").appendChild(parent); 
                // Ajoute le conteneur parent à l'élément 'toutLesSuggestions'
            }

            // Affiche un message de remerciement personnalisé
            alert(`
                Merci, ${genreMsg} ${nom.val()}, ${listePays[pays.val()]} ${pays.val()}${ageMsg}
            `);
        }
    });
});
