"use client";
import { CafeAndRestaurantsProps } from "@/@types/types";
import LinkButton from "../buttons/LinkButton";
import { SectionWithContainer } from "../sectionComponants";
import CafeSlider from "../sliders/CafeSlider";
import { SectionHeading } from "../typography";

const CafeAndRestaurants: React.FC<CafeAndRestaurantsProps> = ({
  title,
  subTitle,
  description,
  images,
  link,
}) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-8 md:gap-12">
        <SectionHeading title={title} subTitle={subTitle} textCenter />
        <div className="space-y-6">
          <CafeSlider cards={images} />
          {description && (
            <p className="md:text-lg text-center text-light">{description}</p>
          )}
          <LinkButton
            href={link.url}
            label={link.label}
            className="text-white bg-primary text-nowrap mx-auto"
          />
          {/* <OnlyButton
          label={link.label}
          onclick={() => setIsOpenPopup(true)}
          className="text-nowrap text-white bg-secondary border-secondary mx-auto"
        /> */}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default CafeAndRestaurants;
