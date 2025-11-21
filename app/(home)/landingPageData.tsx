import { contact } from "@/utils/constent";
import {
  BadICon,
  BookingRatingIcon,
  ExpediaRatingIcon,
  HillStationICon,
  HotelRatingIcon,
  TripAdvisorRatingIcon,
  WifiIcon,
} from "@/utils/icons";
import { url } from "inspector";

export const landingPageData = {
  bannerData: {
    title: "Welcome to Our Platform",
    subtitle: "Your journey starts here",
    src: "/images/banner.jpg",
    videoSrc:
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/Manali-Se/IMG_7663.mp4",
  },
  aboutData: {
    title: "WELCOME TO MANALI SE",
    subTitle: "A Serene Escape In The Heart Of Manali",
    description: [
      "Nestled among whispering pines and just 8 km from Manali Mall Road, Manali Se offers a tranquil hideaway away from the hustle and bustle. With eight beautifully designed rooms, this secluded retreat invites you to slow down, breathe, and let nature take the lead.",
      "Begin your day with crisp mountain air, the aroma of pine, and birdsong in the background. Whether you’re curling up with a book, enjoying chai on the balcony, or taking in the sweeping views, every moment here is crafted for pure relaxation.",
    ],
    images: ["/about-1.jpg", "/about-2.jpg"],
    link: {
      label: "Book Now",
      href: contact.WhatsappCta,
    },
  },
  onlinePartnersData: {
    cards: [
      {
        icon: <TripAdvisorRatingIcon />,
        src: "/Tripadvisor-Logo.png",
        partnerName: "TripAdvisor",
        ratings: "4.5/5",
      },
      {
        icon: <HotelRatingIcon />,

        src: "/makemytrip-logo.png",
        partnerName: "Booking.com",
        ratings: "9.5/10",
      },
      {
        icon: <BookingRatingIcon />,
        src: "/Booking.Com-logo.png",
        partnerName: "Hotels.com",
        ratings: "9.7/10",
      },
      {
        icon: <ExpediaRatingIcon />,
        src: "/cleartrip-logo.png",
        partnerName: "Expedia",
        ratings: "9.6/10",
      },
    ],
  },
  roomAndSuitesData: {
    title: "Rooms & Suites",
    subTitle: "Our Luxury Accommodations",
    cards: [
      {
        title: "Pent House Suite",
        description:
          "Perched at the very top of Manali Se, the Penthouse Suite is a serene sanctuary with a charming thatched wooden roof that blends seamlessly with nature.",
        images: [
          "/Penthouse/Copy-of-DSC_3395.webp",
          "/Penthouse/Copy-of-DSC_3396.webp",
          "/Penthouse/Copy-of-DSC_3397.webp",
          "/Penthouse/Copy-of-DSC_3401.webp",
          "/Penthouse/Copy-of-IMG_0405_2.webp",
          "/Penthouse/Copy-of-IMG_0406_2.webp",
          "/Penthouse/Copy-of-IMG_0407_2.webp",
          "/Penthouse/Copy-of-IMG_0771.webp",
          "/Penthouse/Copy-of-IMG_0772.webp",
          "/Penthouse/Copy-of-DSC_3400.webp",
          "/Penthouse/Copy-of-IMG_0773.webp",
        ],
        link: {
          label: "BOOK NOW",
          url: contact.WhatsappCta,
        },
        listOfIcons: [
          {
            icons: <HillStationICon />,
            title: "hill station",
          },
          {
            icons: <BadICon />,
            title: "Bad",
          },
          {
            icons: <WifiIcon />,
            title: "Wifi",
          },
        ],
      },
      {
        images: [
          "/Super-Deluxe-Suites/Copy-of-DSC_3392.webp",
          "/Super-Deluxe-Suites/Copy-of-DSC_3393.webp",
          "/Super-Deluxe-Suites/Copy-of-IMG_0400-2.webp",
          "/Super-Deluxe-Suites/Copy-of-IMG_0774.webp",
          "/Super-Deluxe-Suites/Copy-of-IMG_0776.webp",
          "/Super-Deluxe-Suites/Copy-of-IMG_0775.webp",
        ],
        title: "Super Deluxe Suite",
        description:
          "At Manali Se, space and comfort come together in our two expansive suites, designed for those who love a blend of luxury and nature.",
        link: {
          label: "BOOK NOW",
          url: contact.WhatsappCta,
        },
        listOfIcons: [
          {
            icons: <HillStationICon />,
            title: "hill station",
          },
          {
            icons: <BadICon />,
            title: "Bad",
          },
          {
            icons: <WifiIcon />,
            title: "Wifi",
          },
        ],
      },
      {
        images: [  
          "/Deluxe-Executive-Rooms/Copy-of-IMG_0781.webp",
          "/Deluxe-Executive-Rooms/Copy-of-IMG_0782.webp",
          "/Deluxe-Executive-Rooms/Copy-of-IMG_0779.webp",
        ],
        title: "Deluxe Executive Rooms",
        description:
          "The Deluxe Executive Rooms at Manali Se offer comfort with wooden interiors and large windows opening to pine views, perfect for couples seeking an escape.",
        link: {
          label: "BOOK NOW",
          url: contact.WhatsappCta,
        },
        listOfIcons: [
          {
            icons: <HillStationICon />,
            title: "hill station",
          },
          {
            icons: <BadICon />,
            title: "Bad",
          },
          {
            icons: <WifiIcon />,
            title: "Wifi",
          },
        ],
      },
      {
        images: [
          "/Deluxe-Executive-Rooms/Copy-of-IMG_0778-1.webp",
        ],
        title: "Deluxe Room",
        description:
          "The Deluxe Room at Manali Se provides easy ground-floor access with spacious, cozy interiors and pine-facing views, making it ideal for seniors, families, or anyone seeking comfort and convenience.",
        link: {
          label: "BOOK NOW",
          url: contact.WhatsappCta,
        },
        listOfIcons: [
          {
            icons: <HillStationICon />,
            title: "hill station",
          },
          {
            icons: <BadICon />,
            title: "Bad",
          },
          {
            icons: <WifiIcon />,
            title: "Wifi",
          },
        ],
      },
    ],
  },
  gallery: {
    title: "AROUND MANALI SE",
    subTitle: "Explore Our Gallery",
    images: [
      "/gallery1.jpg",
      "/gallery2.jpg",
      "/gallery3.jpg",
      "/gallery4.webp",
      "/gallery5.webp",
    ],
    link: {
      label: "Book Now",
      url: contact.WhatsappCta,
    },
  },
  testimonials: {
    title: "TESTIMONIALS",
    subTitle: "Hearts Touched by Manali Se",
    image: "/about-2.jpg",
    cards: [
      {
        name: "Fatemeh Etemadifar",
        comment:
          "One of the best experiences we’ve ever had! The view was absolutely stunning, with majestic mountains all around—truly picture perfect. The staff were exceptionally helpful and friendly, making us feel right at home from the moment we arrived. The food was amazing, full of flavour and variety, and having breakfast and lunch included was a wonderful bonus.One of the highlights of our stay was when the hotel team took us on a beautiful walk through the jungle and along the river—it was peaceful, refreshing, and something we’ll never forget. Highly recommend this hotel to anyone visiting Manali. A perfect mix of comfort, nature, and genuine hospitality!",
      },
    ],
  },
};
