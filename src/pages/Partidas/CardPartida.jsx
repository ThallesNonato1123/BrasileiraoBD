import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stadium, CalendarMonth } from '@mui/icons-material';
import Paper from '@mui/material/Paper';

const CardPartida = ({ cor, timeA, timeB, data, local }) => {
    const Item = styled(Paper)(({ theme }) => ({
        textAlign: "center",
        color: theme.palette.text.secondary,
        width: 500,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        /*transition: theme.transitions.create(["background-color", "transform"], {
            duration: theme.transitions.duration.standard
        }),
        "&:hover": {
            transform: "scale(1.01)"
        }*/
    }));
    
    const CardSuperior = styled(Stack)(({ theme }) => ({
        backgroundColor: cor[50],
        //textAlign: "center"
        display: "flex",
        justifyContent: "center",
        height: 150
    }));
    
    const CardInferior = styled(Stack)(({ theme }) => ({
        //backgroundColor: grey[900],
        //textAlign: "center"
        display: "flex",
        justifyContent: "center",
        height: 50
    }));

    return (
        <Container>
            <Item elevation={3}>
                <CardSuperior direction="row" spacing={5} alignItems="center">
                <Stack alignItems="center" spacing={1}>
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png"
                    width={60}
                    height={80}
                    alt="fla"
                    />
                    <Typography>{timeA}</Typography>
                </Stack>
                <Stack direction="row" spacing={3} alignItems="center">
                    <Typography variant="h3">0</Typography>
                    <Typography variant="h3">x</Typography>
                    <Typography variant="h3">3</Typography>
                </Stack>
                <Stack alignItems="center" spacing={1}>
                    <img
                    src="https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1024px-FFC_escudo.svg.png"
                    width={60}
                    height={80}
                    alt="fla"
                    />
                    <Typography>{timeB}</Typography>
                </Stack>
                </CardSuperior>
                <CardInferior direction="row" spacing={4} alignItems="center">
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Box color={cor[700]}>
                    <CalendarMonth />
                    </Box>
                    <Typography>{data}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Box color={cor[700]}>
                    <Stadium />
                    </Box>
                    <Typography>{local}</Typography>
                </Stack>
                </CardInferior>
            </Item>
        </Container>
    );
}

export default CardPartida;
