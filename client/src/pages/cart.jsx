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
        await axios.post('http://127.0.0.1:8000/user/facture/', {
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
            navigate('/factures')
        })
    }

  return (
    <div>
        <div>
        {cartitems.map(item => (
                    <div key={item.id}>
                        <Cartitem url={item.port_image} title={item.title} price={item.price}/>
                        <button value={item.id} className='bg-white hover:bg-red-300' onClick={handleCLick}>eliminar</button>
                    </div>    
                ))}
        </div>
        <div>Total: {pricetotal}</div>
        <button className="text-white font-bold p-2 w-20 rounded-lg bg-cyan-500" onClick={handlePay}>PAGAR</button>
    </div>
  )
}