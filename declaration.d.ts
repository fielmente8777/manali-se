// declaration.d.ts
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "swiper/css" {
  const content: { [className: string]: string };
  export default content;
}
declare module "swiper/css/*" {
  const content: { [className: string]: string };
  export default content;
}
// declare module "swiper/react" {
//   import { Swiper , SwiperOptions } from "swiper/types";
//   import React from "react";

//   export interface SwiperProps extends SwiperOptions {
//     children: React.ReactNode;
//     className?: string;
//   }

//   export const Swiper: React.FC<SwiperProps>;
//   export const SwiperSlide: React.FC<{
//     children: React.ReactNode;
//     className?: string;
//   }>;
// }
