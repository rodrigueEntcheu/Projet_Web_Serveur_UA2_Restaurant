//Amener les types de données
import { DataTypes } from "sequelize";  

//Amener la connexion à la base de données
import database from "../connexion.js";

// Création du Modèle de la table "Restaurants"
const Utilisateurs = database.define('Utilisateurs', {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    dateDeNaissance: { type: DataTypes.DATEONLY },
    photo: {type : DataTypes.BLOB},
    numeroDeTelephone:{type:DataTypes.INTEGER},
    emailUtilisateur:{type: DataTypes.STRING, allowNull: false},
    adresseDeLivraison:{type: DataTypes.STRING, allowNull: false},
    motDePasse:{type: DataTypes.STRING, allowNull: false},
    },
    { timestamps: false} //Ne pas avoir les colonnes createdAt and updatedAt automatiquement
    )
    export default Utilisateurs
  
   
    
    
  
   
 
    




