import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {
    const {toggleDrawerOpen , setDrawerOptions} = useDrawerContext();
    useEffect( ()=>{
        setDrawerOptions([
            {
                path: '/pagina-inicial',
                label: 'Página inicial',
                icon: 'home',
            },
            {
                path: '/cidades',
                label: 'Cidades',
                icon: 'star',
            }
        ]);
    },[]);

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>MENU</Button>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    );
}