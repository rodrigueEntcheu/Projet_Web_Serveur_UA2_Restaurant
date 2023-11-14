//Amener les types de données
import { DataTypes } from "sequelize";  

//Amener la connexion à la base de données
import database from "../connexion.js";

// Création du Modèle de la table "Méthodes de paiement"
const methodesDepaiement = database.define('MethodesDePaiement', {
    typeDeCarte: { type: DataTypes.STRING, allowNull: false },
    numeroCarte: { type: DataTypes.INTEGER },
    DateExpiration:{type:DataTypes.DATEONLY},
    titulaireDeLaCarte:{type: DataTypes.STRING, allowNull: false }
    },
    { timestamps: false} //Ne pas avoir les colonnes createdAt and updatedAt automatiquement
    )
    export default methodesDepaiement
  
   
 
    




