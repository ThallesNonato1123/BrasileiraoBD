import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from "@mui/material/styles";
import { red, green, grey, lightGreen, teal, cyan } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stadium, CalendarMonth } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import Menu from "../../components/Menu";
import CardPartida from './CardPartida.jsx';
import Grid from '@mui/material/Grid';

const Rodadas = ({ cor }) => {
    return (
        <Container>
            <Box sx={{marginLeft: 3}}>
            </Box>
            <Grid container spacing={5} columns={2}>
                <Grid item>
                    <CardPartida cor={lightGreen} />
                </Grid>
                <Grid item>
                    <CardPartida cor={teal} />
                </Grid>
                <Grid item>
                    <CardPartida cor={grey} />
                </Grid>
                <Grid item>
                    <CardPartida cor={cyan} />
                </Grid>
            </Grid>
        </Container>
    );
}
export default Rodadas;