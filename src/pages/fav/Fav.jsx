import React from 'react'
import { container1, container2 } from '../market/market.module.css'
import List from '../../components/specific/list/List'

const Fav = ({user, setUser, setFavItemCount, favItemCount}) => {
  return (
    <div className={`container-fluid d-flex justify-content-center ${container1}`}>
      <div className={`row pt-5 ${container2}`}>

        <List user={user} setUser={setUser} setFavItemCount={setFavItemCount} favItemCount={favItemCount}/>
      
      </div>
    </div>
  )
}

export default Fav