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
  }

  const handleimputchange = (e) => {
    const {name, value} = e.target;
    setdataform({...dataform, [name]: value})
  }
  return (
    <div>
      <div style={{ backgroundImage: `url(${dataform.image_url})` }} className="inline-block bg-center bg-cover h-96 w-full bg-no-repeat relative mb-4 opacity-90"></div>
      <form onSubmit={handleSubmit}>
        <input className="text-5xl mb-2 text-slate-600 font-bold ml-6 block" placeholder="title" required type="text" name="title" id="title" value={dataform.title} onChange={handleimputchange}/>
        <input className="text-xl mb-2 text-slate-600 block w-9/12 ml-6" placeholder="image url" required type="text" name="image_url" id="image_url" value={dataform.image_url} onChange={handleimputchange}/>
        <button className="text-xl m-auto text-slate-600 block bg-white p-2 pl-5 pr-5 mb-4">enviar</button>
      </form>
    </div>
  )
}

