import * as React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {
  Stadium,
  CalendarMonth,
  ExpandMore,
  RectangleRounded,
  SportsSoccer,
} from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import { red } from "@mui/material/colors";
import { getGolsByPartida, getCartoes } from "../../api/brasileiraoapi";

const CardPartida = ({
  cor,
  escudoTimeA,
  golsMarcadosA,
  golsMarcadosB,
  escudoTimeB,
  timeA,
  timeB,
  data,
  local,
  partida,
}) => {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: 500,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  }));

  const CardSuperior = styled(Stack)(({ theme }) => ({
    backgroundColor: cor[50],
    //textAlign: "center"
    display: "flex",
    justifyContent: "center",
    height: 150,
  }));

  const CardInferior = styled(Stack)(({ theme }) => ({
    //backgroundColor: grey[900],
    //textAlign: "center"
    display: "flex",
    justifyContent: "center",
    height: 50,
  }));

  const [eventos, setEventos] = React.useState("none");
  const [rotacao, setRotacao] = React.useState(0);
  const [translacao, setTranslacao] = React.useState(0);
  const [listaGols, setListaGols] = React.useState([]);
  const [listaCartoes, setListaCartoes] = React.useState([]);

  const EventoCartao = ({ jogador, tempo, time }) => (
    <Stack direction={time == timeA ? "row" : "row-reverse"}>
      <Box
        color={red[700]}
        sx={{ transform: "rotate(90deg) translate(-3px, 2px)" }}
      >
        <RectangleRounded />
      </Box>
      <Typography variant="body1" marginX={0.5}>
        {jogador}
      </Typography>
      <Typography>
        {tempo.length > 2
          ? `${tempo.substring(0, 2)}+${tempo.substring(2)}`
          : tempo}
        '
      </Typography>
    </Stack>
  );

  const EventoGol = ({ jogador, minutagem, time }) => (
    <Stack direction={time == timeA ? "row" : "row-reverse"}>
      <Box color={cor[700]}>
        <SportsSoccer />
      </Box>
      <Typography variant={time == timeA ? "body1" : "body"} marginX={0.5}>
        {jogador}
      </Typography>
      <Typography>
        {minutagem.length > 2
          ? `${minutagem.substring(0, 2)}+${minutagem.substring(2)}`
          : minutagem}
        '
      </Typography>
    </Stack>
  );

  return (
    <Container>
      <Item elevation={3}>
        <CardSuperior direction="row" spacing={5} alignItems="center">
          <Stack alignItems="center" spacing={1}>
            <img src={escudoTimeA} width={60} height={80} alt="fla" />
            <Typography>{timeA}</Typography>
          </Stack>
          <Stack direction="row" spacing={3} alignItems="center">
            <Typography variant="h3">{golsMarcadosA}</Typography>
            <Typography variant="h3">x</Typography>
            <Typography variant="h3">{golsMarcadosB}</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <img src={escudoTimeB} width={60} height={80} alt="fla" />
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
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={async () => {
              const eventosAtivos = eventos === "none" ? "block" : "none";
              setEventos(eventosAtivos);
              if (rotacao === 0) {
                setRotacao(180);
                setTranslacao(-4);
              } else {
                setRotacao(0);
                setTranslacao(0);
              }

              if (eventosAtivos == "block") {
                const gols = await getGolsByPartida(partida);
                setListaGols(gols.data);
                const cartoes = await getCartoes(partida);
                setListaCartoes(cartoes.data);
              }
            }}
          >
            <Box
              color={cor[700]}
              sx={{
                transform: `translate(0, ${translacao}px) rotate(${rotacao}deg)`,
              }}
            >
              <ExpandMore />
            </Box>
            <Typography>Eventos</Typography>
          </Stack>
        </CardInferior>
        <Box display={eventos}>
          <Divider />
          <Box paddingY={2} paddingX={6}>
            {listaGols &&
              listaGols.map((g) => (
                <EventoGol
                  jogador={g.jogador}
                  minutagem={g.minutagem.toString()}
                  time={g.clube}
                />
              ))}
            {listaCartoes &&
              listaCartoes.map((c) => (
                c.cor == "Vermelho" && <EventoCartao
                  jogador={c.jogador}
                  tempo={c.tempo.toString()}
                  time={c.clube}
                />
              ))}
          </Box>
        </Box>
      </Item>
    </Container>
  );
};

export default CardPartida;
