import React from 'react'
import Carrousel from '../../components/specific/carrousel/Carrousel'
import { container1, container2 } from './home.module.css'

const Home = () => {
  return (

      <div className={`container-fluid d-flex justify-content-center ${container1}`}>
        <div className={`row pt-5 ${container2}`}>
          <Carrousel/>
        </div>
      </div>

  )
}

export default Home