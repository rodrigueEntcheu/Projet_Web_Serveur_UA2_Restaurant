//Fonction permettant de créer des routes
import { Router } from "express";
import { ajouterAdressesDeLivraison,listAdressesDeLivraison,adresseDeLivraisonParId,modifierAdresseDeLivraison,supprimerAdresseDeLivraison } from "../controllers/adressesDeLivraison.js";
const routeAdresseDeLivraison = Router();

//Les routes deviennent

routeAdresseDeLivraison .get('/', listAdressesDeLivraison)
.get('/:id', adresseDeLivraisonParId)
.post('/', ajouterAdressesDeLivraison)
.put('/:id',modifierAdresseDeLivraison)
.delete('/:id',supprimerAdresseDeLivraison)

export default routeAdresseDeLivraison