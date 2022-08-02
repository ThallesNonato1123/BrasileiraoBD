import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import { green, red } from "@mui/material/colors";
import Container from "@mui/material/Container";
import { getTimes } from '../../api/brasileiraoapi'

export default function Clubes({ cor }) {
    const [listaTimes, setListaTimes] = useState([]);
    const atualizaTimes = async () => {
        const times = await getTimes()
        setListaTimes(times.data);
    }

    useEffect(() => { atualizaTimes() }, [])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: cor[900],
            color: "white"
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14
        }
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: "white"
        },
        "&:nth-of-type(even)": {
            backgroundColor: cor[50]
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0
        },
        "&:hover": {
            backgroundColor: theme.palette.action.hover
            //backgroundColor: cor[100]
            //filter: "brightness(50%)"
        }
    }));

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
            "Coritiba",
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
            "XV de Jaú",
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
            "Galo (forte)",
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
            "LOUD",
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
            13,
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
            14,
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
            15,
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
            16,
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
            18,
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
            19,
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
            20,
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
            21,
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
            22,
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
            23,
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
            24,
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

    ];

    return (
        <Container>
            <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
                                        backgroundColor:
                                            i < 4 ? green[500] : i > 7 ? red[500] : "white",
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
