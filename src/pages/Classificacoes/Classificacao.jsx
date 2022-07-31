import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import { green,cyan, lightGreen } from "@mui/material/colors";
import Menu from "../Classificacoes/MenuClassificacoes/";
import Container from "@mui/material/Container";

function criaClube(
    classificacao,
    nome,
    pontos,
    vitorias,
    empates,
    derrotas,
    escudo,
    golsPro,
    golsContra,
    saldoGols
) {
    return {
        classificacao,
        nome,
        pontos,
        vitorias,
        empates,
        derrotas,
        escudo,
        golsPro,
        saldoGols,
        golsContra
    };
}

const clubes = [
    criaClube(
        1,
        "Flamengo",
        38 * 3,
        38,
        0,
        0,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        999,
        0,
        999
    ),
    criaClube(
        2,
        "Esquisita do Ping",
        85,
        27,
        5,
        6,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        45,
        11,
        92
    ),
    criaClube(
        3,
        "Odín",
        91,
        25,
        5,
        8,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        55,
        55,
        0
    ),
    criaClube(
        4,
        "Ava MAX",
        75,
        25,
        5,
        8,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        55,
        55,
        0
    ),
    criaClube(
        5,
        "Gabigol",
        81,
        25,
        5,
        8,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        55,
        55,
        0
    ),
    criaClube(
        6,
        "Doe Sangue, Salve Vidas (Voce é o tipo de alguém)",
        22,
        25,
        5,
        8,
        "data:image/png;base64,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",
        55,
        55,
        0
    ),
    criaClube(
        7,
        "Ma Long",
        11,
        25,
        5,
        8,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        55,
        55,
        0
    ),
    criaClube(
        8,
        "Flu 👏",
        44,
        44,
        5,
        8,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        55,
        55,
        0
    ),
    criaClube(
        9,
        "Legião Urbana",
        35,
        25,
        5,
        8,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        55,
        55,
        0
    ),
    criaClube(
        10,
        "Comitê Olímpico Russo",
        22,
        25,
        5,
        8,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        55,
        55,
        0
    ),
    criaClube(
        17,
        "Dantzig",
        38,
        38,
        0,
        0,
        "https://kuniga.files.wordpress.com/2010/07/dantzig.jpg",
        999,
        0,
        999
    ),
    criaClube(
        11,
        "Vasco",
        113,
        25,
        5,
        8,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        55,
        55,
        0
    ),
    criaClube(
        12,
        "Manchester City",
        -13,
        25,
        5,
        8,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        55,
        55,
        0
    ),
    criaClube(
        17,
        "Maria Helena",
        38,
        38,
        0,
        0,
        "https://www4.pucsp.br/webcurriculo/edicoes_anteriores/2012/palestrantes/imagens/maria_helena.jpg",
        999,
        0,
        999
    ),
    criaClube(
        15,
        "Giseli Rabello Lopes",
        38,
        38,
        0,
        0,
        "https://dcc.ufrj.br/~giseli/images/foto.jpg",
        999,
        0,
        999
    ),
    criaClube(
        14,
        "Hugo Nobrega",
        38,
        38,
        0,
        0,
        "https://www.hugonobrega.com/authors/hugo/avatar_hu2214a6f9ea6ad65e305a2a4c1d4793f3_43441_250x250_fill_q90_lanczos_center.jpg",
        999,
        0,
        999
    ),
    criaClube(
        1,
        "Flamengo",
        38 * 3,
        38,
        0,
        0,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        999,
        0,
        999
    ),
    criaClube(
        1,
        "Flamengo",
        38 * 3,
        38,
        0,
        0,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        999,
        0,
        999
    ),
    criaClube(
        1,
        "Flamengo",
        38 * 3,
        38*2,
        0,
        0,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        999,
        0,
        999
    ),
    criaClube(
        1,
        "Flamengo",
        38 * 3,
        38,
        0,
        0,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png",
        999,
        0,
        999
    )
];

export default function Classificacao({ cor }) {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: cor[800],
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14
        }
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        backgroundColor: cor[50],
        "&:nth-of-type(odd)": {
            //backgroundColor: theme.palette.grey[50]
            backgroundColor: "white",
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0
        },
        "&:hover": {
            backgroundColor: theme.palette.action.hover
        }
    }));
    
    return (
        <Container>
            <Menu cor={cor}/>
            <TableContainer>
                <Table sx={{ minWidth: 700, maxWidth: 1200 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ padding: 0 }}></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell align="left">Clube</StyledTableCell>
                            <StyledTableCell align="right">Pontos</StyledTableCell>
                            <StyledTableCell align="right">V</StyledTableCell>
                            <StyledTableCell align="right">E</StyledTableCell>
                            <StyledTableCell align="right">D</StyledTableCell>
                            <StyledTableCell align="right">GP</StyledTableCell>
                            <StyledTableCell align="right">GC</StyledTableCell>
                            <StyledTableCell align="right">SG</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clubes.map((clube, i) => (
                            <StyledTableRow key={clube.nome}>
                                <StyledTableCell
                                    align="right"
                                    sx={{
                                        backgroundColor: i < 4 ? "green" : i > 15 ? "red" : "white",
                                        width: "3px",
                                        padding: "0px"
                                    }}
                                ></StyledTableCell>
                                <StyledTableCell align="right">
                                    {clube.classificacao}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                        justifyContent="flex-start"
                                    >
                                        <img alt={clube.nome} src={clube.escudo} width="20" />
                                        <div>{clube.nome}</div>
                                    </Stack>
                                </StyledTableCell>
                                <StyledTableCell align="right">{clube.pontos}</StyledTableCell>
                                <StyledTableCell align="right">
                                    {clube.vitorias}
                                </StyledTableCell>
                                <StyledTableCell align="right">{clube.empates}</StyledTableCell>
                                <StyledTableCell align="right">
                                    {clube.derrotas}
                                </StyledTableCell>
                                <StyledTableCell align="right">{clube.golsPro}</StyledTableCell>
                                <StyledTableCell align="right">
                                    {clube.golsContra}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {clube.saldoGols}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
