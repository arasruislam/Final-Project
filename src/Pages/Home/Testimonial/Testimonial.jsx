import { Rating, RoundedStar } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const ratingShape = {
    itemShapes: RoundedStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
        centeredSlides={false}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="grid place-items-center p-4 space-y-4">
              <Rating
                style={{ maxWidth: 180 }}
                value={review?.rating}
                // itemStyles={RoundedStar}
                itemStyles={ratingShape}
                readOnly
              />
              <FaQuoteLeft className="h-16 w-16" />
              <p>{review?.details}</p>
              <h3 className="text-lg text-[#CD9003]">{review?.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
