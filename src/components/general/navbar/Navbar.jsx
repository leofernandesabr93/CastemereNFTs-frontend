import React from 'react'
import { icons } from '../navbar/navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">CastemereNFTs</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={` ${icons}`} href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className={` ${icons}`} href="#">Destacado</a>
              </li>
              <li className="nav-item">
                <a className={` ${icons}`} href="#">Contacto</a>
              </li>
              <li className="nav-item">
                <a className={` ${icons}`} href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className={` ${icons}`} href="#">Register</a>
              </li>
            </ul>
            <ul className="navbar-nav mx-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={` ${icons}`} href="#"><i className="bi bi-star" ></i></a>
              </li>
              <li className="nav-item">
                <a className={` ${icons}`} href="#"><i className="bi bi-cart"></i></a>
              </li>
              <li className="nav-item">
                <a className={` ${icons}`} href="#"><i className="bi bi-question-octagon"></i></a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar