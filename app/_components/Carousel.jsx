"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

const images = [
  { id: 1, src: "/sui.jpg", alt: "top news" },
  { id: 2, src: "/pumpkin.jpg", alt: "top news" },
  { id: 3, src: "/trading.jpg", alt: "top news" },
];

export default function LibraryCarousel() {
  return (
    <>
      <div className="relative w-full">
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
                  <h3 className=" text-2xl font-medium max-w-[370px] group-hover:text-primary">
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
      {/* <div className="grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 hidden lg:grid">
       
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
                <h3 className=" text-2xl font-medium max-w-[370px] group-hover:text-primary">
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
      </div> */}
    </>
  );
}
