import axios from 'axios'

const host = "http://localhost"

const port = "7083"

export const getPartidas = async (partidaId) => {
    return await axios.get(`${host}:${port}/api/Brasileirao/partidas/${partidaId}`).catch(err=>console.log(err))
}

export const getTimes = async () => {
    return await axios.get(`${host}${port}/api/Brasileirao/times`)
}

export const getJogadores = async () => {
    return await axios.get(`${host}${port}/api/Brasileirao/jogadores`)
}

export const getGols = async (partidaId) => {
    return await axios.get(`${host}:${port}/api/Brasileirao/gols/${partidaId}`).catch(err=>console.log(err))
}