import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials: true,
});
axios.defaults.headers.common['Authorization'] = `Token ${Cookies.get('sessiontoken')}`;
export function Longin() {
  const [current, setCurrent] = useState();
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    client.get("/user/user/")
      .then((res) => {
        if (res.status === 200) {
          setCurrent(true);
        }
      })
      .catch((err) => setCurrent(false));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    client.post("/user/login/", formdata)
      .then((res) => {
        if (res.status === 200) {
            console.log(res.data['token']);
            const jwt = res.data['token']
            Cookies.set('sessiontoken', jwt, {expires: 7})
          setCurrent(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  return (
    <div>
      {current ? (
        <div>Usuario autenticado</div>
      ) : (
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
      )}
    </div>
  );
}
