import React from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { postPartida } from "../../api/brasileiraoapi";

export default function PartidaInsercao() {
  const inserePartida = async (payload) => {
    console.log(payload);
    await postPartida(payload);
    setShowModal(false);
  };

  const InsercaoModal = () => {
    const [mandante, setMandante] = useState("");
    const [visitante, setVisitante] = useState("");
    const [data, setData] = useState("");
    const [rodada, setRodada] = useState("");
    const [estadio, setEstadio] = useState("");
    const [placarMandante, setPlacarMandante] = useState("");
    const [placarVisitante, setPlacarVisitante] = useState("");
    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ margin: 2 }}>
          <Input
            placeholder="Rodada"
            value={rodada}
            onChange={(e) => setRodada(e.target.value)}
          />
          <Input
            placeholder="Estadio"
            value={estadio}
            onChange={(e) => setEstadio(e.target.value)}
          />
          <Input
            placeholder="Mandante"
            value={mandante}
            onChange={(e) => setMandante(e.target.value)}
          />
          <Input
            placeholder="Visitante"
            value={visitante}
            onChange={(e) => setVisitante(e.target.value)}
          />
          <Input
            placeholder="Data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
          />
          <Input
            placeholder="Placar Mandante"
            value={placarMandante}
            onChange={(e) => setPlacarMandante(e.target.value)}
          />
          <Input
            placeholder="Placar Visitante"
            value={placarVisitante}
            onChange={(e) => setPlacarVisitante(e.target.value)}
          />
          <Button
            sx={{ width: 100, marginTop: 2, marginBottom: 2 }}
            variant="contained"
            color="success"
            onClick={() =>
              inserePartida({
                mandante: mandante,
                visitante: visitante,
                dataPartidaIN: data,
                rodadaIN: +rodada,
                estadioIN: estadio,
                placarMandante: +placarMandante,
                placarVisitante: +placarVisitante,
                clubeVencedorIN:
                  placarMandante == placarVisitante
                    ? "Empate"
                    : placarMandante > placarVisitante
                    ? mandante
                    : visitante,
                tecnicoMandante: "Juca",
                tecnicoVisitante: "Juca",
                formacaoMandante: "1-1-1-1",
                formacaoVisitante: "1-1-1-1"
              })
            }
          >
            Inserir
          </Button>
        </Stack>
      </Box>
    );
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <Box>
      <Button
        sx={{ width: 200, marginBottom: 2 }}
        variant="contained"
        color="success"
        onClick={() => setShowModal(!showModal)}
      >
        Inserir partida
      </Button>
      {showModal && <InsercaoModal />}
    </Box>
  );
}
