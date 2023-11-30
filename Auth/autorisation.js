//Importer jwt
import jwt from 'jsonwebtoken'
import { Utilisateurs } from '../models/index.js'

export const verifierToken = (req, res, next) => {
    //Recuperation du token
    const bearerToken = req.headers.authorization

    //Verification de la presence du token
    if (!bearerToken) return res.status(401).json({ message: "Mais vous etes pas connecté!" })

    //Recuperer le token sans la partie Bearer
    const token = bearerToken.split(' ')[1]

    jwt.verify(token, process.env.CODE_SECRET, (err, payload) => {
        if (err) return res.status(401).json({ message: err.message })

        req.userId = payload.id

        next()
    })

}

export const isAdmin = async (req, res, next) => {

    //Recuperer l'id a partir de la req
    const id = req.userId

    //Chercher la personne dans la base de donnees

    try {
        const user = await Utilisateurs.findByPk(id)
        if (!user) return res.status(404).json({ message: "Cet utilisateur n'existe pas!" })

        //Recuperer le role de la personne 
        // Mettre uj autre try catch 
        const role = await user.getRole()

        if (role.titre.toLowerCase() == 'admin') {
            next()
            return
        } else{
            return res.status(403).json({ message: "Vous n'etes pas autorises..." })
        }


    } catch (error) {
        res.status(403).json({ message: error.message })
    }

}

