import { useContext } from "react"
import { Contextapp } from "../api/context";
import { Link } from "react-router-dom";

export function Game({game}) {

  const context = useContext(Contextapp);
  const dev = context.data.developers.find(dev => dev.id == game.developer);
  
  const date = new Date(game.date_realise).toLocaleDateString('en-us',{year: 'numeric',month: 'short',day: 'numeric',});
  

  return (
    <article className="game-item">
        <Link to={`/games/${game.id}`}>
        <div className="game-img">
         <img src={game.port_image} alt="" />
        </div>
        <div className="game-data">
          <h2>{game.title}</h2>
          <p className="game-title">{dev.name}</p>
          <p className="game-date">{date}</p>
          <span><p className="game-price">${game.price}</p></span>
        </div>
        </Link>
    </article>
  )
}
