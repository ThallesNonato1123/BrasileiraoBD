import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { getPartidas } from "../../api/brasileiraoapi";

const ariaLabel = { "aria-label": "description" };

export default function PartidaInsercao() {
  const InserePartida = () => {};

  const InsercaoModal = () => {
    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{margin:2}}>
          <Input placeholder="Clube Vencedor" inputProps={ariaLabel} />
          <Input placeholder="Rodada" inputProps={ariaLabel} />
          <Input placeholder="Estadio" inputProps={ariaLabel} />
          <Input placeholder="Mandante" inputProps={ariaLabel} />
          <Input placeholder="Visitante" inputProps={ariaLabel} />
          <Input placeholder="Placar Mandante" inputProps={ariaLabel} />
          <Input placeholder="Placar Visitante" inputProps={ariaLabel} />
          <Button sx={{width:100,marginTop:2,marginBottom:2}} variant="contained" color="success" onClick={() => setShowModal(!showModal)}>Inserir</Button>
        </Stack>
      </Box>
    );
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <Box>
      <Button sx={{width:200,marginBottom:2}} variant="contained" color="success" onClick={() => setShowModal(!showModal)}>Inserir partida</Button>
      {showModal && <InsercaoModal />}
    </Box>
  );
}
