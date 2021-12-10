import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProyectosPage from '../components/proyectos/ProyectosPage';
import UsuariosPage from '../components/usuarios/UsuariosPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={< UsuariosPage />} />
                <Route path="/usuarios" element={<UsuariosPage />} />
                <Route path="/proyectos" element={<ProyectosPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
