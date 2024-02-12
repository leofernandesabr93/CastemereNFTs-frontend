import React from 'react'
import { img, cardCustom, cardText} from '../../../pages/market/market.module.css'
import { Link } from 'react-router-dom'
import Pagination from '../pagination/Pagination'

const Cards = ({allProducts, totalPages, setPage}) => {

  return (  
    <>
      {allProducts.map((product) => (
        <div className="col-8 col-md-4 col-lg-3 col-xl-3 pb-4"  key={product._id}>
        <Link className='text-decoration-none' to={`/${product._id}`}>
            <div className={`card bg-dark ${cardCustom}`}>
              <img src={`https://castemerenfts-backend.onrender.com/${product.image}`} className={img} />
              <div className="card-body">
                <h5 className={`card-title text-white ${cardText}`}>{product.name}</h5>
                <h5 className={`card-title text-success text-end ${cardText}`}>{`$${product.price}`}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    <div className='pt-5'>
      <Pagination totalPages={totalPages} setPage={setPage}/>
    </div>
    </>   
  )
}

export default Cards