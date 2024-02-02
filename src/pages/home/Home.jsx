import React from 'react'
import Carrousel from '../../components/specific/carrousel/Carrousel'
import { containerCustom } from './home.module.css'
import LoginModal from '../../components/specific/loginModal/LoginModal'

const Home = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className={`row pt-5 ${containerCustom}`}>
        <Carrousel/>
      </div>
    </div>
  )
}

export default Home