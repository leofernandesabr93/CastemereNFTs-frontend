import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { title, container1, imge, text} from "./specific.module.css"

const SpecificProduct = ({user}) => {
  const userId = user?.loguedUser.userFounded._id
  const { productId } = useParams();
  const [product, setAllProduct] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/products?_id=${productId}`);
        setAllProduct(data?.info.products[0]);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const agregarFav = async () => {
    const data = {
      userId:userId,
      productId:productId,
    }
    try {
      await axios.post("http://localhost:8000/products/favorite", data)
    } catch (error) {
      console.log(error)
    }
  }




  const img = `http://localhost:8000/${product?.image}`

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
            <button onClick={agregarFav} className="btn btn-success me-2">Agregar al carrito</button>
            <button className="btn btn-warning">Agregar a favoritos</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SpecificProduct