import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

interface OfferCardProps {
  title: string;
  description: string[];
  src: string;
  images?: { src: string; alt: string }[];
  link: {
    label: string;
    url: string;
  };
}

const OfferCard: React.FC<OfferCardProps> = ({
  title,
  description,
  link,
  src,
  images,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#FFFBED]">
      <div className="flex flex-col gap-8 text-center">
        <h2 className="text-[1.75rem] md:text-5xl font-semibold text-secondary font-gilda">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 w-full ">
          {images?.map((image, index) => (
            <div className="space-y-2" key={index}>
              <div className="w-full aspect-4/3 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#656565]">
                {image.alt}
              </h3>
            </div>
          ))}
        </div>
        <LinkButton
          href={link.url}
          label={link.label}
          className="text-nowrap text-white bg-primary mx-auto"
        />
      </div>
    </SectionWithContainer>
  );
};

export default OfferCard;

export const TickIcon = () => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.9168 13L22.2735 9.9775L22.6418 5.98L18.731 5.09167L16.6835 1.625L13.0002 3.20667L9.31683 1.625L7.26933 5.08083L3.3585 5.95833L3.72683 9.96667L1.0835 13L3.72683 16.0225L3.3585 20.0308L7.26933 20.9192L9.31683 24.375L13.0002 22.7825L16.6835 24.3642L18.731 20.9083L22.6418 20.02L22.2735 16.0225L24.9168 13ZM10.931 18.1133L6.81433 13.9858L8.41766 12.3825L10.931 14.9067L17.2685 8.5475L18.8718 10.1508L10.931 18.1133Z"
      fill="#FFCE83"
    />
  </svg>
);
