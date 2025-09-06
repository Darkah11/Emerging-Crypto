import Image from "next/image";
import Header from "../_components/Header";
import heroImg from "@/public/hero-image.png";
import sui from "@/public/sui.jpg";
import pumpkin from "@/public/pumpkin.jpg";
import trading from "@/public/trading.jpg";
import t1 from "@/public/t1.jpg";
import t2 from "@/public/t2.jpg";
import t3 from "@/public/t3.jpg";
import t4 from "@/public/t4.jpg";
import t5 from "@/public/t5.jpg";
import t6 from "@/public/t6.jpg";
import Button from "@/components/Button";
import Footer from "../_components/Footer";
import Link from "next/link";
import Aside from "../_components/Aside";
import Pagination from "../_components/Pagination";
import Newsletter from "../_components/Newsletter";

export const metadata = {
  title: "Top Projects",
};

export default function TopProjects() {
  return (
    <>
      <Header />
      <main>
        <div className=" bg-dark text-white px-5 py-12 lg:px-12 xl:px-24">
          <h2 className=" text-3xl font-semibold md:text-4xl">Top Projects</h2>
          <p className=" mt-2 max-w-[600px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            aspernatur deserunt voluptas possimus soluta ipsam id, nulla nihil
            modi porro.
          </p>
        </div>
        <section className=" px-5 lg:px-12 xl:px-24 ">
          <div className=" md:flex md:gap-x-5">
            {/* <div className=" py-8 flex flex-col items-center gap-y-10 md:w-1/2">
              <div className="max-w-[450px]">
                <Link href={"/"}>
                  <Image
                    src={sui}
                    className=" min-w-full h-[300px] object-cover"
                  />
                </Link>
                <div className=" text-black mt-3">
                  <Link
                    href={"/"}
                    className=" text-xl font-bold hover:text-primary"
                  >
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </Link>
                  <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                    Crypto News, Defi, Crypto and Politics
                  </p>
                  <p className=" text-gray-400 font-medium text-sm mt-3">
                    {" "}
                    <span className=" text-black font-semibold">Editor</span> -
                    May 12, 2025
                  </p>
                  <p className=" mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores ut, unde consequatur fugit voluptates, impedit,
                    provident quam voluptatum dolore officia voluptatem nesciunt
                  </p>
                </div>
              </div>
              <div className="max-w-[450px]">
                <Link href={"/"}>
                  <Image
                    src={pumpkin}
                    className=" min-w-full h-[300px] object-cover"
                  />
                </Link>
                <div className=" text-black mt-3">
                  <Link
                    href={"/"}
                    className=" text-xl font-bold hover:text-primary"
                  >
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </Link>
                  <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                    Crypto News, Defi, Crypto and Politics
                  </p>
                  <p className=" text-gray-400 font-medium text-sm mt-3">
                    {" "}
                    <span className=" text-black font-semibold">Editor</span> -
                    May 12, 2025
                  </p>
                  <p className=" mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores ut, unde consequatur fugit voluptates, impedit,
                    provident quam voluptatum dolore officia voluptatem nesciunt
                  </p>
                </div>
              </div>
              <div className="max-w-[450px]">
                <Link href={"/"}>
                  <Image
                    src={t4}
                    className=" min-w-full h-[300px] object-cover"
                  />
                </Link>
                <div className=" text-black mt-3">
                  <Link
                    href={"/"}
                    className=" text-xl font-bold hover:text-primary"
                  >
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </Link>
                  <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                    Crypto News, Defi, Crypto and Politics
                  </p>
                  <p className=" text-gray-400 font-medium text-sm mt-3">
                    {" "}
                    <span className=" text-black font-semibold">Editor</span> -
                    May 12, 2025
                  </p>
                  <p className=" mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores ut, unde consequatur fugit voluptates, impedit,
                    provident quam voluptatum dolore officia voluptatem nesciunt
                  </p>
                </div>
              </div>
              <div className="max-w-[450px]">
                <Link href={"/"}>
                  <Image
                    src={t1}
                    className=" min-w-full h-[300px] object-cover"
                  />
                </Link>
                <div className=" text-black mt-3">
                  <Link
                    href={"/"}
                    className=" text-xl font-bold hover:text-primary"
                  >
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </Link>
                  <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                    Crypto News, Defi, Crypto and Politics
                  </p>
                  <p className=" text-gray-400 font-medium text-sm mt-3">
                    {" "}
                    <span className=" text-black font-semibold">Editor</span> -
                    May 12, 2025
                  </p>
                  <p className=" mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores ut, unde consequatur fugit voluptates, impedit,
                    provident quam voluptatum dolore officia voluptatem nesciunt
                  </p>
                </div>
              </div>
              <div className=" max-w-[450px]">
                <Link href={"/"}>
                  <Image src={t3} className=" w-full h-[300px] object-cover" />
                </Link>
                <div className=" text-black mt-3">
                  <Link
                    href={"/"}
                    className=" text-xl font-bold hover:text-primary"
                  >
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </Link>
                  <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                    Crypto News, Defi, Crypto and Politics
                  </p>
                  <p className=" text-gray-400 font-medium text-sm mt-3">
                    {" "}
                    <span className=" text-black font-semibold">Editor</span> -
                    May 12, 2025
                  </p>
                  <p className=" mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores ut, unde consequatur fugit voluptates, impedit,
                    provident quam voluptatum dolore officia voluptatem nesciunt
                  </p>
                </div>
              </div>
            </div> */}
            <div className=" py-8 md:w-1/2">
              <Pagination itemsPerPage={5}/>
            </div>
            <div className=" md:w-1/2">
              <Aside />
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
