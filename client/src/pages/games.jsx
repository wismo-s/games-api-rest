import React, { useState, useEffect } from 'react';
import { listAllObj } from '../api/list.api'
import { Game } from '../components/game';
import { Link } from 'react-router-dom';

export function Games() {

  const [objs, setObj] = useState([]);

    useEffect(() => {
      async function getObj() {
        const res = await listAllObj('games/');
        setObj(res.data);
    }
    getObj();
    }, []);
    console.log(objs);
    return (
      <div>
        <div className="grid grid-flow-row grid-cols-5 gap-5 w-9/12 m-auto mt-8 pb-5">
                {objs.map(game => (
                    <Game key={game.id} game={game} />
                ))}
        </div>
        <Link to={`/games/form`}>anadir juegos</Link>
      </div>
    );
}
