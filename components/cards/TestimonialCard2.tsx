import { TestimonialsProps } from "@/@types/types";

const TestimonialCard2: React.FC<TestimonialsProps["cards"][0]> = ({
  comment: description,
  name
}) => {
  return (
    <div className="space-y-4">
      <p className="text-light">{description}</p>
      <h3 className="text-xl font-semibold font-lora">{name}</h3>
    </div>
  );
};

export default TestimonialCard2;
