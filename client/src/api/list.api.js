import axios from 'axios'

export const listAllObj = (direcion) => {
     return axios.get(`http://127.0.0.1:8000/games/api/V1/${direcion}`)
}

