import {keyframes} from "@emotion/react";
import {theme} from "../../../styles/Theme.ts";

const palette = theme.palette

export const shakeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`

export const styles = {
    card: {
        width:275,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 5,
        transition: "0.5s",
        margin:2
    },
    titleS:{
        textAlign: 'center',
        marginBottom: 2,
        fontSize:24,
        fontWeight:"700",
        color:palette.primary.main,
        textDecoration:"underline"
    },
    descriptionS: {
        textAlign: 'center',
        fontSize:16,
        color:palette.secondary.main,
    },
    cardAction:{
        display:'flex',
        justifyContent:'space-around',
        width:1
    }
}

