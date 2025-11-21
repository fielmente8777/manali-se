"use client";
import { EffectCoverflow, Navigation } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import Image from "next/image";
import { CafeAndRestaurantsProps } from "@/@types/types";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

interface CafeSliderProps {
  cards: CafeAndRestaurantsProps["images"];
}
const CafeSlider: React.FC<CafeSliderProps> = ({ cards }) => {
  const data = cards.length < 3 ? [...cards, ...cards, ...cards] : cards;
  return (
    <div>
      <SwiperCarousel
        data={data || []}
        modules={[EffectCoverflow, Navigation]}
        navigation={{
          nextEl: ".cafe-next",
          prevEl: ".cafe-prev",
        }}
        className="w-full we-offer-slider"
        swiperSlideClassName="swiper-slide"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0, // Keep flat
          stretch: 20, // Don't stretch
          depth: 300, // Controls scale & blur of side slides
          modifier: 2.5, // Makes the central slide more prominent
          slideShadows: false, // Shadow adds blur illusion
        }}
        speed={800}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
        renderSlide={(src) => (
          <div className="w-full">
            <div className="w-full relative aspect-[4/2.5]">
              <Image src={src} alt="image" fill className="object-cover" />
            </div>
            {/* <h3 className="text-center mt-4 text-secondary text-2xl moul tracking-wider">
              {card.alt}
            </h3> */}
          </div>
        )}
      />
      <div className="flex items-center justify-center gap-2 mt-6">
        <button className=" text-secondary text-3xl cafe-prev">
          <FaCircleArrowLeft />
          <span className="sr-only">Previous</span>
        </button>
        <button className=" text-secondary text-3xl cafe-next">
          <FaCircleArrowRight />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CafeSlider;
