import {useAtomValue} from "jotai/react";
import {pokeListAtom} from "./PokeList.constant.ts";
import {Box} from "@mui/material";
import {PokeCard} from "./PokeCard/PokeCard.tsx";
import {PokemonCardType} from "./PokeCard/PokeCard.constant.ts";

export const Pokelist = () => {

    const pokeList = useAtomValue(pokeListAtom)
    console.log(pokeList)
    return (
        <Box>
            {pokeList && pokeList.map((p:PokemonCardType) => (
                <PokeCard {...p} key={p.name.fr}/>
            ))}
        </Box>
    )
}
