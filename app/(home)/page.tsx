import Banner from "@/components/Banner/Banner";
import { landingPageData } from "./landingPageData";
import {
  AboutSection,
  CafeAndRestaurants,
  Rooms,
} from "@/components/page-components";
import TestimonialsSection from "@/components/sectionComponants/TestimonialsSection";
import OnlinePlatforms from "./components/OnlinePlatforms";
import Form1 from "@/components/forms/Form1";

export default function Home() {
  return (
    <main>
      <Banner {...landingPageData.bannerData} />
      <div className="md:-top-16 md:relative z-30 max-md:py-4 max-md:bg-dark2">
        <div className="p-4 bg-black/50 md:rounded-2xl max-w-[1400px] mx-auto">
          <div className="md:rounded-2xl  md:shadow-xl md:py-5 bg-white">
            <Form1 rounded />
          </div>
        </div>
      </div>
      <AboutSection {...landingPageData.aboutData} />
      <OnlinePlatforms {...landingPageData.onlinePartnersData} />
      <Rooms {...landingPageData.roomAndSuitesData} />
      <CafeAndRestaurants {...landingPageData.gallery} />
      <TestimonialsSection {...landingPageData.testimonials} />
    </main>
  );
}
