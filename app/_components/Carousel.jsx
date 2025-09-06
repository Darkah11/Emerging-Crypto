"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

const images = [
  { id: 11, src: "/sui.jpg", alt: "top news" },
  { id: 12, src: "/pumpkin.jpg", alt: "top news" },
  { id: 13, src: "/trading.jpg", alt: "top news" },
];

export default function LibraryCarousel() {
  return (
    <>
      <div className="relative w-full lg:hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showArrows={false}
          showThumbs={false}
        >
          {images.map((image) => (
            <Link href={""} key={image.id} className=" group">
              <div className="h-[350px] w-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  className=" px-3 text-white absolute bg-black 
            bg-opacity-30 h-full w-full flex flex-col justify-end text-left pb-16"
                >
                  <h3 className=" text-xl font-medium max-w-[280px] group-hover:text-primary">
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </h3>
                  <p className=" text-gray-200 text-sm mt-2">
                    {" "}
                    <span className=" font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <div className=" grid-container hidden lg:grid lg:h-[550px]">
       
        {images.map((image, index) => (
          <Link href={`/${image.id}`} key={image.id} className={` group grid-child${index}`}>
            <div className="h-[350px] lg:h-full  w-full relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                className=" px-3 lg:px-8 text-white absolute bg-black 
            bg-opacity-30 h-full w-full flex flex-col justify-end text-left pb-16"
              >
                <h3 className=" text-2xl  font-medium max-w-[370px] lg:max-w-none group-hover:text-primary">
                  Top Projects on SUI - Your ultimate guide to the SUI...
                </h3>
                <p className=" text-gray-200 text-sm mt-2">
                  {" "}
                  <span className=" font-semibold">Editor</span> - May 12, 2025
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
