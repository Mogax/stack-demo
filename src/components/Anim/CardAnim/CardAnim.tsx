import {useState} from "react"
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material"
import {shakeAnimation, styles} from "./CardAnim.styles.ts"
import {CardAnimTypes} from "./CardAnim.constant.ts"

export const CardAnim = (props: CardAnimTypes) => {

    const {title, description, status} = props
    const {card, titleS, descriptionS, cardAction} = styles

    const [color, setColor] = useState('#FFFFFF')
    const [opacity, setOpacity] = useState(1)
    const [animation, setAnimation] = useState(false)

    const handleStart = () => {
        switch (status) {
            case 'select':
                setColor('#A0A0A0')
                break
            case 'wrong':
                setColor('#FF0000')
                break
            case 'correct':
                setColor('#14C800')
                break
            case 'find':
                setColor('#14C800')
                setTimeout(() => {
                    setOpacity(0)
                    setTimeout(() => {
                        handleClear()
                    }, 1000)
                }, 1000)
                break
            case 'unselect':
                setColor('#A0A0A0')
                setTimeout(() => {
                    setAnimation(true)
                    setTimeout(() => {
                        setColor('#FFFFFF')
                        setAnimation(false)
                    }, 1000)
                }, 1000)
                break
        }
    }

    const handleClear = () => {
        setColor("#FFFFFF")
        setOpacity(1)
    }

    return (
        <Card sx={{...card, backgroundColor: color, opacity: opacity, animation:animation ? `${shakeAnimation} 0.5s Infinite` : ''}} elevation={8} data-testid={"container"}>
            <CardContent>
                <Typography sx={titleS}>{title}</Typography>
                <Typography sx={descriptionS}>{description}</Typography>
            </CardContent>
            <CardActions sx={cardAction}>
                <Button variant={'main'} onClick={handleStart}>Start</Button>
                <Button variant={'main'} onClick={handleClear}>Clean</Button>
            </CardActions>
        </Card>
    )
}
