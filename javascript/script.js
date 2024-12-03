$(document).ready(() => {
    $("#btn-annuler").click(() => {
        $("#input-nom").val("");
        $("#input-nom").focus();
        $("#input-prenom").val("");
        $("#input-age").val("");
        $("#select-genre").val("defaut");
        $("#input-suggestion1").val("");
        $("#input-suggestion2").val("");
        $("#input-pays").val("")
    });

    $("#btn-enregistrer").click(() => {
        const nom = $("#input-nom");
        const prenom = $("#input-prenom");
        const age = $("#input-age");
        const genre = $("#select-genre");
        const pays = $("#input-pays");
        const suggestion1 = $("#input-suggestion1");
        const suggestion2 = $("#input-suggestion2");

        let erreur = false;

        if (!pays.val())
        {
            pays.focus();
            erreur = true;
        }

        if (!prenom.val())
        {
            prenom.focus();
            erreur = true;
        }

        if (!nom.val())
        {
            nom.focus();
            erreur = true;
        }

        if (erreur)
        {
            alert("Il manque des informations dans ce champ");
            return;
        }

        const listePays = {
            France: "de",
            Belgique: "de", 
            Canada: "du", 
            Allemagne: "d'", 
            Argentine: "d'", 
            Australie: "d'"
        };

        if (Object.keys(listePays).includes(pays.val()))
        {
            let genreMsg = "";

            if (genre.val() == "F")
            {
                genreMsg = "madame";
            }

            else if (genre.val() == "M")
            {
                genreMsg = "monsieur";
            }

            let ageMsg = " pour vos suggestions";

            if (age.val() <= 18)
            {
                ageMsg = ", vous êtes trop jeune!";
            }

            else if (age.val() >= 19 && age.val() <= 25)
            {
                ageMsg = ", vous devez revenir après 2 ans!";
            }

            else
            {
                const parent = document.createElement("div");
                const enfant1 = document.createElement("p");
                const enfant2 = document.createElement("p");

                parent.classList.add("row", "m-0", "col-12", "w-100");
                enfant1.classList.add("col-6", "border", "p-2", "text-danger", "fw-bold", "fst-italic");
                enfant2.classList.add("col-6", "border", "p-2", "text-danger", "fw-bold", "fst-italic");

                enfant1.innerText = suggestion1.val();
                enfant2.innerText = suggestion2.val();
                
                parent.appendChild(enfant1);
                parent.appendChild(enfant2);

                document.getElementById("toutLesSuggestions").appendChild(parent);
            }

            alert(`
                Merci, ${genreMsg} ${nom.val()}, ${listePays[pays.val()]} ${pays.val()}${ageMsg}
            `);
        }
        
        
    });
})