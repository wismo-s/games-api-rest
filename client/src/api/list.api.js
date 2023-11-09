import axios from 'axios'

export const listAllObj = (direcion) => {
     return axios.get(`https://games-proyecti.onrender.com/games/api/V1/${direcion}`)
}
export const postform = (direcion, game) => {
     return axios.post(`https://games-proyecti.onrender.com/games/api/V1/${direcion}`, game)
}
export const userlist = () => {
     return axios.get('https://games-proyecti.onrender.com/user/user/').then(res => {return [res.data.user, res.data.cart, res.data.facture, true]}).catch(err => {return [{}, false]})
}
export const cartEdit = (id, list) =>{
     return axios.put(`https://games-proyecti.onrender.com/user/cart/${id}/`, list)
}
