import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const token = Cookies.get('sessiontoken')
const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

axios.defaults.headers.common['Authorization'] = `Token  ${token}`;
export function User() {
    const [user, setuser] = useState({
        username: '',
        image_perfil: ''
    });
    const [current, setcurrent] = useState()
    useEffect(()=>{
        client.get("/user/user/")
        .then((res)=>{setuser(res.data.user); console.log(res)})
        .catch((err)=>setcurrent(false))
    }, [])

    if (current == false) {
        return(
            <div>login please</div>
        )
    }
    console.log(token);
    return (
            <div>
                <h1>{user.username}</h1>
                <p>{user.image_perfil}</p>
            </div>
        )
}