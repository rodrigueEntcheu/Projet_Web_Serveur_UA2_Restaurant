//Amener les types de données
import { DataTypes } from "sequelize";  

//Amener la connexion à la base de données
import database from "../connexion.js";

// Création du Modèle de la table "Restaurants"
const Restaurants = database.define('Restaurants', {
    nomRestaurant: { type: DataTypes.STRING, allowNull: false },
    adresse: { type: DataTypes.STRING, allowNull: false },
    AdresseEmailDecontact: { type: DataTypes.STRING, allowNull: false },
    numeroDeTelephone:{type:DataTypes.INTEGER},
    HeuresDOuverture: {type:DataTypes.TIME}
    },
    { timestamps: false} //Ne pas avoir les colonnes createdAt and updatedAt automatiquement
    )
    export default Restaurants
  
   
 
    




