import React, { useContext, useState } from 'react';
import { Contextapp } from '../api/context';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const client = axios.create({
  baseURL: "https://games-proyecti.onrender.com",
  withCredentials: true,
});

export function Longin() {
  const navigate = useNavigate()
  const context = useContext(Contextapp);
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault()
    client.post("/user/login/", formdata)
      .then(res => {
        if (res.status === 200) {
            const jwt = res.data['token']
            Cookies.set('sessiontoken', jwt, {expires: 7})
            context.setData({...context, session: true})
            navigate('/user')
            window.location.reload(true);
        }
      })
      .catch(err => console.log(err));
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  return (
    <div className='w-full h-screen flex justify-center'>
      {!context.session ? (
        <form onSubmit={handleSubmit} className='bg-violet-900 p-8 rounded-3xl inline-block mt-44 h-fit'>
          <input
            className='bg-violet-950 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block text-2xl w-96 h-10 pl-1'
            required placeholder='username'
            type="text"
            name="username"
            value={formdata.username}
            onChange={handleInputChange}
          />
          <input
            className='bg-violet-950 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block text-2xl w-96 h-10 pl-1'
            required placeholder='password'
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleInputChange}
          />
          <button type="submit" 
          className='text-xl m-auto bg-violet-950 rounded-lg block p-2 pl-5 pr-5 text-gray-300 hover:bg-purple-800'
          >Iniciar Sesión</button>
        </form>
      ) : (
        <div className='text-xl m-auto bg-violet-900 rounded-lg block p-2 pl-5 pr-5 text-gray-300'>Usuario autenticado</div>
      )}
    </div>
  );
}
