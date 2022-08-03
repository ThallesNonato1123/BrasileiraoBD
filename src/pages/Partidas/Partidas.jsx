import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import CardPartida from "./CardPartida.jsx";
import Grid from "@mui/material/Grid";
import Menu from "../../components/Menu";
import { temporadas, rodadas } from "../../api/constants";
import Box from "@mui/material/Box";
import { cyan, lightGreen, teal, green, grey } from "@mui/material/colors";
import { getPartidas } from "../../api/brasileiraoapi";
import PartidaInsercao from "./PartidaInsercao";

const cores = [cyan, lightGreen, teal, green];

const Rodadas = ({ cor }) => {
  const [temporada, setTemporada] = useState("");
  const [rodada, setRodada] = useState("");
  const [listaPartidas, setListaPartidas] = useState([]);

  const handleTemporadaChange = (e) => {
    setTemporada(e.target.value);
    handleCombinationChange(rodada, e.target.value);
  };

  const handleRodadaChange = (e) => {
    setRodada(e.target.value);
    handleCombinationChange(e.target.value, temporada);
  };
  const handleCombinationChange = async (rodada, temporada) => {
    const partidas =
      rodada && temporada && (await getPartidas(rodada, temporada));

    if (!partidas?.data) return;

    const temp = [];
    for (let i = 0; i < partidas.data.length; i += 2) {
      temp.push([partidas.data[i], partidas.data[i + 1]]);
    }
    setListaPartidas(temp);
  };

  return (
    <>
      <Menu
        cor={cor}
        nome="TEMPORADA"
        valores={temporadas}
        escolhido={temporada}
        handleChange={handleTemporadaChange}
      />
      <Menu
        cor={cor}
        nome="RODADA"
        valores={rodadas}
        escolhido={rodada}
        handleChange={handleRodadaChange}
      />

      <PartidaInsercao/>

      <Container>
        <Box sx={{ marginLeft: 3 }}></Box>
        <Grid container spacing={5} columns={2}>
          {listaPartidas &&
            listaPartidas.map((partida, i) => (
              <Grid item key={partida[0].clube+partida[1].clube+i}>
                <CardPartida
                  cor={cores[i % cores.length]}
                  timeA={partida[0].clube}
                  escudoTimeA={partida[0].escudo}
                  golsMarcadosA={partida[0].quantidadeGols}
                  timeB={partida[1].clube}
                  escudoTimeB={partida[1].escudo}
                  golsMarcadosB={partida[1].quantidadeGols}
                  data={partida[0].dataPartida}
                  local={partida[0].estadio}
                  partida={partida[0].idPartida}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
      <Container>
        <Box sx={{ marginTop: 10 }}>
          {temporada && rodada && listaPartidas?.length == 0 && (
            <h3>
              No ano de {temporada} o campeonato não chegou na rodada {rodada}.
            </h3>
          )}
        </Box>
      </Container>
    </>
  );
};
export default Rodadas;
