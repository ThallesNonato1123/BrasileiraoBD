import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { lightGreen } from '@mui/material/colors';

export default function MenuRodadas() {
    const [temporada, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    let rodadas = []
    for(let i = 1 ; i <= 15 ; i++)
        rodadas.push(i.toString())
    return (
        <FormControl sx={{ minWidth: 122, marginBottom: "10px", marginLeft:"8px",bgcolor:lightGreen[50]}} size="small">
            <InputLabel id="demo-select-small">Rodada</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={temporada}
                label="Temporada"
                onChange={handleChange}
            >
                {
                rodadas.map(
                    temporada => { return <MenuItem value = {temporada} >{temporada}</MenuItem> })}
            </Select>
        </FormControl>
    );
}