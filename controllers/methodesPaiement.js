import { where } from "sequelize";
import { methodesDepaiement } from "../models/index.js";


export const listMethodesDePaiement = async(req,res)=> {
try
{
    //Retourner la liste complète des méthodes de paiement.
const resultat = await methodesDepaiement.findAll();
res.status(200).json({data:resultat})
}
catch(error){
    res.json({error: error.message})
}
}

export const MethodesDePaiementParId = async(req,res)=> {
const id = req.params.id;


try{
    const result = await methodesDepaiement.findByPk({id});
    res.status(200).json({data:methodesDepaiement})

}catch(error){
    res.status(404).json({message:error.message})

}
}

//Ajouter une méthode de paiement.
export const ajouterMethodeDePaiement = async(req,res)=> {
const methodeDePaiement = {  typeDeCarte,numeroCarte,DateExpiration,titulaireDeLaCarte} = req.body;
//const motDePasseCrypter= 

const MethodesDePaiement = {  typeDeCarte,numeroCarte,DateExpiration,titulaireDeLaCarte}
try{
await MethodesDePaiement.create(MethodesDePaiement)
res.status(201).json({message:"La méthode de paiement a été ajoutée avec succès."})
}catch(error){
    res.status(400).json({message:"Problème lors de l'ajout de  la nouvelle méthode de paiement."})
}

}

//Modifier une méthode de paiement
export const modifierMethodeDePaiement = async(req,res)=> {
    const {id} = req.params;

    const nouvelleMethodeDePaiement = req.body;
    try{
        await methodeDePaiementParId.update(nouvelleMethodeDePaiement ,{where:{id}})
        res.status(200).json({message:"La méthode de paiement a été mis à jour avec succès."})

    }catch(error){
        res.status(400).json({message:"Problème lors de la modification de la  méthode de paiement."})
    }

}

//Supprimer une méthode de paiement
export const supprimerMethodeDePaiement = async(req,res)=> {
    const id = req.params.id;
    if(!parseInt(id)){
        return res.status(400).json({ message: "Oh!Mais la méthode de paiement n'est pas valide !"} )
    }
    try{
        await Commentaires.destroy({where:{id}})
        res.status(200).json({message:"La méthode de paiement a été supprimée avec succès."})


    }catch(error){
        res.status(400).json({message:"Problème lors de la suppression de la  méthode de paiement."})
    }

}
  