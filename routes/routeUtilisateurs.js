//Fonction permettant de créer des routes
import { Router } from "express";
import { ajouterUtilisateur,listUtilisateurs,UtilisateursParId,modifierUtilisateur,supprimerUtilisateur } from "../controllers/utilisateurs.js";

import { verifierToken } from "../Auth/autorisation.js";
//import utilisateurRules from "../Validations/utilisateurValidation.js";

const routeUtilisateurs = Router();

//Les routes deviennent

routeUtilisateurs .get('/',verifierToken, listUtilisateurs)
.get('/:id', UtilisateursParId)
.post('/', ajouterUtilisateur)
.put('/:id',modifierUtilisateur )
.delete('/:id',supprimerUtilisateur)

export default routeUtilisateurs;