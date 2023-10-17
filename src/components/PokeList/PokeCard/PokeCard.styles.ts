import {theme} from "../../../styles/Theme.ts";

const palette = theme.palette
export const styles = {
    card:{
        margin:2
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        width:650
    },
    imgPokemon: {
        width: 150
    },
    stackName: {
        margin:5
    },
    boxName: {
        display:'flex'
    },
    nameLang: {
        fontSize:24,
        marginRight:1,
        color:palette.primary.main
    },
    typoName: {
        fontSize:24,
        color:palette.secondary.main
    },
    boxType: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    imgType: {
        width: 60
    },
    typeName: {
        fontSize:24,
        color:palette.primary.main,
        textAlign:'center'
    }
}
