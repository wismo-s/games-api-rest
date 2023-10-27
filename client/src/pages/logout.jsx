import React, { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials: true,
});
export function Logout() {
  useEffect(()=>{
    client.post('/user/logout/')
    .then((res)=>{console.log(res); Cookies.remove('sessiontoken')})
    .catch((err)=>{console.log(err);})
  }, [])
  return (
    <div>logout</div>
  )
}