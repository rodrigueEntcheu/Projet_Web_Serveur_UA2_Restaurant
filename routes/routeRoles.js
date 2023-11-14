//Fonction permettant de créer des routes
import { Router } from "express";
import { ajouterRole,listRoles,RolesParId,modifierRole,supprimerRole } from "../controllers/roles.js";
const routeRoles = Router();

//Les routes deviennent

routeRoles .get('/', listRoles)
.get('/:id', RolesParId)
.post('/', ajouterRole)
.put('/:id',modifierRole )
.delete('/:id',supprimerRole)

export default routeRoles;