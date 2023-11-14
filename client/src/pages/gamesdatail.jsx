import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react';
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

    useEffect(()=> {window.scrollTo(0,0)},[])
    
    async function handleClick() {
        const updatedCart = [...cartContext.cart];
        updatedCart.push(game.id);
        cartContext.setCart(updatedCart)
        await cartEdit(context.data.user.cart,  {
            "id": context.data.user.cart,
            "games": updatedCart
        })
    }

    const date = new Date(game.date_realise).toLocaleDateString('en-us',{year: 'numeric',month: 'short',day: 'numeric',})

  return (
    <main>
    <section className='game-header'>
        <img src={game.port_image} alt="" />
        <div className="game-details">
            <div className="game-title">
                <h1>{game.title}</h1>
                <p>${game.price}</p>
            </div>
            <Link className='game-studio' to={`/developers/${dev.id}/`}>{dev.name}</Link>
            <p className='game-description'>{game.description}</p>
            <div className="game-info">
                <p className="game-release"><span>Release Date: </span>{date}</p>
                <p className="game-units"><span>Units Solds:</span> {game.sellers.toLocaleString('en-US')}</p>
            </div>
            <div className="game-category"><span>Genders:</span>
                {objg.map(gen => (
                <Link className=" bg-violet-900 hover:bg-purple-800" key={gen.id} to={`/gender/${gen.id}/`}><p>{gen.title}</p></Link>
                ))}
            </div>
            <div className="game-footer">
                <span>Metacritic: </span> 
                <p>{game.calification}</p>
                <button value={game.id} onClick={handleClick} >ADD TO CART</button>
            </div>
        </div>
    </section>
    <section className='game-info'>
        <iframe title="YouTube Video" src={`https://www.youtube.com/embed/${game.trailer}`} className="w-full mb-5 mt-5 h-[700px]" allowFullScreen></iframe>
        <img src={game.baner_image} alt="" className="w-full mb-5 mt-5" />
    </section>
    </main>
  )
}

