import React from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Classificacoes from '../pages/Classificacoes/Classificacao';
import Gols from '../pages/Gols/Gols';
import Rodadas from '../pages/Estatisticas/Rodadas';
import Partidas from '../pages/Partidas/Partidas';
import { lightGreen, teal, red, lime, lightBlue } from '@mui/material/colors';

const color = lightGreen;

const PublicRoutes = () => {
    return (
        <Routes>
            <Route
                path='/home' element={<Home/>} 
            />
            <Route
                path='/classificacoes' element={<Classificacoes cor={color}/>} 
            />
            
            <Route
                path='/gols' element={<Gols cor={color}/>} 
            />
            
            <Route
                path='/rodadas' element={<Rodadas cor={color}/>} 
            />

            <Route
                path='/outros' element={<Partidas/>} 
            />

            <Route
                path='/*' element={<Navigate to='/home' />} 
            />
        </Routes>
    );
};

export default PublicRoutes;
