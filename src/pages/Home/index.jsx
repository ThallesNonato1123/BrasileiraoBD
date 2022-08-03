import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import './styles.css';
import jogoPao from './jogoPao.png'; 

const Home = () => {
    return (
        <>
            <Box>
                <img  width="85%" src={jogoPao} />
            </Box>
        </>
    );
};

export default Home;
