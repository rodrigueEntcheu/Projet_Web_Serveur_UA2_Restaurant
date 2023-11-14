import { where } from "sequelize";
import { Roles } from "../models/index.js";


export const listRoles = async(req,res)=> {
try
{
    //Retourner la liste complète des rôles des utilisateurs des restaurants.
const resultat = await Roles.findAll();
res.status(200).json({data:resultat})
}
catch(error){
    res.json({error: error.message})
}
}

export const RolesParId = async(req,res)=> {
const id = req.params.id;


try{
    const result = await Roles.findByPk({id});
    res.status(200).json({data:Roles})

}catch(error){
    res.status(404).json({message:error.message})

}
}

//Ajouter un rôle.
export const ajouterRole = async(req,res)=> {
const role = {   nom} = req.body;
//const motDePasseCrypter= 

const Role = {  nom}
try{
await Role.create(Role)
res.status(201).json({message:"Le rôle  a été ajouté avec succès."})
}catch(error){
    res.status(400).json({message:"Problème lors de la création du nouveau rôle."})
}

}

//Modifier le rôle d"un utlilisateur.
export const modifierRole = async(req,res)=> {
    const {id} = req.params;

    const nouveauRole = req.body;
    try{
        await RolesParIdoleParId.update(nouveauRole ,{where:{id}})
        res.status(200).json({message:"Le rôle  a été mis à jour avec succès."})

    }catch(error){
        res.status(400).json({message:"Problème lors de la modification du rôle."})
    }

}

//Supprimer le rôle d'un utilisateur  de la liste des rôles.
export const supprimerRole = async(req,res)=> {
    const id = req.params.id;
    if(!parseInt(id)){
        return res.status(400).json({ message: "Oh!Mais le rôle n'est pas valide !"} )
    }
    try{
        await Roles.destroy({where:{id}})
        res.status(200).json({message:"Le rôle a été supprimée avec succès."})


    }catch(error){
        res.status(400).json({message:"Problème lors de la suppression du rôle."})
    }

}
  