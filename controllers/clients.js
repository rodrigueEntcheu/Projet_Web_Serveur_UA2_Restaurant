import { where } from "sequelize";
import { Clients } from "../models/index.js";
//import { Client } from "undici-types";

export const listClients = async(req,res)=> {
try
{
    //Retourner la liste complète des clients.
const resultat = await Clients.findAll();
res.status(200).json({data:resultat})
}
catch(error){
    res.json({error: error.message})
}
}

export const ClientParId = async(req,res)=> {
const id = req.params.id;


try{
    const result = await Clients.findByPk({id});
    res.status(200).json({data:Clients})

}catch(error){
    res.status(404).json({message:error.message})

}
}

//Ajouter un client.
export const ajouterClient = async(req,res)=> {
const client = { nom,prenom,adresseEmail,numeroDeTelephone,adresseDeLivraison,motDePasse} = req.body;
//const motDePasseCrypter= 

const Client = { nom,prenom,adresseEmail,numeroDeTelephone,adresseDeLivraison,motDePasse} 
try{
await Client.create(Client)
res.status(201).json({message:"Le client a été ajoutée avec succès."})
}catch(error){
    res.status(400).json({message:"problème lors de la création du client."})
}

}

//Modifier un client
export const modifierClient = async(req,res)=> {
    const {id} = req.params;

    const nouveauClient = req.body;
    try{
        await clientParId.update(nouveauClient,{where:{id}})
        res.status(200).json({message:"Le client a été mis à jour avec succès."})

    }catch(error){
        res.status(400).json({message:"Problème lors de la modification du client."})
    }

}

//Supprimer un client
export const supprimerClient = async(req,res)=> {
    const id = req.params.id;
    if(!parseInt(id)){
        return res.status(400).json({ message: "Oh!Mais les informations du client ne sont pas valides !"} )
    }
    try{
        await Client.destroy({where:{id}})
        res.status(200).json({message:"Le client a été supprimé avec succès."})


    }catch(error){
        res.status(400).json({message:"Problème lors de la suppression du client."})
    }

}
  