//Fonction permettant de créer des routes
import { Router } from "express";
import { ajouterMethodeDePaiement,listMethodesDePaiement, MethodesDePaiementParId,modifierMethodeDePaiement,supprimerMethodeDePaiement } from "../controllers/methodesPaiement.js";
const routeMethodesDePaiement = Router();

//Les routes deviennent

routeMethodesDePaiement .get('/', listMethodesDePaiement)
.get('/:id', MethodesDePaiementParId)
.post('/', ajouterMethodeDePaiement)
.put('/:id',modifierMethodeDePaiement )
.delete('/:id',supprimerMethodeDePaiement)

export default routeMethodesDePaiement;