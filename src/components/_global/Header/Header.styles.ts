import {theme} from "../../../styles/Theme.ts";

const palette = theme.palette

export const styles = {
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    logoContainer:{
        display:'flex',
        alignItems:'center'
    },
    logo:{
        width:40
    },
    nameContainer:{
        display:'flex',
        flexDirection:'row',
        marginLeft:1
    },
    primaryLetter:{
        fontSize:40,
        color:palette.primary.main
    },
    secondaryLetter:{
        fontSize:40,
        color:palette.secondary.main
    },
    successLetter:{
        fontSize:40,
        color:palette.success.main
    },
    stack:{
        margin:2
    },
    link:{
        textDecoration:'none',
    },
    linkText:{
        color:palette.primary.main,
        "&:hover":{
            color:palette.primary.light
        },
        "&:active":{
            color:palette.primary.dark
        }
    }
}
