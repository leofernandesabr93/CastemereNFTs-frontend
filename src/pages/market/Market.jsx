import React from 'react'
import { container1, container2 } from './market.module.css'
import Cards from '../../components/specific/cards/Cards'

const Market = () => {
  return (
    <div className={`container-fluid d-flex justify-content-center ${container1}`}>
      <div className={`row pt-5 ${container2}`}>

        <Cards/>

      </div>
    </div>
  )
}

export default Market