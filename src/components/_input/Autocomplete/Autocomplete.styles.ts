import {theme} from "../../../styles/Theme.ts";

const palette = theme.palette
export const styles = {
    autocomplete:{
        margin: 2,
        width: '50%',
        "& .MuiOutlinedInput-notchedOutline": {
            border:'none',
            borderRadius: 5,
            boxShadow:"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)"
        }
    },
    divider:{
        backgroundColor:palette.primary.main,
        height:5
    },
    listItem:{
        color:palette.primary.main,
        display:'flex',
        "&:hover":{
            color:'#FFFFFF',
            backgroundColor:'#ECA0FF !important'
        }
    },
    startAdornment:{
        width:30,
        marginRight:10
    },
    endAdornment:{
        width:30,
        marginLeft:'auto'
    },
    paper:{
        borderRadius: 5,
        boxShadow:"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)"
    },
    textfield:{
        fontFamily:"Kavoon",
        color:palette.secondary.main,
        fontSize: 20,
    },
    inputAdornment:{
        width:50
    }
}
