import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carrossel.css";
import Slide01 from "./Slide01";

function Home() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <Slide01 />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="swiper-slide-img" 
                        src="https://ik.imagekit.io/2x0ly2dmob/Sem%20T%C3%ADtulo-1%20(1).jpg?updatedAt=1725982581068" 
                        alt="Carrossel - Slide 02" 
                    />
                </SwiperSlide>

                <SwiperSlide>
                <img 
                    className="swiper-slide-img"
                    src="https://ik.imagekit.io/2x0ly2dmob/Arte1.jpg?updatedAt=1725978527089" 
                    alt="Carrossel - Slide 03" 
                />
                </SwiperSlide>

                <SwiperSlide>
                <img 
                    className="swiper-slide-img"
                    src="https://ik.imagekit.io/2x0ly2dmob/Arte2.png?updatedAt=1725978526645" 
                    alt="Carrossel - Slide 03" 
                />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Home