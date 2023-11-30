import { where } from "sequelize";
import { Utilisateurs } from "../models/index.js";

//Importer le module de hachage
import bcrypt from 'bcryptjs'

//Ajout des validations
//import { validationResult } from "express-validator";

//Ajout validation a nous meme
//import validerUtilisateur from "../validations/validationDeLUtilisateur.js";

export const listUtilisateurs = async(req,res)=> {
try
{
    //Retourner la liste complète des utilisateurs.
const resultat = await Utilisateurs.findAll();
res.status(200).json({data:resultat})
}
catch(error){
    res.json({error: error.message})
}
}

export const UtilisateursParId = async(req,res)=> {
const id = req.params.id;


try{
    const result = await Utilisateurs.findByPk({id});
    res.status(200).json({data:Utilisateurs})

}catch(error){
    res.status(404).json({message:error.message})

}
}

//Ajouter un utilisateur.
export const ajouterUtilisateur = async(req,res)=> {
const {nom, prenom, dateDeNaissance, photo,numeroDeTelephone,emailUtilisateur,motDePasse} = req.body;

//Erreur de validation. 
//const errors = validationResult(req) //Fonction par defaut:
//if (!errors.isEmpty()) {
   // return res.status(400).json({ errors: errors.array() })   
//}

 //Hacher le mot de passe
 const mdpCrypte=bcrypt.hashSync(motDePasse,10)



const utilisateur = {nom, prenom, dateDeNaissance, photo,numeroDeTelephone,emailUtilisateur,motDePasse:mdpCrypte}
try{
await Utilisateurs.create(utilisateur)
res.status(201).json({message:"Le nouvel utilisateur a été ajouté avec succès."})
}catch(error){
    res.status(400).json({message:"Problème lors de la création du nouvel utilisateur."})
}

}

//Modifier les paramètres d'un utilisateur.
export const modifierUtilisateur = async(req,res)=> {
    const {id} = req.params;

    const nouvelUtilisateur = req.body;
    try{
        await UtilisateursParId.update(nouvelUtilisateur ,{where:{id}})
        res.status(200).json({message:"L'utilisateur  a été mis à jour avec succès."})

    }catch(error){
        res.status(400).json({message:"Problème lors de la modification d'un utilisateur."})
    }

}

//Supprimer un utilisateur de la liste des utilisateurs.
export const supprimerUtilisateur = async(req,res)=> {
    const id = req.params.id;
    if(!parseInt(id)){
        return res.status(400).json({ message: "Oh!Mais l'utilisateur  n'est pas valide !"} )
    }
    try{
        await Utilisateurs.destroy({where:{id}})
        res.status(200).json({message:"L'utilisateur a été supprimé avec succès."})


    }catch(error){
        res.status(400).json({message:"Problème lors de la suppression de l'utilisateur."})
    }

}
  