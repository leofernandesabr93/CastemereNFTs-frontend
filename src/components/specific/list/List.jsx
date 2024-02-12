import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {img} from "./list.module.css"
import { NavLink } from 'react-router-dom'
 
const List = ({user, setUser, setFavItemCount, favItemCount}) => {

  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const userid = user?.loguedUser.userFounded._id

  const favorites = user?.loguedUser.userFounded.favorite

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get("https://castemerenfts-backend.onrender.com/products");
        setAllProducts(data.info.products);
      } catch (error) {
        //error
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const favoritesLogued = allProducts?.filter(product => favorites.includes(product._id));

  const deleteFavorite = async (ids) => {
     const userId = userid
     const productId = ids
    try {
      await axios.delete(`https://castemerenfts-backend.onrender.com/users/deleteFavorite/${userId}/${productId}`)
    // Filtrar los favoritos del usuario para eliminar el producto con el ID proporcionado
    const updatedFavorites = user?.loguedUser.userFounded.favorite.filter(id => id.toString() !== ids);
    // Actualizar el objeto de usuario en el estado y en el almacenamiento local
    const updatedUser = {
      ...user,
      loguedUser: {
        ...user.loguedUser,
        userFounded: {
          ...user.loguedUser.userFounded,
          favorite: updatedFavorites
        }
      }
    };
    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser)
    setFavItemCount(favItemCount -= 1)
    } catch (error) {
      //error
    }
  }

  return (
    <div className='container d-flex justify-content-center'>
      <div className='row'>
        <h1 className='text-center pb-4 text-white fw-bold'>Favoritos</h1>
        {loading ? <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> :  
      <>
       {favoritesLogued.map((product, index) => (
        <div className="p-2 border border-1 d-flex"  key={product._id}>
            <NavLink className='text-decoration-none' to={`/${product._id}`}>
            <div className={`d-flex`}>
              <img src={`https://castemerenfts-backend.onrender.com/${product.image}`} className={img}/>
              <div className="card-body px-3">
                <h5 className={`card-title text-white`}>{product.name}</h5>
                <h5 className={`card-title text-success `}>{`$${product.price}`}</h5>
              </div>
            </div>
            </NavLink>
              <button onClick={() => deleteFavorite(product._id)} className='btn btn-danger ms-auto'>Eliminar</button>
        </div>
      ))}
      </>
      }
     
       {user?.loguedUser.userFounded.favorite.length < 1 &&
        <h2 className='text-center text-white'>No hay productos agregados</h2>
      }
       
      </div>
    </div>
  )
}

export default List