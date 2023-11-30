import { where } from "sequelize";
import { Commentaires } from "../models/index.js";


export const listCommentaires = async(req,res)=> {
try
{
    //Retourner la liste complète des commentaires.
const resultat = await Commentaires.findAll();
res.status(200).json({data:resultat})
}
catch(error){
    res.json({error: error.message})
}
}

export const CommentairesParId = async(req,res)=> {
const id = req.params.id;


try{
    const result = await Commentaires.findByPk({id});
    res.status(200).json({data:Commentaires})

}catch(error){
    res.status(404).json({message:error.message})

}
}

//Ajouter un commentaire.
export const ajouterCommentaire = async(req,res)=> {
const  { texteDuCommentaire,note,dateCommande} = req.body;
//const motDePasseCrypter= 

const Commentaires = { texteDuCommentaire,note,dateCommande}
try{
await Commentaires.create(Commentaires)
res.status(201).json({message:"Le commentaire a été ajoutée avec succès."})
}catch(error){
    res.status(400).json({message:"Problème lors de l'ajout  du nouveau commentaire."})
}

}

//Modifier un commentaire
export const modifierCommentaires = async(req,res)=> {
    const {id} = req.params;

    const nouveauCommentaire = req.body;
    try{
        await commentaireParId.update(nouveauCommentaire,{where:{id}})
        res.status(200).json({message:"Le commentaire a été mis à jour avec succès."})

    }catch(error){
        res.status(400).json({message:"Problème lors de la modification du commentaire."})
    }

}

//Supprimer un commentaire
export const supprimerCommentaire = async(req,res)=> {
    const id = req.params.id;
    if(!parseInt(id)){
        return res.status(400).json({ message: "Oh!Mais le commentaire n'est pas valide !"} )
    }
    try{
        await Commentaires.destroy({where:{id}})
        res.status(200).json({message:"Le commentaire a été supprimé avec succès."})


    }catch(error){
        res.status(400).json({message:"Problème lors de la suppression du commentaire."})
    }

}
  