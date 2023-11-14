//Fonction permettant de créer des routes
import { Router } from "express";
import { ajouterStatusCommande,listStatusCommande,StatusDeCommandeParId,modifierStatusDeCommande,supprimerStatusDeCommande } from "../controllers/statusCommande.js";
const routeStatusCommande = Router();

//Les routes deviennent

routeStatusCommande .get('/', listStatusCommande)
.get('/:id', StatusDeCommandeParId)
.post('/', ajouterStatusCommande)
.put('/:id',modifierStatusDeCommande )
.delete('/:id',supprimerStatusDeCommande)

export default routeStatusCommande;