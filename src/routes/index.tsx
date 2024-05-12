// import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
    const {setDrawerOptions} = useDrawerContext();
    useEffect( ()=>{
        setDrawerOptions([
            {
                path: '/pagina-inicial',
                label: 'Página inicial',
                icon: 'home',
            }
        ]);
    },[]);

    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard/>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    );
}