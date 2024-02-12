import React from 'react'
import { container1, container2 } from './home.module.css'

const Home = () => {
  return (
      <div className={`container-fluid d-flex justify-content-center ${container1}`}>
        <div className={`row pt-5 ${container2} mb-5 pb-5 mt-5` }>
          <h1 className='text-white'>Bem-vindo ao CastemereNFTs</h1>
          <p className='text-white'>Castemere NFTs es el primero projecto de Leonardo Abreu.</p>
        </div>
      </div>

  )
}

export default Home