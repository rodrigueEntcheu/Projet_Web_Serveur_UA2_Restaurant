import { where } from "sequelize";
import { Restaurants } from "../models/index.js";


export const listRestaurants = async(req,res)=> {
try
{
    //Retourner la liste complète des restaurants.
const resultat = await Restaurants.findAll();
res.status(200).json({data:resultat})
}
catch(error){
    res.json({error: error.message})
}
}

export const RestaurantsParId = async(req,res)=> {
const id = req.params.id;


try{
    const result = await Restaurants.findByPk({id});
    res.status(200).json({data:Restaurants})

}catch(error){
    res.status(404).json({message:error.message})

}
}

//Ajouter un restaurant.
export const ajouterRestaurant = async(req,res)=> {
const restaurant = {   nomRestaurant,adresse,AdresseEmailDecontact,numeroDeTelephone,HeuresDOuverture} = req.body;
//const motDePasseCrypter= 

const Restaurant = {   nomRestaurant,adresse,AdresseEmailDecontact,numeroDeTelephone,HeuresDOuverture}
try{
await Restaurant.create(Restaurant)
res.status(201).json({message:"Le restaurant a été ajouté avec succès."})
}catch(error){
    res.status(400).json({message:"Problème lors de la création du nouveau restaurant."})
}

}

//Modifier les paramètres d'un restaurant.
export const modifierRestaurant = async(req,res)=> {
    const {id} = req.params;

    const nouveauRestaurant = req.body;
    try{
        await restaurantParId.update(nouveauRestaurant ,{where:{id}})
        res.status(200).json({message:"Le restaurant  a été mis à jour avec succès."})

    }catch(error){
        res.status(400).json({message:"Problème lors de la modification du restaurant."})
    }

}

//Supprimer un restaurant de la liste des restaurants.
export const supprimerRestaurant = async(req,res)=> {
    const id = req.params.id;
    if(!parseInt(id)){
        return res.status(400).json({ message: "Oh!Mais le restaurant n'est pas valide !"} )
    }
    try{
        await Restaurants.destroy({where:{id}})
        res.status(200).json({message:"Le restaurant a été supprimée avec succès."})


    }catch(error){
        res.status(400).json({message:"Problème lors de la suppression du restaurant."})
    }

}
  