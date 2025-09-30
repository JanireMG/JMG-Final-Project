import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function UserPanelCarousel() {
    const videos = [
        "https://www.youtube.com/embed/u_S0YALm6Y8?si=w4_a_9RTIh0v8rfU",
        "https://www.youtube.com/embed/2DFKIllyMOY?si=D5qr9RvoWSUzIrXv",
        "https://www.youtube.com/embed/JfVvTiW0Svs?si=_5azaBrERAPBN0Wh",
        "https://www.youtube.com/embed/JhsEpHTCOHA?si=Rcii0j2e4DkZ_EVV",
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            style={{ width: "100%", height: "400px" }}
        >
            {videos.map((video, index) => (
                <SwiperSlide key={index}>
                    <iframe
                        src={video}
                        title={`Video ${index + 1}`}
                        width="500px"
                        height="280px"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}