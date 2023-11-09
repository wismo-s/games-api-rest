import React, { useContext, useState, useEffect } from 'react'
import { Contextapp } from '../api/context'
import { Cartitem } from '../components/cartitem'
import { cartEdit } from '../api/list.api'
import { ContextCart } from '../api/context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function Cart() {

    const context = useContext(Contextapp)
    const [cartitems, setCartitems] = useState([])
    const cartcontext = useContext(ContextCart)
    const [cartid, setCartid] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const items =  context.data.games.filter(item => cartcontext.cart.includes(item.id))
        setCartid(cartcontext.cart)
        setCartitems(items)
    }, [])

    const pricetotal = cartitems.reduce((acc, item)=>{
        acc += parseFloat(item.price)
        return acc
    }, 0).toFixed(2)

    if(cartitems == {}){
        return <div>vacio</div>
    }
    const handleCLick = async (e) =>{
        const remuveitem = cartitems.filter(item => item.id != e.target.value)
        const remuvecartid = cartid.filter(id => id != e.target.value)
        setCartid(remuvecartid)
        setCartitems(remuveitem)
        console.log(remuvecartid);
        cartcontext.setCart(remuvecartid);
        await cartEdit(context.data.user.cart, {
            "id": context.data.user.cart,
            "games": remuvecartid
        })
    }
    const handlePay = async () =>{
        await axios.post('https://games-proyecti.onrender.com/user/facture/', {
            "total": pricetotal,
            "user": context.data.user.id,
            "games": cartcontext.cart   
        }).then((res)=>{
            cartEdit(context.data.user.cart, {
                "id": context.data.user.cart,
                "games": []
            })
            cartcontext.setCart([]);
            setCartitems([]);
            navigate('/')
            window.location.reload(true);
        })
    }

  return (
    <div className='h-screen'>
        <div className='grid grid-flow-row gap-4 m-auto mt-5 w-2/4'>
        {cartitems.map(item => (
                    <div key={item.id} className='flex p-7 bg-violet-900 rounded-3xl justify-between'>
                        <Cartitem url={item.port_image} title={item.title} price={item.price}/>
                        <button value={item.id} className='text-xl bg-violet-950 rounded-lg inline-block p-2 pl-5 pr-5 text-gray-300 hover:bg-purple-800 h-fit' onClick={handleCLick}>eliminar</button>
                    </div>    
                ))}
        </div>
        <div className='mt-3 flex justify-center'>
            <div className='text-gray-300 text-2xl inline-block mr-5'>Total: $/.{pricetotal}</div>
            <button className="text-xl bg-violet-800 rounded-lg p-2 pl-5 pr-5 text-gray-300 hover:bg-purple-800 inline-block" onClick={handlePay}>PAGAR</button>
        </div>
    </div>
  )
}