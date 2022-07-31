import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Box, Container } from '@mui/system';
import Menu from "../Classificacoes/MenuClassificacoes";
import { ListItemButton } from '@mui/material';
import { cyan, lightGreen, teal } from '@mui/material/colors';
import ClubesMenu from '../Gols/MenuClubes/MenuClubes.jsx'




const Gols = ({cor}) => {

    return (
        <Container>
            <Menu cor={cor}/>
            <ClubesMenu/>
            <List sx={{ maxHeight: 900, bgcolor: 'white', marginTop: 1 }}
                subheader={
                    <ListSubheader sx={{ bgcolor: cor[900], borderColor:'orange', color:'white' }}>
                        <b sx={{color:'white'}}>Gols</b>
                    </ListSubheader>
                }>
                {tableData.map((row) => (
                    <ListItemButton>
                        <ListItemText primary={row.nome} secondary={
                            <div>
                                <img src={row.clube} width='20' />
                                <>{" " + row.time}</>
                            </div>
                        } />
                        <div>
                            {row.gols + " gols"}
                        </div>
                    </ListItemButton>
                ))
                }
            </List>
        </Container>
    );
};

const tableData = [
    {
        id: 1,
        nome: 'German Cano',
        gols: '1000',
        clube: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1024px-FFC_escudo.svg.png",
        time: 'Fluminense'
    },

    {
        id: 2,
        nome: 'Jhon Arias',
        gols: '999',
        clube: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1024px-FFC_escudo.svg.png',
        time: 'Fluminense'
    },

    {
        id: 3,
        nome: 'PH Ganso',
        gols: '998',
        clube: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1024px-FFC_escudo.svg.png',
        time: 'Fluminense'
    },

    {
        id: 4,
        nome: 'Nonato',
        gols: '997',
        clube: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1024px-FFC_escudo.svg.png',
        time: 'Fluminense'
    },

    {
        id: 5,
        nome: 'Nino',
        gols: '997',
        clube: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1024px-FFC_escudo.svg.png',
        time: 'Fluminense'
    },

    {
        id: 6,
        nome: 'André',
        gols: '997',
        clube: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1024px-FFC_escudo.svg.png',
        time: 'Fluminense'
    },

    {
        id: 7,
        nome: 'Caio Paulista',
        gols: '997',
        clube: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1024px-FFC_escudo.svg.png',
        time: 'Fluminense'
    },

    {
        id: 8,
        nome: 'Fernando Diniz',
        gols: '997',
        clube: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1024px-FFC_escudo.svg.png',
        time: 'Fluminense'
    },

    {
        id: 8,
        nome: 'Fernando Diniz',
        gols: '997',
        clube: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1024px-FFC_escudo.svg.png',
        time: 'Fluminense'
    },
    
    
    
]

export default Gols