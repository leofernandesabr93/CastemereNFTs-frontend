// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { img, cardCustom, cardText, title} from './carrousel.module.css'

export default () => {
  return (
    <>
      <h2 className={title}>Destacado</h2>
      <Swiper
        // install Swiper modules
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 5,
          },
          0: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className={`card bg-dark ${cardCustom}`}>
            <img src="https://picsum.photos/id/237/200/300" className={img} />
            <div className="card-body">
              <h5 className={`card-title text-white ${cardText}`}>Card title</h5>
            <h5 className={`card-title text-success text-end ${cardText}`}>$20</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`card bg-dark ${cardCustom}`}>
            <img src="https://picsum.photos/id/237/200/300" className={img} />
            <div className="card-body">
              <h5 className={`card-title text-white ${cardText}`}>Card title</h5>
            <h5 className={`card-title text-success text-end ${cardText}`}>$20</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`card bg-dark ${cardCustom}`}>
            <img src="https://picsum.photos/id/237/200/300" className={img} />
            <div className="card-body">
              <h5 className={`card-title text-white ${cardText}`}>Card title</h5>
            <h5 className={`card-title text-success text-end ${cardText}`}>$20</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`card bg-dark ${cardCustom}`}>
            <img src="https://picsum.photos/id/237/200/300" className={img} />
            <div className="card-body">
              <h5 className={`card-title text-white ${cardText}`}>Card title</h5>
            <h5 className={`card-title text-success text-end ${cardText}`}>$20</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`card bg-dark ${cardCustom}`}>
            <img src="https://picsum.photos/id/237/200/300" className={img} />
            <div className="card-body">
              <h5 className={`card-title text-white ${cardText}`}>Card title</h5>
            <h5 className={`card-title text-success text-end ${cardText}`}>$20</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`card bg-dark ${cardCustom}`}>
            <img src="https://picsum.photos/id/237/200/300" className={img} />
            <div className="card-body">
              <h5 className={`card-title text-white ${cardText}`}>Card title</h5>
            <h5 className={`card-title text-success text-end ${cardText}`}>$20</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};