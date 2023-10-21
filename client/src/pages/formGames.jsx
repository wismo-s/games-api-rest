import { useState, useEffect } from "react"
import { listAllObj } from "../api/list.api";
import Multiselect from 'multiselect-react-dropdown'

export function FormGames() {
  const [formdata, setformdata] = useState({
    baner_image: '',
    calification: 0,
    date_realise: '',
    description: '',
    developer: '',
    gender: [],
    port_image: '',
    sellers: 0,
    title: '',
    trailer: '',
  })
  const [devs, setdevs] = useState([]);
  const [gender, setGender] = useState([])
  useEffect(() => {
    async function getObj() {
      const res = await listAllObj('developers/');
      setdevs(res.data)
  }
  getObj();
  }, []);
  useEffect(() =>{
    async function getData() {
        const res = await listAllObj(`genders/`);
        setGender(res.data);
    }
    getData()
}, [])
  const options = devs.map(dev => ({ id: dev.id, name: dev.name }));
  const gends = gender.reduce((acc, gen)=>{
    acc[gen.id] = gen.title;
    return acc
  }, [])

  const handleinputchange = (e) => {
    const { name, value } = e.target;
    setformdata({...formdata, [name] : value})
  }

  if (options == [] || devs == [], gender == []) {
    return(<div>cargando...</div>)
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  }

    return (
      <div>
        <form onSubmit={handlesubmit}>
          <input type="text" id="title" name="title" value={formdata.title} onChange={handleinputchange} />
          <input type="text" id="baner_image" name="baner_image" value={formdata.baner_image} onChange={handleinputchange} />
          <input type="number" min="0" max="100" id="calification" name="calification" value={formdata.calification} onChange={handleinputchange} />
          <input type="date" id="date_realise" name="date_realise" value={formdata.date_realise} onChange={handleinputchange} />
          <select name="developer" id="developer" value={formdata.developer} onChange={handleinputchange}>
          {options.map(op => (
            <option key={op.id} value={op.id}>{op.name}</option>
          ))}
          </select>
          <textarea placeholder="descripcion" id="description" name="description" value={formdata.description} onChange={handleinputchange} />
          <Multiselect name="gender" isObject={false} options={gends} onSelect={(e)=>console.log(e)}/>
          <input type="text" id="port_image" name="port_image" value={formdata.port_image} onChange={handleinputchange} />
          <input type="number" min="0" name="sellers" value={formdata.sellers} onChange={handleinputchange} />
          <input type="text" id="trailer" name="trailer" value={formdata.trailer} onChange={handleinputchange} />
          <button>submit</button>
        </form>
      </div>
    )
  }