//Fonction permettant de créer des routes
import { Router } from "express";
import { ajouterClient,listClients,ClientParId,modifierClient,supprimerClient } from "../controllers/clients.js";   
const routeClient = Router();

//Les routes deviennent

routeClient .get('/', listClients)
.get('/:id', ClientParId)
.post('/', ajouterClient)
.put('/:id',modifierClient)
.delete('/:id',supprimerClient)

export default routeClient;