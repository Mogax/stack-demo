import {atom} from "jotai/vanilla";
import axios from "axios";
import {PokemonCardType} from "./PokeCard/PokeCard.constant.ts";

type tempPokemonApi = {
    sprites:{
        regular:string
    },
    name:{
        fr:string,
        jp:string
    },
    types:[{name:string, image:string}]
}

export const pokeListAtom = atom<PokemonCardType[]>([])
pokeListAtom.onMount = (setAtom) => {
    axios.get('https://api-pokemon-fr.vercel.app/api/v1/pokemon')
        .then((response) => {
            const reformat = response.data.slice(1, 10).map((item:tempPokemonApi) => {
                return {
                    pokemon: item.sprites.regular.split('regular')[0],
                    name:{
                        fr:item.name.fr,
                        jp: item.name.jp
                    },
                    types: item.types
                }
            })
            setAtom(reformat)
        })
}
