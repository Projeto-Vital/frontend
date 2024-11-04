import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carrossel.css";

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
                    <img
                        className="swiper-slide-img object-cover"
                        src="https://ik.imagekit.io/iixrkkdfp/banners/banner%2002.png?updatedAt=1730652429775"
                        alt="banner serviços"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="swiper-slide-img"
                        src="https://ik.imagekit.io/iixrkkdfp/banners/banner%2002%20(1).png?updatedAt=1730652510858"
                        alt="banner serviços"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="swiper-slide-img object-cover"
                        src="https://ik.imagekit.io/iixrkkdfp/banners/Black%20friday%20eletr%C3%B4nicos%20fotogr%C3%A1fico%20azul%20preto%20banner%20para%20site%20(6).png?updatedAt=1730487308990"
                        alt="banner novembro azul"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="swiper-slide-img object-cover"
                        src="https://ik.imagekit.io/iixrkkdfp/banners/Black%20friday%20eletr%C3%B4nicos%20fotogr%C3%A1fico%20azul%20preto%20banner%20para%20site%20(5).png?updatedAt=1730487308763"
                        alt="banner outubro rosa"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Home;
