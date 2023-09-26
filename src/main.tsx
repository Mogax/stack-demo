import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {ThemeProvider} from "@mui/material";
import {theme} from "./styles/Theme.ts";
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={routes}/>
        </ThemeProvider>
    </React.StrictMode>,
)
