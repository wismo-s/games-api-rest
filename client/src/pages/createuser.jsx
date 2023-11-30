import React, { useState, useEffect, useContext } from 'react'
import { Contextapp } from '../api/context';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import "../Login.css"

export function Createuser() {
  const context = useContext(Contextapp)
  const navigate = useNavigate()
  
  const [dataform, setDataform] = useState({
    username: '',
    email: '',
    password: '',
    image_perfil: '',
    first_name: '',
    last_name: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://games-proyecti.onrender.com/user/register/", dataform)
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
  <div className='w-full h-screen flex justify-center gap-4'>
    <div className="w-80 h-80 ml-4 mb-2 mt-52">
          <div
            style={{ backgroundImage: `url(${dataform.image_perfil})` }}
            className="h-full w-full bg-top bg-cover bg-no-repeat relative rounded-full"
          ></div>
        </div>
    <form onSubmit={handleSubmit} className='bg-violet-900 p-8 rounded-3xl inline-block mt-44 h-fit'>
      <div className='box_login'>
        <input 
          className='bg-violet-900 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block w-96 h-10 pl-1 input_login' 
          required placeholder=' ' 
          type="text" 
          name="username" 
          id='username' 
          value={dataform.username} 
          onChange={handleInputChange}
        />
        <label className='label_login'>Username</label>
      </div>
      <div className='box_login'>
        <input 
          className='bg-violet-900 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block w-96 h-10 pl-1 input_login' 
          required placeholder=' ' 
          type="email" 
          name="email" 
          id='email' 
          value={dataform.email} 
          onChange={handleInputChange}
        />
        <label className='label_login'>Email</label>
      </div>
      <div className='box_login'>
        <input 
          className='bg-violet-900 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block w-96 h-10 pl-1 input_login' 
          required placeholder=' ' 
          type="password" 
          name="password" 
          id='password' 
          value={dataform.password} 
          onChange={handleInputChange}
        />
        <label className='label_login'>Password</label>
      </div>
      <div className='box_login'>
        <input 
          className='bg-violet-900 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block w-96 h-10 pl-1 input_login' 
          required placeholder=' ' 
          type='text' 
          name="image_perfil" 
          id='image_perfil' 
          value={dataform.image_perfil} 
          onChange={handleInputChange}
        />
        <label className='label_login'>Imagen Perfil</label>
      </div>
      <div className='box_login'>
        <input 
          className='bg-violet-900 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block w-96 h-10 pl-1 input_login' 
          required placeholder=' ' 
          type='text' 
          name="first_name" 
          id='first_name' 
          value={dataform.first_name} 
          onChange={handleInputChange}
        />
        <label className='label_login'>First Name</label>
      </div>
      <div className='box_login'>
        <input 
          className='bg-violet-900 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block w-96 h-10 pl-1 input_login' 
          required placeholder=' ' 
          type='text' 
          name="last_name" 
          id='last_name' 
          value={dataform.last_name} 
          onChange={handleInputChange}
        />
        <label className='label_login'>Last Name</label>
      </div>
      <button className='text-xl m-auto bg-violet-950 rounded-lg block p-2 pl-5 pr-5 text-gray-300 hover:bg-purple-800'>sing in</button>
    </form>
  </div>
  )
}