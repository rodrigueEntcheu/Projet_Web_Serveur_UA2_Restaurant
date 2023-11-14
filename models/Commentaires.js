//Amener les types de données
import { DataTypes } from "sequelize";  

//Amener la connexion à la base de données
import database from "../connexion.js";

// Création du Modèle de la table Commentaires
const Commentaires = database.define('Commentaires', {
    texteDuCommentaire: { type: DataTypes.STRING, allowNull: false },
    note: { type: DataTypes.INTEGER },
    dateCommande:{type:DataTypes.DATEONLY}
    },
    { timestamps: false} //Ne pas avoir les colonnes createdAt and updatedAt automatiquement
    )
    export default Commentaires
  
  




