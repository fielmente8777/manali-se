"use client";
import { AboutSectionProps } from "@/@types/types";
import Image from "next/image";
import { Container, Section } from "../sectionComponants";
import { SectionHeading } from "../typography";
import LinkButton from "../buttons/LinkButton";

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  subTitle,
  description,
  link,
  images,
}) => {
  return (
    <Section className="space-y-14">
      <Container>
        <div className="relative w-[68px] mx-auto aspect-4/2">
          <Image src="/logo-2.png" alt={title} fill className="object-cover" />
        </div>
        <SectionHeading title={title} subTitle={subTitle} textCenter titleClassName="tracking-widest" />
      </Container>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1.1fr_2fr] gap-6 ">
        <div className="relative w-full aspect-[4/3.6] border-primary border-t-12 border-r-[3px] rounded-tr-[200px] overflow-hidden">
          <Image src={images[0]} alt={title} fill className="object-cover" />
        </div>
        <div className="max-md:px-4 flex flex-col justify-between items-center">
          {description?.map((item, index) => (
            <p key={index} className="text-light md:text-center md:text-lg mb-4">
              {item}
            </p>
          ))}
          <LinkButton
            target="_blank"
            rel="noreferrer"
            href={link.href}
            label={link.label}
            className="text-white bg-secondary text-nowrap md:mx-auto"
          />
        </div>
        <div className="relative about-bg w-full aspect-[4/3.6]">
          <Image src={images[1]} alt={title} fill className="object-cover border-primary border-t-12 border-l-[3px] rounded-tl-[200px]" />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
