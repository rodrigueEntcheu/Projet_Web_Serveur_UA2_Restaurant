//Validation avec nos propres fonctions 

const validerUtilisateur = utilisateurs => {
    const { nom, prenom, dateDeNaissance, photo,numeroDeTelephone,emailUtilisateur,motDePasse } = utilisateurs
    const nomRegex = /^[a-zA-Z]+$/
    const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/i
    let estValide = true  //Resultat de la validation reussie
    let erreurs = {}      //Resultat de la validation echouee
    if (!nomRegex.test(nom)) {
        erreurs['nom'] = "Le nom doit contenir seulement des caracteres de l'alphabet"
        estValide = false
    }

    if (!nomRegex.test(prenom)) {
        erreurs['prenom'] = "Le nom doit contenir seulement des caracteres de l'alphabet"
        estValide = false
    }

    if (!mdpRegex.test(motDePasse)) {
        erreurs['mdp'] = "Le mot de passe doit contenir ..."
        estValide = false
    }

    if (prenom) {
        erreurs['description'] = "La description doit contenir au moins 10 caracteres"
        estValide = false
    }

    if (dateDeNaissance==='') {
        erreurs['naissance'] = "La date doit suivre le format DD-MM-YYYY"
        estValide = false
    }



    if (estValide) return estValide
    return erreurs
}

export default validerUtilisateur