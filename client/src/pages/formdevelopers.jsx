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
  }
  const handleinputchange = (e) => {
    const { name, value } = e.target;
    setformdata({...formdata, [name]: value})
  }
    return (
      <div>
        <div style={{ backgroundImage: `url(${formdata.baner_image})` }} className="inline-block bg-center bg-cover h-96 w-full bg-no-repeat relative mb-4 opacity-90"></div>
        <div className="w-4/5 m-auto mt-3 mb-3 flex">
          <div style={{ backgroundImage: `url(${formdata.perfil_image})` }} className="inline-block bg-center rounded-2xl bg-cover h-96 w-2/5 bg-no-repeatmb-4" ></div>
          <form onSubmit={handleSubmit} className="inline-block ml-4">
            <input required placeholder="title" type="text" name="name" id="name" value={formdata.name} className="text-5xl font-bold text-slate-600e mb-3 block" onChange={handleinputchange}/>
            <input required placeholder="perfil image url" type="text" name="perfil_image" id="perfil_image" value={formdata.perfil_image} className="text-xl mb-2 text-slate-600 block w-full" onChange={handleinputchange}/>
            <input required placeholder="baner image url" type="text" name="baner_image" id="baner_image" value={formdata.baner_image}  className="text-xl mb-2 text-slate-600 block w-full"onChange={handleinputchange}/>
            <textarea required placeholder="desciption" type="text" name="description" id="description" value={formdata.description} className="text-xl mb-2 text-slate-600 block w-full" onChange={handleinputchange}/>
            <button className="text-xl m-auto text-slate-600 block bg-white p-2 pl-5 pr-5 mb-4">enviar</button>
          </form>
        </div>
      </div>
    )
  }