import React, { useContext  } from 'react'
import { Contextapp } from '../api/context';
import { Link } from 'react-router-dom';

export function User() {
    const context = useContext(Contextapp)
    
    if (!context.session) {
        return(
            <div>login please</div>
        )
    }
    return (
        <div className="flex space-x-4 h-screen">
        <div className="w-80 h-80 mt-4 ml-4 mb-2">
          <div
            style={{ backgroundImage: `url(${context.data.user.image_perfil})` }}
            className="h-full w-full bg-top bg-cover bg-no-repeat relative rounded-full"
          ></div>
        </div>
        <div className="flex flex-col bg-violet-900 p-8 rounded-3xl h-fit mt-4">
          <h1 className='text-gray-300 text-2xl'>{context.data.user.username}</h1>
          <Link className='text-xl m-auto bg-violet-950 rounded-lg block p-2 pl-5 pr-5 text-gray-300 hover:bg-purple-800' to="/factures">facturas</Link>
        </div>
      </div>
        )
}