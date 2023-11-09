import { useState } from "react"
import { postform } from "../api/list.api";

export function FormGenders() {
  const [dataform, setdataform] = useState({
    title: '',
    image_url: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataform);
    postform('genders/', dataform)
    navigate('/gender')
    window.location.reload(true);
  }

  const handleimputchange = (e) => {
    const {name, value} = e.target;
    setdataform({...dataform, [name]: value})
  }
  return (
    <div className=" h-screen">
      <div style={{ backgroundImage: `url(${dataform.image_url})` }} className="inline-block bg-center bg-cover h-96 w-full bg-no-repeat relative mb-4 opacity-90"></div>
      <form onSubmit={handleSubmit} className="bg-violet-900 p-7 rounded-3xl inline-block ml-4" >
        <input className="bg-violet-950 rounded-lg text-5xl placeholder-slate-300 text-gray-300 mb-2 font-bold ml-6 block w-11/12" placeholder="title" required type="text" name="title" id="title" value={dataform.title} onChange={handleimputchange}/>
        <input className="bg-violet-950 rounded-lg text-xl mb-2 placeholder-slate-300 text-gray-300 block w-11/12 ml-6" placeholder="image url" required type="text" name="image_url" id="image_url" value={dataform.image_url} onChange={handleimputchange}/>
        <button className="text-xl m-auto bg-violet-950 rounded-lg block p-2 pl-5 pr-5 text-gray-300 hover:bg-purple-800">enviar</button>
      </form>
    </div>
  )
}

