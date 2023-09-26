import {createBrowserRouter} from "react-router-dom";
import {Anim} from "./components/Anim/Anim.tsx";
import {Pokelist} from "./components/PokeList/Pokelist.tsx";

export const routes = createBrowserRouter([
    {
        path:'/animation',
        element:<Anim/>
    },
    {
        path:'/pokeList',
        element:<Pokelist/>
    }
])
