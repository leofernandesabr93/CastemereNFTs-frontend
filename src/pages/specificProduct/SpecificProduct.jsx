import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { title, container1, imge, text} from "./specific.module.css"
import Swal from 'sweetalert2';

const SpecificProduct = ({user, setProductId, setFavItemCount, setCartItemCount}) => {
  const userId = user?.loguedUser.userFounded._id
  const { productId } = useParams();
  
  const [product, setAllProduct] = useState([])
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToFav, setAddedToFav] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://castemerenfts-backend.onrender.com/products?_id=${productId}`);
        setAllProduct(data?.info.products[0]);
        setProductId(productId)
        if (user?.loguedUser.userFounded.cart.includes(productId)) {
          setAddedToCart(true);
        }
        if (user?.loguedUser.userFounded.favorite.includes(productId)) {
          setAddedToFav(true);
        }
      } catch (error) {
        //error
      }
    }
    fetchData()
  }, [])

  const agregarFav = async () => {
    if (!user || !user.loguedUser.userFounded) {
      Swal.fire({
        title: 'Inicia sesión para agregar productos a favoritos',
        icon: 'warning',
        showConfirmButton: true,
      });
      return;
    }
    const data = {
      userId:userId,
      productId:productId,
    }
    try {
      await axios.post("https://castemerenfts-backend.onrender.com/products/favorite", data)
      user?.loguedUser.userFounded.favorite.push(productId)
      localStorage.setItem('user', JSON.stringify(user));
      setAddedToFav(true)
      setFavItemCount(user?.loguedUser.userFounded.favorite.length)
      Swal.fire({
        title: '¡Producto agregado a favoritos!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      //error
    }
  }

  const agregarCart = async () => {
    if (!user || !user.loguedUser.userFounded) {
      Swal.fire({
        title: 'Inicia sesión para agregar productos al carrito',
        icon: 'warning',
        showConfirmButton: false,
        timer:1500
      });
      return;
    }
    const data = {
      userId:userId,
      productId:productId,
    }
    try {
      await axios.post("https://castemerenfts-backend.onrender.com/products/cart", data)
      user?.loguedUser.userFounded.cart.push(productId)
      localStorage.setItem('user', JSON.stringify(user));
      setAddedToCart(true); 
      setCartItemCount(user?.loguedUser.userFounded.cart.length)
      Swal.fire({
        title: '¡Producto agregado al carrito!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      //error
    }
  }
  const img = `https://castemerenfts-backend.onrender.com/${product?.image}`
  return (
    <div className={`container-fluid ${container1}`}>
      <div className={`row d-flex justify-content-center pt-5 text-white`}>

        <div className="col-11 col-md-4 col-lg-5 col-xl-4">
          <img className={imge} src={img} alt="Imagen"/>
        </div>
        <div className="col-11 col-md-4 col-lg-5 col-xl-4">
          <h2 className={title}>{product.name}</h2>
          <p className={text}>{`$${product.price}`}</p>
          
          <div className="d-flex">
            <button onClick={agregarCart} className={`btn btn-success me-2 ${addedToCart ? 'disabled' : ''}`}>Agregar al carrito</button>
            <button onClick={agregarFav} className={`btn btn-warning ${addedToFav ? 'disabled' : ''}`}>Agregar a favoritos</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SpecificProduct