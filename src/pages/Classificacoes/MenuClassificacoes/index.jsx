import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { cyan, teal, lightGreen } from '@mui/material/colors';

export default function MenuClassificacoes({ cor }) {
    const [temporada, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 122, marginBottom: "10px" , bgcolor: cor[50]}} size="small">
            <InputLabel id="demo-select-small">Temporada</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={temporada}
                label="Temporada"
                onChange={handleChange}
            >
                {['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013','2012','2011'].map(
                    temporada => { return <MenuItem value = {temporada} >{temporada}</MenuItem> })}
            </Select>
        </FormControl>
    );
}
