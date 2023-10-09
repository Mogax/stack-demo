import {CardAnimTypes} from "./CardAnim/CardAnim.constant.ts";

export const listCard: CardAnimTypes[] = [
    {
        title:"Sélectionner",
        description:"Ceci est une animation qui se déclencherais lors de la selection d'une carte.",
        status:"select"
    },
    {
        title:"Faux",
        description:"Ceci est l'animation quand le carte sélectionner est fausse.",
        status:"wrong"
    },
    {
        title:"Désélection",
        description:"Ceci est l'animation qui se produit lorsque qu'un carte sélectionner est fausse et donc que la séléction s'enlève.",
        status:"unselect"
    },
    {
        title:"Correct",
        description:"Ceci est l'animation lorsque qu'un carte sélectionner est correct.",
        status:"correct"
    },
    {
        title:"Trouver",
        description:"Ceci est l'animation lorsque qu'un carte sélectionner est correct et donc que la carte s'enlève.",
        status:"find"
    }
]
