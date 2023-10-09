import {createBrowserRouter} from "react-router-dom";
import {Anim} from "./components/Anim/Anim.tsx";
import {Pokelist} from "./components/PokeList/Pokelist.tsx";
import App from "./App.tsx";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/animation',
        element:<Anim/>
    },
    {
        path:'/pokeList',
        element:<Pokelist/>
    }
])
