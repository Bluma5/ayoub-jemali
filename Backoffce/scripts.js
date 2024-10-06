function validerFormulaire() {

    let titre = document.getElementById('titre').value;
    if (titre.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères.");
    }

    let destination = document.getElementById('destination').value;
    let fauxdest = /^[a-zA-Z\s]+$/;
    if (destination.length < 3 || !fauxdest.test(destination)) {
        alert("La destination doit contenir uniquement des lettres et des espaces, et avoir au moins 3 caractères.");
    }

    let dateDepart = document.getElementById('dateDepart').value;
    let dateRetour = document.getElementById('dateRetour').value;
    if (new Date(dateRetour) <= new Date(dateDepart)) {
        alert("La date de retour doit être ultérieure à la date de départ.");
    }

    let prix = document.getElementById('prix').value;
    if (prix <= 0) {
        alert("Le prix doit être un nombre positif.");
    }

}
document.getElementById('addOfferButton').onclick = function() {
    validerFormulaire();
};

document.getElementById('offerform').addEventListener('submit',function(e){
    e.preventDefault();
    let isValid = true;

    let titre = document.getElementById("titre").value;
    if (titre.length < 3) {
        invalide("titreError", "Le titre doit contenir au moins 3 caractères.");
        isValid = false;
    } else {
        valide("titreError", "Titre valide.");
    }

    let destination = document.getElementById("destination").value;
    let fauxdest = /^[a-zA-Z\s]{3,}$/;
    if (!fauxdest.test(destination)) {
        invalide("destinationError", "La destination doit contenir uniquement des lettres et des espaces.");
        isValid = false;
    } else {
        valide("destinationError", "Destination valide.");
    }

    let dateDepart = document.getElementById("dateDepart").value;
    let dateRetour = document.getElementById("dateRetour").value;
    let depart = new Date(dateDepart);
    let retour = new Date(dateRetour);

    if (isNaN(depart.getTime())) {
        invalide("dateDepartError", "La date de départ est invalide.");
        isValid = false;
    } else {
        valide("dateDepartError", "Date de départ valide.");
    }
    if (isNaN(retour.getTime())) {
        invalide("dateRetourError", "La date de retour est invalide.");
        isValid = false;
    } else if (retour <= depart) {
        invalide("dateRetourError", "La date de retour doit être ultérieure à la date de départ.");
        isValid = false;
    } else {
        valide("dateRetourError", "Date de retour valide.");
    }

    let prix = document.getElementById("prix").value;
    if (prix <= 0) {
        invalide("prixError", "Le prix doit être un nombre positif.");
        isValid = false;
    } else {
        valide("prixError", "Prix valide.");
    }

    if (isValid) {
        alert("Le formulaire est validé avec succès !");
        document.getElementById('offerform').submit();
    }
});


document.getElementById('titre').addEventListener('keyup',function(){
    let titre = document.getElementById("titre").value;
    if (titre.length < 3) {
        invalide("titreError", "Le titre doit contenir au moins 3 caractères.");
    } else {
        valide("titreError", "correct");
    }
});


document.getElementById('destination').addEventListener('keyup',function() {
    let destination = document.getElementById("destination").value;
    let fauxdest = /^[a-zA-Z\s]{3,}$/;
    if (!fauxdest.test(destination)) {
        invalide("destinationError", "La destination doit contenir uniquement des lettres et des espaces.");
    } else {
        valide("destinationError", "correct");
    }
});

function invalide(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerText = message;
    element.style.color = "red";
}

function valide(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerText = message;
    element.style.color = "green";
}
