import { Contextapp } from '../api/context';
import { useContext} from 'react';
import { Game } from '../components/game';
import { Link } from 'react-router-dom';

export function Games() {
  const context = useContext(Contextapp);
  console.log(context);
  return (
    <div>
      {context.data.loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div>
          <div className="grid grid-flow-row grid-cols-5 gap-5 w-9/12 m-auto mt-8 pb-5">
            {context.data.games.map((game) => (
              <Game key={game.id} game={game} />
            ))}
          </div>
          <Link to="/games/form">Añadir juegos</Link>
        </div>
      )}
    </div>
  );
}