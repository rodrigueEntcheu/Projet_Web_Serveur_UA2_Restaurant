//Validation en utilisant express-validator

import { body, check } from "express-validator";
const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

const utilisateurRules = [
    body('nom').notEmpty().withMessage('Le nom ne peut pas etre vide')
        .isAlpha().withMessage('Le nom contenir seulement des lettres')
        .isLength({ min: 4 }).withMessage('Le nom doit contenir au moins 4 lettres'),
    body('prenom').notEmpty().isLength({ min: 4 }).withMessage('Le prenom ne peut pas etre vide'),
    body('emailUtilisateur').isEmail(),
    body('motDePasse').matches(mdpRegex).withMessage('Mot de passe ne suit pas les regles'),
    check('dateDeNaissance', { delimiters: '-' }).not().isEmpty().withMessage("Ceci n'est pas une date")
]

export default utilisateurRules