import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { cyan, teal, lightGreen } from '@mui/material/colors';

export default function MenuClubes() {
    const [temporada, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ marginLeft:"8px", minWidth: 122, marginBottom: "10px" , bgcolor: lightGreen[50]}} size="small">
            <InputLabel id="demo-select-small">Time</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={temporada}
                label="Temporada"
                onChange={handleChange}
            >
                {['Flamengo', 'Fluminense', 'Vasco', 'Athletico-PR', 'Corinthians', 'Botafogo', 'NEY', 'TETEU','NENEO','MELP'].map(
                    temporada => { return <MenuItem value = {temporada} >{temporada}</MenuItem> })}
            </Select>
        </FormControl>
    );
}
