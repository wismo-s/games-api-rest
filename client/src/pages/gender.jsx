import { useContext } from "react";
import { Contextapp } from "../api/context";
import { useParams } from "react-router-dom";
import { Game } from "../components/game";

export function Gender() {
  const context = useContext(Contextapp);
  const { id } = useParams();

  const [genderfilter] = context.data.genders.filter((gen) => gen.id == id);
  const gamesfilter = context.data.games.filter((game) =>
    game.gender.includes(parseInt(id))
  );
  return (
    <main style={{ paddingTop: 0 }}>
      <section className="gender-banner">
        <img
          src={genderfilter.image_url}
        />
        <h1 className="">
          {genderfilter.title}
        </h1>
      </section>
      <section className="games-container">
        {gamesfilter.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </section>
    </main>
  );
}
