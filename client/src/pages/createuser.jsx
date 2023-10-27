import React, { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;


const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export function Createuser() {

  const [curretuser, setCurrentuser] = useState();
  const [dataform, setDataform] = useState({
    username: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    client.get("/user/user/")
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentuser(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    client.post("user/register/", dataform)
    .then(function (res) {
      client.post("/user/login/", {
        username: dataform.username,
        password: dataform.password
      })
    })
    .then(function (res) {
      setCurrentuser(true)
    })
    console.log(dataform);
  }

  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setDataform({...dataform, [name]: value})
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" id='username' value={dataform.username} onChange={handleInputChange}/>
      <input type="email" name="email" id='email' value={dataform.email} onChange={handleInputChange}/>
      <input type="password" name="password" id='password' value={dataform.password} onChange={handleInputChange}/>
      <button>sing in</button>
    </form>
  )
}
