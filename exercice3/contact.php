<?php

if (
    isset($_GET['nom']) && isset($_GET['prenom']) && isset($_GET['email']) &&
    isset($_GET['telephone']) && isset($_GET['adresse']) && isset($_GET['codePostal'])
) {

    $nom =$_GET['nom'];
    $prenom = $_GET['prenom'];
    $email = $_GET['email'];
    $telephone = $_GET['telephone'];
    $adresse = $_GET['adresse'];
    $codePostal = $_GET['codePostal'];

    echo "<table border='1'>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Adresse</th>
                <th>Code Postal</th>
            </tr>
            <tr>
                <td>$nom</td>
                <td>$prenom</td>
                <td>$email</td>
                <td>$telephone</td>
                <td>$adresse</td>
                <td>$codePostal</td>
            </tr>
          </table>";
} else {
    echo "Champs manquants";
    exit;
}
?>
