import { icons, navbar, links, active } from '../navbar/navbar.module.css'
import '../navbar/navbar.module.css'
import { NavLink, useLocation  } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useEffect } from 'react'

const Navbar = ({productId, user, setUser, favItemCount, cartItemCount, setCartItemCount, setFavItemCount}) => {
  const location = useLocation();

    useEffect(() => {
      setCartItemCount(user?.loguedUser.userFounded.cart.length)
      setFavItemCount(user?.loguedUser.userFounded.favorite.length)
    }, [cartItemCount, favItemCount])
    

  const logout = () => {
    Swal.fire({
      title: "Seguro desea cerrar sesion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('user');
        setUser(null)
      }
    });
  }

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
                <NavLink className={`${links} ${location.pathname === "/" ? active : ""}`} to="/"> Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`${links} ${(location.pathname === `/${productId}` || location.pathname === "/market") ? active : ""}`} to="/market">Market</NavLink>
              </li>
            </ul>
            {user &&
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className={`${icons}`} to="/favoritos"><i className="bi bi-star"></i>
                  {favItemCount > 0 && <span className={`badge bg-danger`}>{favItemCount}</span>}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`${icons}`} to="/carrito"><i className="bi bi-cart"></i>
                  {cartItemCount > 0 && <span className={`badge bg-danger`}>{cartItemCount}</span>}
                  </NavLink>
                </li>
              </ul> 
            }
            <button data-bs-toggle="modal" data-bs-target="#searchModal" type="button" className="btn btn-danger mx-1 p-2">
              <i className="bi bi-search"></i>
            </button> 
            {user ? 
            (
            <button onClick={logout} type="button" className="btn btn-danger mx-1 p-2">
              Cerrar sesion
            </button> 
            ) :
            (
              <button type="button" className="btn btn-danger mx-1 p-2" data-bs-toggle="modal"  data-bs-target="#staticBackdrop">
                Iniciar Sesion 
              </button> 
            )
            } 
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar