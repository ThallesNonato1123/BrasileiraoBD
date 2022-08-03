import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Stadium, CalendarMonth, ExpandMore, RectangleRounded } from '@mui/icons-material';
import Paper from '@mui/material/Paper';

const CardPartida = ({ cor, escudoTimeA, golsMarcadosA, golsMarcadosB, escudoTimeB, timeA, timeB, data, local }) => {
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

    const [eventosAtivo, setEventos] = React.useState("none");
    const [rotacao, setRotacao] = React.useState(0);
    const [translacao, setTranslacao] = React.useState(0);

    return (
        <Container>
            <Item elevation={3}>
                <CardSuperior direction="row" spacing={5} alignItems="center">
                <Stack alignItems="center" spacing={1}>
                    <img
                    src={escudoTimeA}
                    width={60}
                    height={80}
                    alt="fla"
                    />
                    <Typography>{timeA}</Typography>
                </Stack>
                <Stack direction="row" spacing={3} alignItems="center">
                    <Typography variant="h3">{golsMarcadosA}</Typography>
                    <Typography variant="h3">x</Typography>
                    <Typography variant="h3">{golsMarcadosB}</Typography>
                </Stack>
                <Stack alignItems="center" spacing={1}>
                    <img
                    src={escudoTimeB}
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
                    <Typography textTransform="capitalize">{local}</Typography>
                </Stack>
                </CardInferior>
                <Box display={eventosAtivo}>
                    <Divider />
                    <Box paddingY={2} paddingX={6}>
                        <Stack direction="row">
                        <Box color={cor[700]}>
                            <SportsSoccer />
                        </Box>
                        <Typography variant="body1" marginX={0.5}>
                            Brocador
                        </Typography>
                        <Typography>42'</Typography>
                        </Stack>
                        <Stack direction="row-reverse">
                        <Box color={cor[700]}>
                            <SportsSoccer />
                        </Box>
                        <Typography marginX={0.5}>Atacante Elton</Typography>
                        <Typography>75'</Typography>
                        </Stack>
                        <Stack direction="row">
                        <Box
                            color={red[700]}
                            sx={{ transform: "rotate(90deg) translate(-3px, 2px)" }}
                        >
                            <RectangleRounded />
                        </Box>
                        <Typography variant="body1" marginX={0.5}>
                            Cáceres
                        </Typography>
                        <Typography>90'</Typography>
                        </Stack>
                    </Box>
                </Box>
            </Item>
        </Container>
    );
}

export default CardPartida;
