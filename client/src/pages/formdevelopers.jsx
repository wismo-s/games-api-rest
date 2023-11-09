import { useState } from "react"
import { postform } from "../api/list.api"

export function FormDevelopers() {
  const [formdata, setformdata] = useState({
    name: '',
    perfil_image: '',
    baner_image: '',
    description: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formdata);
    await postform('developers/', formdata)
    navigate('/developers')
    window.location.reload(true);
  }
  const handleinputchange = (e) => {
    const { name, value } = e.target;
    setformdata({...formdata, [name]: value})
  }
    return (
      <div className=" h-screen">
        <div style={{ backgroundImage: `url(${formdata.baner_image})` }} className="inline-block bg-center bg-cover h-96 w-full bg-no-repeat relative mb-4 opacity-90"></div>
        <div className="w-4/5 m-auto mt-3 mb-3 flex">
          <div style={{ backgroundImage: `url(${formdata.perfil_image})` }} className="inline-block bg-center rounded-2xl bg-cover h-96 w-2/5 bg-no-repeatmb-4" ></div>
          <form onSubmit={handleSubmit} className="inline-block ml-4 bg-violet-900 p-7 rounded-3xl">
            <input required placeholder="title" type="text" name="name" id="name" value={formdata.name} className="bg-violet-950 rounded-lg placeholder-slate-300 text-5xl font-bold text-gray-300 mb-3 block" onChange={handleinputchange}/>
            <input required placeholder="perfil image url" type="text" name="perfil_image" id="perfil_image" value={formdata.perfil_image} className="bg-violet-950 rounded-lg placeholder-slate-300 text-gray-300 text-xl mb-2 block w-full" onChange={handleinputchange}/>
            <input required placeholder="baner image url" type="text" name="baner_image" id="baner_image" value={formdata.baner_image}  className="bg-violet-950 rounded-lg placeholder-slate-300 text-gray-300 text-xl mb-2 block w-full"onChange={handleinputchange}/>
            <textarea required placeholder="desciption" type="text" name="description" id="description" value={formdata.description} className="bg-violet-950 rounded-lg placeholder-slate-300 text-gray-300 text-xl mb-2 block w-full h-36" onChange={handleinputchange}/>
            <button className="text-xl m-auto bg-violet-950 rounded-lg block p-2 pl-6 pr-6 text-gray-300 hover:bg-purple-800">enviar</button>
          </form>
        </div>
      </div>
    )
  }