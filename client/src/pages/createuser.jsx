import React, { useState, useEffect, useContext } from 'react'
import { Contextapp } from '../api/context';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



export function Createuser() {
  const context = useContext(Contextapp)
  const navigate = useNavigate()
  
  const [dataform, setDataform] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/user/register/", dataform)
    .then((res) => {
      navigate('/login')
      window.location.reload(true);
    })
  }

  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setDataform({...dataform, [name]: value})
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='username' type="text" name="username" id='username' value={dataform.username} onChange={handleInputChange}/>
      <input placeholder='email' type="email" name="email" id='email' value={dataform.email} onChange={handleInputChange}/>
      <input placeholder='password' type="password" name="password" id='password' value={dataform.password} onChange={handleInputChange}/>
      <button>sing in</button>
    </form>
  )
}
