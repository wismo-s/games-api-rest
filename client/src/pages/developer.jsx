import { useContext } from "react";
import { Contextapp } from "../api/context";
import { useParams } from "react-router-dom";
import { Game } from "../components/game";

export function Developer() {
  const context = useContext(Contextapp);
  const { id } = useParams();

  let [devfilter] = context.data.developers.filter((dev) => dev.id == id);
  let gamesfilter = context.data.games.filter((game) => game.developer == id);

  return (
    <main style={{ paddingTop: 0 }}>
      <section className="developer-banner">
        <img src={devfilter.baner_image} alt="" />
        <div className="developer-info">
          <img src={devfilter.perfil_image} alt="" />
          <div className="developer-details">
            <h1>{devfilter.name}</h1>
            <p>{devfilter.description}</p>
          </div>
        </div>
      </section>
      <section className="games-container">
        {gamesfilter.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </section>
    </main>
  );
}
