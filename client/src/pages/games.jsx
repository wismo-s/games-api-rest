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
            <Link className='rounded-full bg-violet-900 h-20 w-20 inline-block text-center pt-5 text-white text-3xl font-extrabold hover:bg-purple-900' to="/games/form">+</Link>
          </div>
        </div>
      )}
    </div>
  );
}