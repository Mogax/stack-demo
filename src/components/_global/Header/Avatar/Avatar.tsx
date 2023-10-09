import {Avatar as AvatarMui, Menu, MenuItem} from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Avatar = () => {

    const [user, setUser] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (element?:'log'|'anim'|'pokelist') => {
        switch (element) {
            case 'anim':
                navigate('/animation')
                break
            case "pokelist":
                navigate('/pokelist')
                break
            case 'log':
                setUser(!user)
                setAnchorEl(null)
                break
            default:
                setAnchorEl(null)
        }
    }

    return (
        <>
            <AvatarMui alt="Avatar" src={`/src/assets/${user ? 'login' : 'avatar'}.png`} onClick={handleClick} sx={{cursor:'pointer', zIndex:10000}}/>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose()}
                container={anchorEl}
            >
                <MenuItem onClick={() => handleClose('log')}>{user ? 'Logout' : 'Log In'}</MenuItem>
                <MenuItem onClick={() => handleClose('anim')}>Animation</MenuItem>
                <MenuItem onClick={() => handleClose('pokelist')}>Pokelist</MenuItem>
            </Menu>
        </>
    )
}
