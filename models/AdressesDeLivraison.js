//Amener les types de données
import { DataTypes } from "sequelize";  

//Amener la connexion à la base de données
import database from "../connexion.js";

// Création du Modèle de la table "Adresses de livraison"
const AdressesDeLivraison = database.define('AdressesDeLivraison', {
    adresseDestinataire:{type: DataTypes.STRING, allowNull: false},
    nomDestinataire: { type: DataTypes.STRING, allowNull: false },
    prenomDestinataire: { type: DataTypes.STRING, allowNull: false },
    numeroDeTelephone:{type:DataTypes.INTEGER}
    },
    { timestamps: false} //Ne pas avoir les colonnes createdAt and updatedAt automatiquement
    )
    export default AdressesDeLivraison