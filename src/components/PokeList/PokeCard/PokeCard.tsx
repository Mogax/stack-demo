import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import {useState} from "react";
import {PokemonCardType} from "./PokeCard.constant";

export const PokeCard = (props:PokemonCardType) => {

    const {pokemon, types, name} = props
    const [hover, setHover] = useState(false)

    return (
        <Card>
            <CardContent sx={{display: 'flex', alignItems: 'center', width:650}}>
                <img
                    src={pokemon + (hover ? "shiny" : "regular") + ".png"}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{width: 150}} alt={"pokemon"}/>
                <Stack spacing={2} sx={{margin:5}}>
                    <Box sx={{display:'flex'}}>
                        <Typography sx={{fontSize:24, marginRight:1, color:'#AAB2FF'}}>fr:</Typography>
                        <Typography sx={{fontSize:24, color:'#ECA0FF'}}>{name.fr}</Typography>
                    </Box>
                    <Box sx={{display:'flex'}}>
                        <Typography sx={{fontSize:24, marginRight:1, color:'#AAB2FF'}}>jp:</Typography>
                        <Typography sx={{fontSize:24, color:'#ECA0FF'}}>{name.jp}</Typography>
                    </Box>
                </Stack>
                <Stack direction={'row'} spacing={5}>
                    {types.map((type, index) => (
                        <Box sx={{display:'flex', flexDirection:'column', alignItem:'center'}} key={index}>
                            <img src={type.image} alt={"type"}/>
                            <Typography sx={{fontSize:24, color:'#AAB2FF', textAlign:'center'}}>{type.name}</Typography>
                        </Box>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
};
