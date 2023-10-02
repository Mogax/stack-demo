import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import {useState} from "react";
import {PokemonCardType} from "./PokeCard.constant";
import {styles} from "./PokeCard.styles.ts";

export const PokeCard = (props:PokemonCardType) => {

    const {pokemon, types, name} = props
    const {typoName, boxName, boxType, imgType, nameLang, stackName, typeName, imgPokemon, cardContent} = styles
    const [hover, setHover] = useState(false)

    return (
        <Card>
            <CardContent sx={cardContent}>
                <img
                    src={pokemon + (hover ? "shiny" : "regular") + ".png"}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={imgPokemon} alt={"pokemon"}/>
                <Stack spacing={2} sx={stackName}>
                    <Box sx={boxName}>
                        <Typography sx={nameLang}>fr:</Typography>
                        <Typography sx={typoName}>{name.fr}</Typography>
                    </Box>
                    <Box sx={boxName}>
                        <Typography sx={nameLang}>jp:</Typography>
                        <Typography sx={typoName}>{name.jp}</Typography>
                    </Box>
                </Stack>
                <Stack direction={'row'} spacing={5}>
                    {types.map((type, index) => (
                        <Box sx={boxType} key={index}>
                            <img src={type.image} alt={"type"} style={imgType}/>
                            <Typography sx={typeName}>{type.name}</Typography>
                        </Box>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
};
