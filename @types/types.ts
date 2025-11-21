import { JSX } from "react";

export interface AboutSectionProps {
  title: string;
  subTitle: string;
  description: string[];
  images: string[];
  link: {
    label: string;
    href: string;
  };
}

export interface OnlinePlatformsPropsTypes {
  title?: string;
  defaultPadding?: boolean;
  cards: {
    icon: JSX.Element;
    src: string;
    partnerName: string;
    ratings: string;
  }[];
}


export interface RoomsProps {
  bg?: string;
  title: string;
  subTitle: string;
  description?: string;
  cards: {
    textColor?: string;
    title: string;
    description?: string;
    images: string[];
    noOfBadRooms?: string;
    price?: string;
    listOfIcons: {
      icons: JSX.Element;
      title: string;
    }[];
    link?: {
      label: string;
      url: string;
    };
  }[];
  link?: {
    label: string;
    url: string;
  };
}

export interface FacilitiesProps {
  title: string;
  subTitle: string;
  cards: {
    title: string;
    description?: string;
    src: string;
  }[];
  link: {
    label: string;
    url: string;
  };
}

export interface CafeAndRestaurantsProps {
  title: string;
  subTitle: string;
  description?: string;
  images: string[];
  link: {
    label: string;
    url: string;
  };
}

export interface TestimonialsProps {
  title: string;
  subTitle: string;
  image: string;
  cards: {
    name: string;
    comment: string;
  }[];
}

export interface BanquetsProps {
  title: string;
  subTitle: string;
  cards: {
    title: string;
    description: string;
    src: string;
  }[];
  link: {
    label: string;
    url: string;
  };
}

export interface OurPackagesPropsTypes {
  title: string;
  description: string;
  cards: {
    packageType: string;
    days: string;
    description: string;
    src: string;
    link: {
      href: string;
      label: string;
    };
  }[];
}
