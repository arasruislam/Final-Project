import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

/* Image Load from locally */
import img1 from "../../../assets/slider/slide1.jpg";
import img2 from "../../../assets/slider/slide2.jpg";
import img3 from "../../../assets/slider/slide3.jpg";
import img4 from "../../../assets/slider/slide4.jpg";
import img5 from "../../../assets/slider/slide5.jpg";

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img src={img1} alt="Category Images" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-cinzel">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Category Images" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-cinzel">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Category Images" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-cinzel">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Category Images" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-cinzel">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Category Images" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-cinzel">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Category Images" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-cinzel">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Category Images" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-cinzel">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Category Images" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-cinzel">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="Category Images" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-cinzel">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
