import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { ContextCart, Contextapp } from '../api/context';
import { cartEdit } from '../api/list.api'
import { Link } from "react-router-dom";


export function Gamesdatail() {

    const context = useContext(Contextapp);
    const cartContext = useContext(ContextCart)
    const { id } = useParams();

    const [game] = context.data.games.filter(game => game.id == id)
    const objd = context.data.developers.filter(dev => dev.id == game.developer);
    const objg = context.data.genders.filter(gen => game.gender.includes(gen.id));
    const [dev] = objd

    const handleClick = async (e) => {
        const updatedCart = [...cartContext.cart];
        updatedCart.push(parseInt(e.target.value));
        cartContext.setCart(updatedCart)
        console.log(cartContext);
        await cartEdit(context.data.user.cart,  {
            "id": context.data.user.cart,
            "games": updatedCart
        })
    }
  return (
    <div className="w-4/5 m-auto mt-3 mb-3 relative">
        <div style={{ backgroundImage: `url(${game.port_image})` }} className="inline-block bg-top bg-cover h-96 w-72 bg-no-repeat relative mb-4"></div>
        <div className='absolute left-80 top-1'>
            <h1 className="text-5xl font-bold text-white mb-3">{game.title}</h1>
            <p className="text-xl mb-2 text-slate-200">{game.description}</p>
            <p className="text-xl mb-2 text-slate-200">Realise Date: {game.date_realise}</p>
            <p className="text-xl mb-2 text-slate-200">Units Solid: {game.sellers}</p>
            <Link to={`/developers/${dev.id}/`}><p className="text-green-200 text-xl mb-2 font-bold hover:text-green-100">Studio: {dev.name}</p></Link>
            <div className="text-xl mb-2 text-slate-200">Genders:
                {objg.map(gen => (
                <Link className="inline-block pr-2 pl-2 pt-1 pb-1 bg-cyan-600 ml-2 hover:bg-cyan-700" key={gen.id} to={`/gender/${gen.id}/`}><p>{gen.title}</p></Link>
                ))}
            </div>
            <p className="text-white text-2xl font-bold p-2 w-28 mr-2 rounded-lg bg-cyan-500 border-cyan-700 border inline">$/.{game.price}</p>
            <button value={game.id} onClick={handleClick} className="text-white text-2xl font-bold p-2 w-36 rounded-lg bg-cyan-500 border-cyan-700 border hover:bg-lime-900">ADD CART</button>
            <div className="text-xl mb-2 text-white font-bold">Metacritic: 
            <p className="pl-3 pt-2 w-12 h-11 ml-3 mt-2 bg-green-500 inline-block border-green-600 border" >{game.calification}</p>
            </div>
        </div>
        <div className="mb-5">
            <iframe  title="YouTube Video" src={`https://www.youtube.com/embed/${game.trailer}`} className="w-full" style={{ height: "700px" }} allowFullScreen></iframe>
        </div>
        <div className="mb-5">
            <img src={game.baner_image} alt="" className="w-full" />
        </div>
    </div>
  )
}

