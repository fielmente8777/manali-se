import { contact } from "@/utils/constent";
import {
  FillCallIcon,
  FillFaceBookIcon,
  FillInstaIcon,
  FillLocationIcon,
  FillMailIcon,
} from "@/utils/icons";

interface FooterData {
  logo: string;
  description: string;
  lists: {
    title?: string;
    links: {
      title?: string;
      icon: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/logo-1.png",
  description:
    "At Manali Se, follow the mountain’s rhythm — a calm pine-side escape to simply breathe.",
  lists: [
    {
      title: "Contact Us",
      links: [
        {
          icon: <FillLocationIcon />,
          label: "Address: " + contact.address,
          href: contact.addressLink,
        },
        {
          title: "Hindi: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
        },
        {
          title: "English: ",
          icon: <FillCallIcon />,
          label: contact.phone[1],
          href: "tel:" + contact.phone[1],
        },
        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
    {
      links: [
        {
          icon: <FillFaceBookIcon />,
          label: "Facebook",
          href: contact.socialMedia.facebook,
        },
        {
          icon: <FillInstaIcon />,
          label: "Instagram",
          href: contact.socialMedia.instagram,
        },
      ],
    },
  ],
};
export const footerData2: FooterData = {
  logo: "/soul-care/logo.webp",
  description:
    "Soulcare — your sanctuary for deep rest, renewal, and inner healing.",
  lists: [
    {
      title: "Contact Us",
      links: [
        {
          title: "Address: ",
          icon: <FillLocationIcon />,
          label: contact.address,
          href: contact.addressLink,
        },
        {
          title: "Phone: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
        },
        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
    {
      links: [
        {
          icon: <FillFaceBookIcon />,
          label: "Facebook",
          href: contact.socialMedia.facebook,
        },
        {
          icon: <FillInstaIcon />,
          label: "Instagram",
          href: contact.socialMedia.instagram,
        },
      ],
    },
  ],
};
