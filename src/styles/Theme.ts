import {createTheme} from "@mui/material";

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        main:true
    }
}

export const theme = createTheme({
    components:{
        MuiTypography:{
          defaultProps:{
              fontFamily:"Kavoon",
          }
        },
        MuiButton:{
            variants:[
                {
                    props:{variant: 'main'},
                    style:{
                        fontFamily:"Kavoon",
                        backgroundColor:'#FFFFFF',
                        color:'#AAB2FF',
                        borderStyle: 'solid',
                        borderColor: "#AAB2FF",
                        borderWidth:3,
                        borderRadius: 15,
                        height:40,
                        fontSize: 20,
                        textTransform: 'none',
                        "&:hover":{
                            backgroundColor:'#FFFFFF',
                            borderColor: "#AAB2FF",
                            boxShadow:"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)"
                        },
                        "&:active":{
                            color:'#ECA0FF',
                            borderColor: "#ECA0FF"
                        }
                    }
                }
            ]
        }
    }
})
