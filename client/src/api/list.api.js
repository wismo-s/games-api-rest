import axios from 'axios'

export const listAllObj = (direcion) => {
     return axios.get(`http://127.0.0.1:8000/games/api/V1/${direcion}`)
}
export const postform = (direcion, game) => {
     return axios.post(`http://127.0.0.1:8000/games/api/V1/${direcion}`, game)
}
export const userlist = () => {
     return axios.get('http://127.0.0.1:8000/user/user/').then(res => {return [res.data.user, res.data.cart, res.data.facture, true]}).catch(err => {return [{}, false]})
}
export const cartEdit = (id, list) =>{
     return axios.put(`http://127.0.0.1:8000/user/cart/${id}/`, list)
}
