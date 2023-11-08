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
    password: '',
    image_perfil: '',
    first_name: '',
    last_name: ''
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
  <div className='w-full h-screen flex justify-center gap-4'>
    <div className="w-80 h-80 ml-4 mb-2 mt-52">
          <div
            style={{ backgroundImage: `url(${dataform.image_perfil})` }}
            className="h-full w-full bg-top bg-cover bg-no-repeat relative rounded-full"
          ></div>
        </div>
    <form onSubmit={handleSubmit} className='bg-violet-900 p-8 rounded-3xl inline-block mt-44 h-fit'>
      <input className='bg-violet-950 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block text-2xl w-96 h-10 pl-1' required placeholder='username' type="text" name="username" id='username' value={dataform.username} onChange={handleInputChange}/>
      <input className='bg-violet-950 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block text-2xl w-96 h-10 pl-1' required placeholder='email' type="email" name="email" id='email' value={dataform.email} onChange={handleInputChange}/>
      <input className='bg-violet-950 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block text-2xl w-96 h-10 pl-1' required placeholder='password' type="password" name="password" id='password' value={dataform.password} onChange={handleInputChange}/>
      <input className='bg-violet-950 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block text-2xl w-96 h-10 pl-1' required placeholder='image url' type='text' name="image_perfil" id='image_perfil' value={dataform.image_perfil} onChange={handleInputChange}/>
      <input className='bg-violet-950 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block text-2xl w-96 h-10 pl-1' required placeholder='first name' type='text' name="first_name" id='first_name' value={dataform.first_name} onChange={handleInputChange}/>
      <input className='bg-violet-950 rounded-lg mb-2 placeholder-slate-300 text-gray-300 block text-2xl w-96 h-10 pl-1' required placeholder='last name' type='text' name="last_name" id='last_name' value={dataform.last_name} onChange={handleInputChange}/>
      <button className='text-xl m-auto bg-violet-950 rounded-lg block p-2 pl-5 pr-5 text-gray-300 hover:bg-purple-800'>sing in</button>
    </form>
  </div>
  )
}
