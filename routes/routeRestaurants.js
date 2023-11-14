//Fonction permettant de créer des routes
import { Router } from "express";
import { ajouterRestaurant,listRestaurants,RestaurantsParId,modifierRestaurant,supprimerRestaurant } from "../controllers/restaurants.js";
const routeRestaurants = Router();

//Les routes deviennent

routeRestaurants .get('/', listRestaurants)
.get('/:id', RestaurantsParId)
.post('/', ajouterRestaurant)
.put('/:id',modifierRestaurant )
.delete('/:id',supprimerRestaurant)

export default routeRestaurants;