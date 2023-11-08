import { useState, useEffect, useContext } from "react"
import { listAllObj } from "../api/list.api";
import Multiselect from 'multiselect-react-dropdown'
import { postform } from "../api/list.api";
import { Contextapp } from "../api/context";
export function FormGames() {
  const context = useContext(Contextapp)

  const [formdata, setformdata] = useState({
    title: '',
    description: '',
    port_image: '',
    baner_image: '',
    trailer: '',
    date_realise: '',
    sellers: 0,
    calification: 0,
    developer: '1',
    gender: [],
  })
  const [gendata, setgendata] = useState([])
  const [devs, setdevs] = useState([]);
  const [gender, setGender] = useState([])

  useEffect(() => {
      setdevs(context.data.developers)
      setGender(context.data.genders);
  }, []);

  const options = devs.map(dev => ({ id: dev.id, name: dev.name }));
  const gends = gender.reduce((acc, gen)=>{
    acc[gen.id] = { 'name': gen.title, 'id': gen.id };
    return acc
  }, [])

  const handleinputchange = (e) => {
    const { name, value } = e.target;
    setformdata({...formdata, [name] : value})
  }

  if (options == [] || devs == [], gender == []) {
    return(<div>cargando...</div>)
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    formdata.gender = gendata;
    console.log(formdata);
    await postform('games/',formdata)
    navigate('/')
    window.location.reload(true);
  }

  const handlesubmitMultiselect = (e) =>{
    const gendfilter = e.reduce((acc, e)=>{
      acc.push(e.id)
      return acc
    },[])
    setgendata(gendfilter)
  }
  const handledeleteMultiselect = (e) =>{
    const gendfilter = e.reduce((acc, e)=>{
      acc.push(e.id)
      return acc
    },[])
    setgendata(gendfilter)
  }
  const splitdata = (e) =>{
    const { name, value } = e.target;
    const [youtube, codigo] = value.split('=')
    setformdata({...formdata, [name] : codigo})
    console.log(formdata.trailer);
  }
    return (
      <div className="w-4/5 m-auto mt-3 mb-3 relative h-screen">
        <div style={{ backgroundImage: `url(${formdata.port_image})` }} className="inline-block bg-top bg-cover h-96 w-72 bg-no-repeat relative mb-4"></div>
        <form onSubmit={handlesubmit} className='absolute left-80 top-1 bg-violet-900 p-7 rounded-3xl'>
          <input required placeholder="titulo" className="bg-violet-950 rounded-lg text-5xl font-bold placeholder-slate-300 text-gray-300 mb-3 block" type="text" id="title" name="title" value={formdata.title} onChange={handleinputchange} />
          <input required placeholder="img portada url"  className="bg-violet-950 placeholder-slate-300 rounded-lg text-xl mb-2 text-gray-300block w-full" type="text" id="port_image" name="port_image" value={formdata.port_image} onChange={handleinputchange} />
          <textarea required className="bg-violet-950 placeholder-slate-300 rounded-lg text-xl mb-2 text-gray-300 block w-full" placeholder="descripcion" id="description" name="description" value={formdata.description} onChange={handleinputchange} />
          <label htmlFor="date_realise" className="text-xl mb-2 text-slate-100">date realise: </label>
          <input required className="bg-violet-950 placeholder-slate-300 rounded-lg text-xl mb-2 text-gray-300 mr-2" type="date" id="date_realise" name="date_realise" value={formdata.date_realise} onChange={handleinputchange} />
          <label  htmlFor="developer" className="text-xl mb-2 text-slate-100">developer: </label>
          <select required className="bg-violet-950 placeholder-slate-300 rounded-lg text-xl mb-2 text-gray-300" name="developer" id="developer" value={formdata.developer} onChange={handleinputchange}>
          {options.map(op => (
            <option key={op.id} value={op.id}>{op.name}</option>
          ))}
          </select>
          <Multiselect required className="bg-violet-950 mb-2 placeholder-slate-300" isObject={true} options={gends} displayValue="name" selectedValues={formdata.gender} onSelect={handlesubmitMultiselect} onRemove={handledeleteMultiselect}/>
          <label htmlFor="calification" className="text-xl mb-2 text-slate-100">calification: </label>
          <input required className="placeholder-slate-300 bg-violet-950 rounded-lg text-xl mb-2 text-gray-300 mr-2" type="number" min="0" max="100" id="calification" name="calification" value={formdata.calification} onChange={handleinputchange} />
          <label htmlFor="sellers" className="text-xl mb-2 text-slate-100">sellers: </label>
          <input className="placeholder-slate-300 bg-violet-950 rounded-lg text-xl mb-2 text-gray-300" type="number" min="0" name="sellers" value={formdata.sellers} onChange={handleinputchange} />
          <input placeholder="baner imagen url" className="placeholder-slate-300 bg-violet-950 rounded-lg text-xl mb-2 text-gray-300 block w-full" type="text" id="baner_image" name="baner_image" value={formdata.baner_image} onChange={handleinputchange} />
          <input required placeholder="trailer url"  className=" placeholder-slate-300 bg-violet-950 rounded-lg text-xl mb-2 text-gray-300 block w-full" type="text" id="trailer" name="trailer" value={formdata.trailer} onChange={splitdata} />
          <button className="bg-violet-950 rounded-lg text-xl m-auto text-gray-300 block p-2 pl-5 pr-5 hover:bg-purple-800 " >submit</button>
        </form>
        <div className="mb-5 mt-24">
            <iframe  title="YouTube Video" src={`https://www.youtube.com/embed/${formdata.trailer}`} className="w-full" style={{ height: "700px" }} allowFullScreen></iframe>
          </div>
          <div className="mb-5">
            <img src={formdata.baner_image} alt="" className="w-full" />
          </div>
      </div>
    )
  }