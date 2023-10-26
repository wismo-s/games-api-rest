import axios from 'axios';
import React, { useEffect, useState } from 'react'

const token = localStorage.getItem('token');
const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export function User() {
    const [user, setuser] = useState();
    const [current, setcurrent] = useState()
    useEffect(()=>{
        client.get("/user/user/")
        .then((res)=>setuser(true))
        .catch((err)=>setcurrent(false))
    }, [])

    if (current == false) {
        return(
            <div>login please</div>
        )
    }
    console.log(user);
    return (
            <div>
                <h1>prueva</h1>
            </div>
        )
}