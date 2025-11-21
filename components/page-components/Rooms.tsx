"use client";
import { RoomsProps } from "@/@types/types";
import LinkButton from "../buttons/LinkButton";
import { SectionWithContainer } from "../sectionComponants";
import { RoomsSlider } from "../sliders";
import { SectionHeading } from "../typography";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const Rooms: React.FC<RoomsProps> = ({
  title,
  subTitle,
  cards,
  link,
  bg,
  description,
}) => {
  // const { setIsOpenPopup } = useWebContext();
  return (
    <SectionWithContainer sectionClassName={`${bg ? `bg-[#F9FFEB]` : "bg-background"}`}>
      <div className="flex flex-col md:gap-14 gap-8">
       <div className="flex items-center justify-between">
         <SectionHeading
          title={title}
          subTitle={subTitle}
          titleColor={`${bg ? `primary` : "primary"}`}
          subTitleColor={`${bg ? `primary` : "secondary"}`}
          titleClassName="uppercase tracking-widest"
          smTextCenter
        />
        <div className="md:flex hidden items-center gap-4">
           <button className="text-3xl text-primary rooms-cards-prev">
             <FaCircleArrowLeft />
           </button>
           <button className="text-3xl text-primary rooms-cards-next">
             <FaCircleArrowRight />
           </button>
        </div>
       </div>
        <RoomsSlider cards={cards} bg={bg} />
        <div className="flex md:hidden items-center justify-center gap-4">
           <button className="text-3xl text-primary rooms-cards-prev">
             <FaCircleArrowLeft />
           </button>
           <button className="text-3xl text-primary rooms-cards-next">
             <FaCircleArrowRight />
           </button>
        </div>
        {description && (
          <p className="md:text-lg text-white text-center">{description}</p>
        )}
        {link && (
          <LinkButton
            href={link.url}
            label={link.label}
            className="text-nowrap text-white bg-secondary border-secondary mx-auto"
          />
          // <OnlyButton
          //   label={link.label}
          //   onclick={() => setIsOpenPopup(true)}
          //   className="text-nowrap text-white bg-secondary border-secondary mx-auto"
          // />
        )}
      </div>
    </SectionWithContainer>
  );
};

export default Rooms;
