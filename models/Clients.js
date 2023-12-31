//Amener les types de données
import { DataTypes } from "sequelize";  

//Amener la connexion à la base de données
import database from "../connexion.js";

// Création du Modèle de la table "Clients"
const Clients = database.define('Clients', {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    adresseEmail:{type: DataTypes.STRING, allowNull: false},
    numeroDeTelephone:{type:DataTypes.INTEGER},
    adresseDeLivraison:{type: DataTypes.STRING, allowNull: false},
    motDePasse:{type: DataTypes.STRING, allowNull: false},
    },
    { timestamps: false} //Ne pas avoir les colonnes createdAt and updatedAt automatiquement
    )
    export default Clients
  




//MotDePasse