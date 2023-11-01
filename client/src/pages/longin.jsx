import React, { useContext, useState } from 'react';
import { Contextapp } from '../api/context';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
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
    <div>
      {!context.session ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formdata.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleInputChange}
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      ) : (
        <div>Usuario autenticado</div>
      )}
    </div>
  );
}
