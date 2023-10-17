import {Box, Stack, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {Avatar} from "./Avatar/Avatar.tsx";

export const Header = () => {
    return (
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <img src="/src/assets/logo.png" alt="logo" style={{width:40}}/>
                <Box sx={{display:'flex', flexDirection:'row', marginLeft:1}}>
                    <Typography sx={{fontSize:40, color:'#AAB2FF'}}>S</Typography>
                    <Typography sx={{fontSize:40, color:'#84FFC9'}}>t</Typography>
                    <Typography sx={{fontSize:40, color:'#ECA0FF'}}>a</Typography>
                    <Typography sx={{fontSize:40, color:'#AAB2FF'}}>c</Typography>
                    <Typography sx={{fontSize:40, color:'#ECA0FF'}}>k</Typography>
                </Box>

            </Box>
            <Stack sx={{margin:2}} spacing={1} direction={'row'}>
                <NavLink to={'/animation'} style={{textDecoration:'none', color:'#AAB2FF'}}><Typography>Animation</Typography></NavLink>
                <NavLink to={'/pokelist'} style={{textDecoration:'none', color:'#AAB2FF'}}><Typography>Pokelist</Typography></NavLink>
            </Stack>
            <Avatar/>
        </Box>
    );
};
