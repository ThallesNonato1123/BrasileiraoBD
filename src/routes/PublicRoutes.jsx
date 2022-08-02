import React from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Clubes from '../pages/Clubes/Clubes';
import Gols from '../pages/Gols/Gols';
import Rodadas from '../pages/Partidas/Partidas';
import Partidas from '../pages/Partidas/Partidas';
import { lightGreen, teal, red, lime, lightBlue } from '@mui/material/colors';

const color = teal;

const PublicRoutes = () => {
    return (
        <Routes>
            <Route
                path='/home' element={<Home/>} 
            />
            <Route
                path='/clubes' element={<Clubes cor={color}/>} 
            />
            
            <Route
                path='/gols' element={<Gols cor={color}/>} 
            />
            
            <Route
                path='/partidas' element={<Rodadas cor={color}/>} 
            />

            <Route
                path='/*' element={<Navigate to='/home' />} 
            />
        </Routes>
    );
};

export default PublicRoutes;
