"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGift } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  // const currentMonth = new Date().toLocaleString(undefined, { month: "long" });

  // const text = `limited time discount upto 20% off this ${currentMonth}.`;
  const text = `Grab Upto 10% Discount On Instant Bookings`;

  // Auto-close panel after 10 seconds (show tab only)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed left-0 top-[30%] transform -translate-y-[30%] z-50">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={handleToggle}
        className="bg-primary border border-white relative z-40 cursor-pointer flex items-center gap-6 text-white font-semibold tracking-wider p-2 shadow-lg transition-all duration-300"
        style={{ writingMode: "vertical-rl" }}
      >
        {isOpen ? <MdClose size={24} /> : <FaGift size={24} />}
      </button>

      {/* Slide Panel */}
      <div
        className={`
    absolute top-0 h-full border border-white  z-20
    transition-all duration-700 ease-in-out
    ${isOpen ? "translate-x-0 visible" : "-translate-x-[250px] invisible"}
  `}
      >
        <div className="flex flex-col items-center bg-secondary/70 backdrop-blur-md justify-center w-[250px] gap-4 px-4 py-5">
          <div className="relative w-32 aspect-[4/2.1]">
            <Image
              src={"/logo-1.png"}
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-white text-center">{text}</p>

          <Link
            href="https://wa.me/+919446933311?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-primary rounded-full px-3 py-2 gap-2 text-sm text-white uppercase"
          >
            Book Now
            {/* <ArrowUpIcons /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
