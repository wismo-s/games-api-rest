import { Contextapp } from "../api/context";
import { useContext } from "react";
import { Game } from "../components/game";
import { Link } from "react-router-dom";

export function Games() {
  const context = useContext(Contextapp);
  return context.data.loading ? (
    <main className="text-center text-white">Loading...</main>
  ) : (
    <main>
      <section className="games-container">
        {context.data.games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
        <Link className="add-game" to="/games/form">
          +
        </Link>
      </section>
    </main>
  );
}
