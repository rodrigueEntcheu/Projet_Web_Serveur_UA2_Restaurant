//Importer les modules/middlewares dans notre projet (server.js)
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

import dotenv from 'dotenv'

import database from "./connexion.js"

import { adresseDeLivraisonParId,listAdressesDeLivraison } from './controllers/adressesDeLivraison.js';
import routeAdresseDeLivraison from './routes/routeAdresseDeLivraison.js';

import { ClientParId,listClients } from './controllers/clients.js';
import routeClient from './routes/routeClients.js';

import { CommentairesParId,listCommentaires } from './controllers/commentaires.js';
import routeCommentaire from './routes/routeCommentaires.js';

import { MethodesDePaiementParId,listMethodesDePaiement } from './controllers/methodesPaiement.js';
import routeMethodesDePaiement from './routes/routeMethodesDePaiement.js';

import { RestaurantsParId,listRestaurants } from './controllers/restaurants.js';
import routeRestaurants from './routes/routeRestaurants.js';

import { RolesParId,listRoles } from './controllers/roles.js';
import routeRoles from './routes/routeRoles.js';

import { StatusDeCommandeParId,listStatusCommande } from './controllers/statusCommande.js';
import routeStatusCommande from './routes/routeStatutCommande.js';

import { UtilisateursParId,listUtilisateurs } from './controllers/utilisateurs.js';
import routeUtilisateurs from './routes/routeUtilisateurs.js';
import routerAuth  from './routes/routeAuth.js'

database.sync({alter:true});

const { PORT } = dotenv.config().parsed;

const app =  express(); 

//Appliquer les middlewares à l’application
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:
false }))

app.get('/salutation',(req,res)=>{res.send('Bonjour tout le monde')})

app.get('/adresses_de_livraison', listAdressesDeLivraison);
app.get('/adresses_de_livraison/:id', adresseDeLivraisonParId);

app.get('/clients', listClients);
app.get('/clients/:id', ClientParId);

app.get('/commentaires', listCommentaires);
app.get('/commentaires/:id', CommentairesParId);

app.get('/methodes_de_paiement', listMethodesDePaiement);
app.get('/methodes_de_paiement/:id', MethodesDePaiementParId);

app.get('/restaurants', listRestaurants);
app.get('/restaurants/:id', RestaurantsParId);

app.get('/roles', listRoles);
app.get('/roles/:id', RolesParId);

app.get('/status_des_commandes', listStatusCommande);
app.get('/status_des_commandes/:id', StatusDeCommandeParId);


//Utilisation des routes.
app.use('/adresses_de_livraison', routeAdresseDeLivraison);
app.use('/clients', routeClient);
app.use('/commentaires', routeCommentaire);
app.use('/methodes_de_paiement', routeMethodesDePaiement);
app.use('/restaurants', routeRestaurants);
app.use('/roles', routeRoles);
app.use('/status_des_commandes', routeStatusCommande);

app.use('/utilisateurs', routeUtilisateurs);

//Login
app.use('/login',routerAuth)


app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))