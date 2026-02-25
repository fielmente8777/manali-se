import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";

interface OfferCardProps {
  title: string;
  description: string;
  link: {
    label: string;
    url: string;
  };
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, link }) => {
  return (
    <SectionWithContainer defaultPadding={false}>
      <div className="flex flex-col gap-4 text-center md:max-w-200 mx-auto border border-primary px-6 py-10 bg-[#FFFBED]">
        <h2 className="text-[1.375rem] font-semibold text-primary tracking-[40%] max-w-md mx-auto">{title}</h2>
        <p className="text-[#000000] md:text-xl">{description}</p>
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
