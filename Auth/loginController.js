//Importer le modele de l'utilisateur du restaurant.
import { Utilisateurs } from "../models/index.js";

//Importer le module qui cree le jeton d'authentification (token)
import  Jwt  from 'jsonwebtoken';

//Importer le module de hachage
import bcrypt from 'bcryptjs';

export const login = async (req, res) => {
    //Recuperation du login et mot de passe de l'utilisateur

    const {emailUtilisateur, motDePasse } = req.body; 

    if (!emailUtilisateur) return res.status(404).json({ message: "L'email est obligatoire!" })

    try {
        //Allons-y chercher l'utilisateur dans la base de donnee
        const user = await Utilisateurs.findOne({ where: { emailUtilisateur } })

        if (!user) return res.status(404).json({ message: "Cet utilisateur n'existe pas" })

        //Verification du mot de passe

        const mdpVerifie = bcrypt.compareSync(motDePasse, user.motDePasse)

        if (!mdpVerifie) return res.status(400).json({ message: "Mot de passe incorrect" })

        //Tout est correct, nous allons donner une clef (token) a l'utilisateur

        const payload = { id: user.id }

        const token = jwt.sign(payload, process.env.CODE_SECRET)

        res.status(200).json({ data: user, token })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}


