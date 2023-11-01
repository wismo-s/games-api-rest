import React, { useEffect, useContext } from 'react'
import { Contextapp } from '../api/context';
import axios from 'axios'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export function Logout() {

  const navigate = useNavigate()
  const context = useContext(Contextapp)
  useEffect(()=>{
    axios.post('http://127.0.0.1:8000/user/logout/')
    .then((res)=>{
      context.setData({...context, session: false}); 
      Cookies.remove('sessiontoken'); 
      console.log(context); 
      navigate('/login'); 
      window.location.reload(true);
  })
    .catch((err)=>{console.log(err);})
  }, [])
  return (
    <div>logout</div>
  )
}