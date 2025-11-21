"use client";
import { RoomsProps } from "@/@types/types";
import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { RoomCard } from "../cards";
import { Container } from "../sectionComponants";
import SwiperCarousel from "./SwiperCarousel";

interface RoomsSliderProps {
  cards: RoomsProps["cards"];
  bg?: string;
}
const RoomsSlider: FC<RoomsSliderProps> = ({ cards }) => {
  return (
    <div className="w-full flex items-center lg:px-4">
      <Container>
        <SwiperCarousel
          data={cards}
          slidesPerView={1}
          spaceBetween={24}
          loop
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".rooms-cards-next",
            prevEl: ".rooms-cards-prev",
          }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
              autoplay: false,
            },
          }}
          className="w-full"
          renderSlide={(card) => <RoomCard {...card} />}
        />
      </Container>
    </div>
  );
};

export default RoomsSlider;
