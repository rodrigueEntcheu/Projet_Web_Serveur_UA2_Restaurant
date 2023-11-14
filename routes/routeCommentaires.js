//Fonction permettant de créer des routes
import { Router } from "express";
import { ajouterCommentaire,listCommentaires,CommentairesParId,modifierCommentaires,supprimerCommentaire } from "../controllers/commentaires.js";   
const routeCommentaire = Router();

//Les routes deviennent

routeCommentaire .get('/', listCommentaires)
.get('/:id', CommentairesParId)
.post('/', ajouterCommentaire)
.put('/:id',modifierCommentaires)
.delete('/:id',supprimerCommentaire)

export default routeCommentaire;