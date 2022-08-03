import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from "../../components/Menu";
import { ListItemButton } from '@mui/material';
import { cyan, lightGreen, teal,green } from '@mui/material/colors';
import { temporadas } from '../../api/constants'
import { getTimes, getGolsByTemporada } from '../../api/brasileiraoapi'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'green',
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function Gols({ cor }) {
    const [temporada, setTemporada] = useState('');
    const [clube, setClube] = useState('');
    const [listaTimes, setListaTimes] = useState([]);
    const [listaGols, setListaGols] = useState([]);

    const atualizaTimes = async () => {
        const times = await getTimes()
        setListaTimes(times.data.map(time => time.clube));
    }

    useEffect(() => { atualizaTimes() }, [])

    const handleTemporadaChange = (e) => {
        setTemporada(e.target.value)
        handleCombinationChange(e.target.value, clube)
    }

    const handleClubeChange = (e) => {
        setClube(e.target.value)
        handleCombinationChange(temporada, e.target.value)
    }

    const handleCombinationChange = async (temporada, clube) => {
        const listaGols = temporada && clube && await getGolsByTemporada(temporada, clube)
        listaGols?.data && setListaGols(listaGols.data)
    }

    return (
        <Container>
            <Menu cor={cor} nome="TEMPORADA" valores={temporadas} escolhido={temporada} handleChange={handleTemporadaChange}  />
            <Menu cor={cor} nome="CLUBE" valores={listaTimes} escolhido={clube} handleChange={handleClubeChange} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Jogador</StyledTableCell>
                            <StyledTableCell >Gols</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listaGols && listaGols.sort((a,b) => b.quantidadeGols - a.quantidadeGols).map((gol=> (
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    {gol.jogador}
                                </StyledTableCell>
                                <StyledTableCell align="left">{gol.quantidadeGols}</StyledTableCell>
                            </StyledTableRow>
                        )))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};