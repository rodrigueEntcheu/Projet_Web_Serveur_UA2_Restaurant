//Amener les types de données
import { DataTypes } from "sequelize";  

//Amener la connexion à la base de données
import database from "../connexion.js";

// Création du Modèle de la table "Roles"
const Roles = database.define('Roles', {
    nom: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false} //Ne pas avoir les colonnes createdAt and updatedAt automatiquement
    )
    export default Roles
  
   
 
    




