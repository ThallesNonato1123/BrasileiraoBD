import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { cyan, teal, lightGreen } from '@mui/material/colors';

export default function Menu({ cor, nome, valores, escolhido, handleChange }) {
    return (
        <FormControl sx={{ minWidth: 150, marginBottom: "10px" , bgcolor: cor[50],marginRight:"3px"}} size="small">
            <InputLabel id="demo-select-small">{nome}</InputLabel>
            <Select
                MenuProps={{
                    style:{
                        zIndex:1
                    }
                }}
                labelId="demo-select-small"
                id="demo-select-small"
                value={escolhido ?? ""}
                label={nome}
                onChange={handleChange}
            >
                {valores?.map(valor => <MenuItem value = {valor} >{valor}</MenuItem> ) ?? []}
            </Select>
        </FormControl>
    );
}