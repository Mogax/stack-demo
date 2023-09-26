import {keyframes} from "@emotion/react";

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
`;

export const styles = {
    card: {
        width:275,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 5,
        transition: "0.5s"
    },
    titleS:{
        textAlign: 'center',
        marginBottom: 2,
        fontSize:24,
        fontWeight:"700",
        color:"#AAB2FF",
        textDecoration:"underline"
    },
    descriptionS: {
        textAlign: 'center',
        fontSize:16,
        color:"#ECA0FF",
    },
    cardAction:{
        display:'flex',
        justifyContent:'space-around',
        width:1
    }
}

