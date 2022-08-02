import React, {useState, useEffect} from 'react';
import * as brasileiraoapi from '../../api/brasileiraoapi'

const Partidas = () => {
    const [inputPartida, setInputPartida] = useState("aaaa");
    const [listaPartidas, setListaPartidas] = useState([]);
    const getPartidas = async () => {
        const partidas = await brasileiraoapi.getPartidas(inputPartida)
        setListaPartidas(partidas.data);
        console.log(partidas.data)
    }
    return (
        <>
            <form>
                <input type="text" value={inputPartida} onChange={(e)=>setInputPartida(e.target.value)}/>
                <button type="button" onClick={getPartidas}>Me aperta ney!</button>
            </form>
            <div>{listaPartidas && listaPartidas.map(partida=>
                <div>
                    <h1>idPartida {partida.idPartida}</h1>
                    <h1>Sigla {partida.idPartida}</h1>
                    <h1>idPartida {partida.sigla}</h1>
                    <img height={100} src={partida.escudo}/>
                </div>)}
            </div>
        </>
    );
};

export default Partidas;