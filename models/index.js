//Importer tous les models
import AdressesDeLivraison from "./AdressesDeLivraison.js";
import Clients from "./Clients.js";
import Commentaires from "./Commentaires.js";
import methodesDepaiement from "./MethodesPaiement.js";
import Restaurants from "./Restaurants.js";
import Roles from "./Roles.js";
import StatusCommande from "./StatutCommande.js";
import Utilisateurs from "./Utilisateurs.js";


//Appliquer les relations (associations)

//Relation entre un utilisteur du restaurant et son rôle.
Utilisateurs.hasMany(Roles);
Roles.belongsTo(Utilisateurs);

//Relation entre un client  du restaurant et son commentaire.
Clients.hasMany(Commentaires);
Commentaires.belongsTo(Clients);

//Relation entre un client  du restaurant et son mode de paiement.
Clients.hasMany(methodesDepaiement);
methodesDepaiement.belongsTo(Clients);

//Relation entre un client  du restaurant et l'adresse à laquelle on doit livrer.
Clients.hasOne(AdressesDeLivraison);
AdressesDeLivraison.belongsTo(Clients);

//Relation entre le restaurant et ses utilisateurs.
Restaurants.hasMany(Utilisateurs);
Utilisateurs.belongsTo(Restaurants);

export  {AdressesDeLivraison,StatusCommande,Clients,Commentaires, methodesDepaiement, Restaurants, Roles, Utilisateurs};