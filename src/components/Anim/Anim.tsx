import {CardAnim} from "./CardAnim/CardAnim.tsx"
import {listCard} from "./Anim.constant.ts"
import {Box} from "@mui/material";
import {styles} from "./Anim.styles.ts";

export const Anim = () => {

    const {container} = styles

    return (
        <Box sx={container}>
            {listCard.map((card) => (
                <CardAnim {...card}/>
            ))}
        </Box>
    );
};
