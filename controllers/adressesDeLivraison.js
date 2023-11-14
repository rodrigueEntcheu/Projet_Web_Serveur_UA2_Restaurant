import { where } from "sequelize";
import { AdressesDeLivraison } from "../models/index.js";

export const listAdressesDeLivraison = async(req,res)=> {
try
{
    //Retourner la liste complète des adresses de livraison.
const resultat = await AdressesDeLivraison.findAll();
res.status(200).json({data:resultat})
}
catch(error){
    res.json({error: error.message})
}
}

export const adresseDeLivraisonParId = async(req,res)=> {
const id = req.params.id;


try{
    const result = await AdressesDeLivraison.findByPk({id});
    res.status(200).json({data:adresseDeLivraison})

}catch(error){
    res.status(404).json({message:error.message})

}
}

//Ajouter une adresse de livraison

export const ajouterAdressesDeLivraison = async(req,res)=> {
const adresseDeLivraison = { adresseDestinataire,nomDestinataire,prenomDestinataire,numeroDeTelephone} = req.body;


//const motDePasseCrypter= 

 // Destructurer si necessaire
// const { nom, prenom, email, motDePasse, dateDeNaissance } = req.body
    
 //Hacher le mot de passe
// const mdpCrypte=bcrypt.hashSync(motDePasse,10)


const AdresseDeLivraison = { adresseDestinataire,nomDestinataire,prenomDestinataire,numeroDeTelephone}
try{
await AdresseDeLivraison.create(AdresseDeLivraison)
res.status(201).json({message:"L' adresse de livraison a été ajoutée avec succès."})
}catch(error){
    res.status(400).json({message:"problème lors de la création de l'adresse de livraison."})
}

}

//Modifier une adresse de livraison
export const modifierAdresseDeLivraison = async(req,res)=> {
    const {id} = req.params;

    const nouvelleAdresseDeLivraison = req.body;
    try{
        await adresseDeLivraisonParId.update(nouvelleAdresseDeLivraison,{where:{id}})
        res.status(200).json({message:"L'adresse de livraison a été mis à jour avec succès."})

    }catch(error){
        res.status(400).json({message:"problème lors de la modification de l'adresse de livraison."})
    }

}

//Supprimer une adresse de livraison
export const supprimerAdresseDeLivraison = async(req,res)=> {
    const id = req.params.id;
    if(!parseInt(id)){
        return res.status(400).json({ message: "Oh!Mais l'adresse entrée n'est pas valide !"} )
    }
    try{
        await AdressesDeLivraison.destroy({where:{id}})
        res.status(200).json({message:"L'adresse de livraisona été supprimé avec succès."})


    }catch(error){
        res.status(400).json({message:"Problème lors de la suppression de l'adresse de livraison."})
    }

}
  