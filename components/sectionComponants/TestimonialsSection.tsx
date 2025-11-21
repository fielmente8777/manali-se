"use client";
import { TestimonialsProps } from "@/@types/types";
import Image from "next/image";
import { TestimonialsSlider } from "../sliders";
import SectionWithContainer from "./SectionWithContainer";
import { RatingIcon } from "@/utils/icons";
import { SectionHeading } from "../typography";

const TestimonialsSection: React.FC<TestimonialsProps> = ({
  title,
  subTitle,
  cards,
  image,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-background testimonial">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:gap-24 gap-6">
        <div className="relative w-full aspect-square">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="">
          <SectionHeading title={title} subTitle={subTitle} titleClassName="tracking-widest"  />
          <div className="relative lg:w-20 w-[60px] aspect-square">
            <Image src="/Frame.png" alt={title} fill className="object-contain" />
          </div>
          <TestimonialsSlider cards={cards} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TestimonialsSection;
