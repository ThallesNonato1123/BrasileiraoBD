import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import { green,cyan, lightGreen } from "@mui/material/colors";
import Container from "@mui/material/Container";
import { getTimes } from '../../api/brasileiraoapi'

export default function Clubes({ cor }) {
    const [listaTimes, setListaTimes] = useState([]);
    const atualizaTimes = async () => {
        const times = await getTimes()
        setListaTimes(times.data);
    }

    useEffect(() => {atualizaTimes()},[])

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
            <TableContainer>
                <Table sx={{ minWidth: 700, maxWidth: 1200 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ padding: 0 }}></StyledTableCell>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Sigla</StyledTableCell>
                            <StyledTableCell>Data de criação</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listaTimes && listaTimes.map((clube, i) => (
                            <StyledTableRow key={clube.nome}>
                                <StyledTableCell
                                    align="right"
                                    sx={{
                                        backgroundColor: i < 4 ? "green" : i > 15 ? "red" : "white",
                                        width: "3px",
                                        padding: "0px"
                                    }}
                                ></StyledTableCell>
                                <StyledTableCell align="left">
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                        justifyContent="flex-start"
                                    >
                                        <img src={clube.escudo} width="20" />
                                        <div>{clube.clube}</div>
                                    </Stack>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Stack
                                        display="table-cell"
                                    >
                                        <div>{clube.sigla}</div>
                                    </Stack>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Stack>
                                        <div>{clube.dataCriacao}</div>
                                    </Stack>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}