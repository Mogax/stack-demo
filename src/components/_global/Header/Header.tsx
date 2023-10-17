import {Box, Stack, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {Avatar} from "./Avatar/Avatar.tsx";
import {styles} from "./Header.styles.ts";

export const Header = () => {

    const {logo, logoContainer, container, nameContainer, secondaryLetter, primaryLetter, successLetter, stack, link, linkText} = styles

    return (
        <Box sx={container}>
            <Box sx={logoContainer}>
                <img src="/src/assets/logo.png" alt="logo" style={logo}/>
                <Box sx={nameContainer}>
                    <Typography sx={primaryLetter}>S</Typography>
                    <Typography sx={successLetter}>t</Typography>
                    <Typography sx={secondaryLetter}>a</Typography>
                    <Typography sx={primaryLetter}>c</Typography>
                    <Typography sx={secondaryLetter}>k</Typography>
                </Box>

            </Box>
            <Stack sx={stack} spacing={1} direction={'row'}>
                <NavLink to={'/animation'} style={link}><Typography sx={linkText}>Animation</Typography></NavLink>
                <NavLink to={'/pokelist'} style={link}><Typography sx={linkText}>Pokelist</Typography></NavLink>
            </Stack>
            <Avatar/>
        </Box>
    );
};
