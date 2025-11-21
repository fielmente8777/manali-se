"use client";
import { RoomsProps } from "@/@types/types";
import Image from "next/image";
import { FC } from "react";
import LinkButton from "../buttons/LinkButton";
import SwiperCarousel from "../sliders/SwiperCarousel";
import { Navigation } from "swiper/modules";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const RoomCard: FC<RoomsProps["cards"][0]> = ({
  title,
  noOfBadRooms,
  description,
  images,
  link,
  listOfIcons,
  textColor,
}) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <div className="w-full relative">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={0}
          modules={[Navigation]}
          navigation={{
            nextEl: `.room-next-${title.replace(/ /g, "-")}`,
            prevEl: `.room-prev-${title.replace(/ /g, "-")}`,
          }}
          className="w-full "
          renderSlide={(src) => (
            <div className="w-full relative aspect-[4/3.5]">
              <Image src={src} alt={title} fill className="object-cover" />
            </div>
          )}
        />
        <div
          className={`room-prev-${title.replace(
            / /g,
            "-"
          )} disabled:hidden absolute top-1/2 left-4 z-10 text-3xl text-white cursor-pointer`}
        >
          <FaCircleArrowLeft />
        </div>

        <div
          className={`room-next-${title.replace(
            / /g,
            "-"
          )} disabled:hidden absolute top-1/2 right-4 z-10 text-3xl text-white cursor-pointer`}
        >
          <FaCircleArrowRight />
        </div>
      </div>
      <div className="space-y-6 grid grid-rows-[auto_1fr_auto]  pb-4">
        <div className="flex items-center justify-between gap-4">
          <h3
            className={`text-2xl text-${
              textColor ? textColor : "secondary"
            } font-gilda`}
          >
            {title}
          </h3>
          <ul className="flex items-center gap-2">
            {listOfIcons?.map((item, index) => (
              <li
                key={index}
                aria-label={item.title}
                className={`text-${textColor ? textColor : "secondary"}`}
              >
                {item.icons}
              </li>
            ))}
          </ul>
        </div>

        {description && <p className="text-light  grow">{description}</p>}

        {link && (
          <LinkButton
            href={link.url}
            label={link.label}
            className="mt-4 text-white bg-primary w-full justify-center"
          />
          // <OnlyButton
          //   label={link.label}
          //   onclick={() => setIsOpenPopup(true)}
          //   className="text-nowrap text-white bg-secondary border-secondary"
          // />
        )}
      </div>
    </div>
  );
};

export default RoomCard;
