import { where } from "sequelize";
import {StatusCommande} from "../models/index.js";


export const listStatusCommande = async(req,res)=> {
try
{
    //Retourner la liste complète des status de commande.
const resultat = await StatusCommande.findAll();
res.status(200).json({data:resultat})
}
catch(error){
    res.json({error: error.message})
}
}

export const StatusDeCommandeParId = async(req,res)=> {
const id = req.params.id;


try{
    const result = await StatusCommande.findByPk({id});
    res.status(200).json({data:StatusCommande})

}catch(error){
    res.status(404).json({message:error.message})

}
}

//Ajouter un status de commande.
export const ajouterStatusCommande = async(req,res)=> {
const statusDeCommande = {libelleDuStatus} = req.body;
//const motDePasseCrypter= 

const StatusCommande = {libelleDuStatus}
try{
await StatusCommande.create(Restaurant)
res.status(201).json({message:"Le status a été ajouté avec succès."})
}catch(error){
    res.status(400).json({message:"Problème lors de la création du nouveau status de commande."})
}

}

//Modifier les paramètres d'un status de commande.
export const modifierStatusDeCommande = async(req,res)=> {
    const {id} = req.params;

    const nouveauStatusDeCommande = req.body;
    try{
        await StatusDeCommandeParId.update(nouveauStatusDeCommande ,{where:{id}})
        res.status(200).json({message:"Le status de la commande  a été mis à jour avec succès."})

    }catch(error){
        res.status(400).json({message:"Problème lors de la modification du status de la commande."})
    }

}

//Supprimer un status de commande de la liste des status de commande.
export const supprimerStatusDeCommande = async(req,res)=> {
    const id = req.params.id;
    if(!parseInt(id)){
        return res.status(400).json({ message: "Oh!Mais le status entré n'est pas valide !"} )
    }
    try{
        await StatusCommande.destroy({where:{id}})
        res.status(200).json({message:"Le status a été supprimé avec succès."})


    }catch(error){
        res.status(400).json({message:"Problème lors de la suppression du status de la commande."})
    }

}
  