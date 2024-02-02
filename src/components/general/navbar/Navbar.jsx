import React from 'react'
import { icons, navbar, button, links } from '../navbar/navbar.module.css'

const Navbar = () => {
  return (
    <div className={navbar}>
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">CastemereNFTs</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className={` ${links}`} href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={` ${links}`} href="#">Destacado</a>
              </li>
              <li className="nav-item">
                <a className={` ${links}`} href="#">Contacto</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={` ${icons}`} href="#"><i class="bi bi-star"></i></a>
              </li>
              <li className="nav-item">
                <a className={` ${icons}`} href="#"><i className="bi bi-cart"></i></a>
              </li>

            </ul>
              <button type="button" className="btn btn-danger mx-1 p-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i className={`bi bi-person ${icons}`}></i>    
              </button>
              
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar