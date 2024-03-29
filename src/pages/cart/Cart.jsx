import React from 'react'
import { container1, container2 } from './cart.module.css'
import CartList from '../../components/specific/cartList/CartList'
import FormCart from '../../components/specific/formCart/FormCart'


const Cart = ({user, setUser, setCartItemCount, cartItemCount}) => {
  return (
    <div className={`container-fluid d-flex justify-content-center ${container1}`}>
      <div className={`row pt-5 ${container2} justify-content-center`}>

        <CartList user={user} setUser={setUser} setCartItemCount={setCartItemCount} cartItemCount={cartItemCount}/>

        <FormCart/>
      
      </div>
    </div>
  )
}

export default Cart