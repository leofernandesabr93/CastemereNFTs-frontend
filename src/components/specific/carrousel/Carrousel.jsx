// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { img, cardText, title} from './carrousel.module.css'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(`https://castemerenfts-backend.onrender.com/products`);
        setAllProducts(data.info.products);
      } catch (error) {
        //error
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const destacados = allProducts?.filter(product => product.destacado);

  return (
    <>
      <h2 className={title}>Destacado</h2>
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 2,
          },
        }}
      >
      {loading ? <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> :  
      <>
      {destacados.map((product) => (
      <SwiperSlide  key={product._id}>
        <NavLink className='text-decoration-none' to={`/${product._id}`}>
          <img src={`https://castemerenfts-backend.onrender.com/${product.image}`} className={img} />
          <div className="card-body">
            <h5 className={`card-title text-white ${cardText}`}>{product.name}</h5>
            <h5 className={`card-title text-success text-end ${cardText}`}>{`$${product.price}`}</h5>
          </div>
        </NavLink>
      </SwiperSlide>
    ))}
      </>
      }
      </Swiper>
    </>
  );
};