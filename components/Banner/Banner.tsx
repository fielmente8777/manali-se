import Image from "next/image";
import { Section } from "../sectionComponants";
import { LazyLoadedVideo } from "../Video";
import Navbar from "../navbar/Navbar";

interface BannerProps {
  src: string;
  videoSrc?: string;
}
const Banner: React.FC<BannerProps> = ({ src, videoSrc }) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full md:aspect-16/8 aspect-16/13"
    >
      {videoSrc ? (
        <LazyLoadedVideo
          src={videoSrc}
          muted={true}
          autoPlay
          loop
          // poster={src}
          controls={false}
        />
      ) : (
        <Image
          src={src}
          alt="banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          loading="eager"
        />
      )}

      <div className="absolute z-20 top-6 inset-x-0">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
    </Section>
  );
};

export default Banner;
