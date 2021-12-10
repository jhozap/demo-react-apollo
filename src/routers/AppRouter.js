import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from '../components/container/Navbar';
import LoginPage from '../components/login/LoginPage';
import ProyectosPage from '../components/proyectos/ProyectosPage';
import UsuariosPage from '../components/usuarios/UsuariosPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={< UsuariosPage />} />
                <Route path="/usuarios" element={<UsuariosPage />} />
                <Route path="/proyectos" element={<ProyectosPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
