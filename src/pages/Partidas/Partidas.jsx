import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import CardPartida from "./CardPartida.jsx";
import Grid from "@mui/material/Grid";
import Menu from "../../components/Menu";
import { temporadas, rodadas } from "../../api/constants";
import Box from "@mui/material/Box";
import { cyan, lightGreen, teal, green, grey } from "@mui/material/colors";
import { getPartidas } from "../../api/brasileiraoapi";

const cores = [cyan, lightGreen, teal, green, grey];

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
    partidas?.data && setListaPartidas(partidas.data);
    console.log(listaPartidas);
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
        escolido={rodada}
        handleChange={handleRodadaChange}
      />
      <Container>
        <Box sx={{ marginLeft: 3 }}></Box>
        <Grid container spacing={5} columns={2}>
          {listaPartidas.map((p, i) => (
            <Grid item>
              <CardPartida
                cor={cores[i % len(cores)]}
                timeA={"andre"}
                timeB={"caio"}
                data={"hoje"}
                local={"ccmn"}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default Rodadas;
