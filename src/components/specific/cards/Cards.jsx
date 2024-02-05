import React from 'react'
import { img, cardCustom, cardText} from '../../../pages/market/market.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Cards = () => {

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/products");
        setAllProducts(data.info.products);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  
  console.log(allProducts)

  return (  
    <>
      {allProducts.map((product, index) => (
        <div className="col-8 col-md-4 col-lg-3 col-xl-3"  key={index}>
        <Link className='text-decoration-none' to={`/${product._id}`}>
            <div className={`card bg-dark ${cardCustom}`}>
              <img src={`http://localhost:8000/${product.image}`} className={img} />
              <div className="card-body">
                <h5 className={`card-title text-white ${cardText}`}>{product.name}</h5>
                <h5 className={`card-title text-success text-end ${cardText}`}>{`$${product.price}`}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>   


      

  )
}

export default Cards