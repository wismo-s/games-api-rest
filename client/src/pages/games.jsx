import React, { useState, useEffect } from 'react';
import { listAllObj } from '../api/list.api'
import { Game } from '../components/game';

export function Games() {

  const [objs, setObj] = useState([]);

    useEffect(() => {
      async function getObj() {
        const res = await listAllObj('games/');
        setObj(res.data);
    }
    getObj();
    }, []);

    return (
           <div>
                {objs.map(game => (
                    <Game key={game.id} game={game} />
                ))}
            </div>
    );
}
