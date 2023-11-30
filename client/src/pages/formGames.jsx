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
    price: 0,
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
      <div className="w-4/5 m-auto mt-3 mb-3 relative  h-full">
        <div style={{ backgroundImage: `url(${formdata.port_image})` }} className="video inline-block bg-top bg-cover h-96 w-72 bg-no-repeat relative mb-1"></div>
        <form onSubmit={handlesubmit} className='absolute right-1 top-1 bg-violet-900 p-7 rounded-3xl'>
          <div className='box_form'>
          <input 
            required placeholder=" " 
            className="bg-violet-900 rounded-lg text-3xl font-bold placeholder-slate-300 text-gray-300 mb-4 w-full block input_form_tit" 
            type="text" 
            id="title" 
            name="title" 
            value={formdata.title} 
            onChange={handleinputchange} 
          />
          <label className='label_form text-3xl'>Titulo</label>
          </div>

          <div className='box_form'>
          <input 
            required placeholder=" "  
            className="bg-violet-900 placeholder-slate-300 rounded-lg mb-4 text-gray-300 block w-full input_form" 
            type="text" 
            id="port_image" 
            name="port_image" 
            value={formdata.port_image} 
            onChange={handleinputchange} 
          />
          <label className='label_form'>Imagen portada URL</label>
          </div>

          <div className='box_form'>
          <textarea 
            required className="bg-violet-900 placeholder-slate-300 rounded-lg mb-4 text-gray-300 block w-full input_form" 
            placeholder=" " 
            id="description" 
            name="description" 
            value={formdata.description} 
            onChange={handleinputchange} 
          />
          <label className='label_form'>Descripción</label>
          </div>

          <label htmlFor="date_realise" className="mb-3 text-slate-100">Date realise: </label>
          <input 
            required className="bg-violet-900 placeholder-slate-300 rounded-lg mb-5 text-gray-300 mr-4 ml-1 input_form" 
            type="date" 
            id="date_realise" 
            name="date_realise" 
            value={formdata.date_realise} 
            onChange={handleinputchange} 
          />

          <label  htmlFor="developer" className="mb-3 text-slate-100">Developer: </label>
          <select 
            required className="bg-violet-900 placeholder-slate-300 rounded-lg mb-5 text-gray-300 ml-1 input_form"  
            name="developer" 
            id="developer" 
            value={formdata.developer} 
            onChange={handleinputchange}
          >
          {options.map(op => (
            <option key={op.id} value={op.id}>{op.name}</option>
          ))}
          </select>

          <Multiselect 
            required className="bg-violet-900 mb-3 placeholder-slate-300 multiselect" 
            isObject={true} 
            options={gends} 
            displayValue="name" 
            selectedValues={formdata.gender} 
            onSelect={handlesubmitMultiselect} 
            onRemove={handledeleteMultiselect}
          />

          <label htmlFor="calification" className="mb-3 text-slate-100">Calification: </label>
          <input 
            required className="placeholder-slate-300 bg-violet-900 rounded-lg mb-5 text-gray-300 mr-4 ml-1 input_form" 
            type="number" 
            min="0" 
            max="100" 
            id="calification" 
            name="calification" 
            value={formdata.calification} 
            onChange={handleinputchange} 
          />

          <label htmlFor="sellers" className="mb-2 text-slate-100">Sellers: </label>
          <input 
            required className="placeholder-slate-300 bg-violet-900 rounded-lg mb-5 text-gray-300 mr-2 ml-1 input_form" 
            type="number" 
            min="0" 
            max="100" 
            name="sellers" 
            value={formdata.sellers} 
            onChange={handleinputchange} 
          />

          <label htmlFor="price" className="mb-2 text-slate-100 ml-2">Price: </label>
          <input 
            required className="placeholder-slate-300 bg-violet-900 rounded-lg mb-5 text-gray-300 mr-2 ml-1 input_form" 
            type="number" 
            id="price" 
            min="0" 
            max="100"
            name="price" 
            value={formdata.price} 
            onChange={handleinputchange} 
          />

          <div className='box_form'>
          <input 
            placeholder=" " 
            className="placeholder-slate-300 bg-violet-900 rounded-lg mb-4 text-gray-300 block w-full input_form" 
            type="text" 
            id="baner_image" 
            name="baner_image" 
            value={formdata.baner_image} 
            onChange={handleinputchange} 
          />
          <label className='label_form'>Baner imagen URL</label>
          </div>

          <div className='box_form'>
          <input 
            required placeholder=" "  
            className=" placeholder-slate-300 bg-violet-900 rounded-lg mb-4 text-gray-300 block w-full input_form" 
            type="text" 
            id="trailer" 
            name="trailer" 
            value={formdata.trailer} 
            onChange={splitdata} 
          />
          <label className='label_form'>Trailer url</label>
          </div>

          <button className="bg-violet-950 rounded-lg text-xl m-auto text-gray-300 block p-2 pl-5 pr-5 hover:bg-purple-800">Submit</button>
        </form>
        <div>
          <div className="mb-5 mt-10">
            <iframe  title="YouTube Video" src={`https://www.youtube.com/embed/${formdata.trailer}`} className="w-full" style={{ height: "700px" }} allowFullScreen></iframe>
          </div>
          <div className="mb-5">
            <img src={formdata.baner_image} alt="" className="w-full" />
          </div>
        </div>
      </div>
    )
  }