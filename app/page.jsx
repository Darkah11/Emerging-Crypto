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
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Newsletter from "./_components/Newsletter";
import Image from "next/image";
import LibraryCarousel from "./_components/Carousel";
import DetailArticle from "./_components/DetailArticle";
import PreviewArticle from "./_components/PreviewArticle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* <section className=" px-5 py-10">
          <div className=" flex flex-col items-center">
            <div>
              <Image src={heroImg} />
            </div>
            <div className=" mt-12">
              <h1 className="  text-5xl font-bold uppercase">
                Emerging Crypto
              </h1>
              <p className=" py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                vel numquam voluptatem non sit.
              </p>
              <Button text={"Contact Us"} style={" mt-5 "} />
            </div>
          </div>
        </section> */}
        <section className=" lg:px-12 ">
          <LibraryCarousel />
        </section>
        {/* <section className=" py-10">
          <div>
            <div className=" px-5">
              <span className=" text-primary text-sm">Headlines</span>
              <h2 className=" text-4xl">Trending News</h2>
            </div>
            <div className=" mt-8 flex flex-col items-center gap-y-2">
              <div className=" relative h-[210px]">
                <div className=" px-3 pb-5 text-white absolute bg-black bg-opacity-30 h-full w-full flex flex-col justify-end">
                  <h3 className=" text-xl font-medium">
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </h3>
                  <p className=" text-gray-200 text-sm mt-2">
                    {" "}
                    <span className=" font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                </div>
                <Image src={sui} className=" min-w-full h-full object-cover" />
              </div>
              <div className=" relative h-[210px]">
                <div className=" px-3 pb-5 text-white absolute bg-black bg-opacity-30 h-full w-full flex flex-col justify-end">
                  <h3 className=" text-xl font-medium">
                    The Pumpkin Token - Best Algorithmic Trading Platform on SUI
                  </h3>
                  <p className=" text-gray-200 text-sm mt-2">
                    {" "}
                    <span className=" font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                </div>
                <Image
                  src={pumpkin}
                  className=" min-w-full h-full object-cover"
                />
              </div>
              <div className=" relative h-[210px]">
                <div className=" px-3 pb-5 text-white absolute bg-black bg-opacity-30 h-full w-full flex flex-col justify-end">
                  <h3 className=" text-xl font-medium">
                    What Is Algorithmic Trading? A Complete Guide For Beginners
                  </h3>
                  <p className=" text-gray-200 text-sm mt-2">
                    {" "}
                    <span className=" font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                </div>
                <Image
                  src={trading}
                  className=" min-w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section> */}
        <section className=" px-5 py-10 lg:px-12">
          <div>
            <div className=" mb-5">
              <span className=" text-primary text-sm">Breaking</span>
              <h2 className=" text-4xl">Latest News</h2>
            </div>
            <DetailArticle />
          </div>
        </section>
        <section className=" px-5 py-10 lg:px-12">
          <div className=" flex flex-col gap-y-24 md:flex-row md:gap-x-5 lg:gap-x-16">
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  New Tokens
                </h2>
              </div>
              <PreviewArticle />
              <div className=" mt-4">
                <Link href={"/new-tokens"}>
                  <button className="border border-primary text-primary px-5 py-2">
                    See More
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  Top Projects
                </h2>
              </div>
              <PreviewArticle />
               <div className=" mt-4">
                <Link href={"/top-projects"}>
                  <button className="border border-primary text-primary px-5 py-2">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className=" px-5 py-10 lg:px-12">
          <div className=" flex flex-col gap-y-24 md:flex-row md:gap-x-5 lg:gap-x-16">
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  Crypto News
                </h2>
              </div>
              <PreviewArticle />
               <div className=" mt-4">
                <Link href={"/crypto-news"}>
                  <button className="border border-primary text-primary px-5 py-2">
                    See More
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  Politics and Crypto
                </h2>
              </div>
              <PreviewArticle />
               <div className=" mt-4">
                <Link href={"/crypto-news"}>
                  <button className="border border-primary text-primary px-5 py-2">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className=" px-5 py-10 lg:px-12">
          <div className=" flex flex-col gap-y-24 md:flex-row md:gap-x-5 lg:gap-x-16">
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  New Tech
                </h2>
              </div>
              <PreviewArticle />
               <div className=" mt-4">
                <Link href={"/new-tech"}>
                  <button className="border border-primary text-primary px-5 py-2">
                    See More
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  Defi
                </h2>
              </div>
              <PreviewArticle />
               <div className=" mt-4">
                <Link href={"/defi"}>
                  <button className="border border-primary text-primary px-5 py-2">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className=" px-5 py-10 lg:px-12">
          <div>
            <div>
              {/* <span className=" text-primary text-sm">Breaking</span> */}
              <h2 className=" text-4xl border-b border-gray-300 pb-3">
                Events
              </h2>
            </div>
            <div className=" mt-8 flex flex-col items-center gap-y-2 md:grid grid-cols-3 md:gap-x-2 lg:gap-x-5">
              <div className=" relative h-[210px]">
                <div className=" px-3 pb-5 text-white absolute bg-black bg-opacity-30 h-full w-full flex flex-col justify-end">
                  <h3 className=" text-xl font-medium">
                    Fintech Week London 2025
                  </h3>
                  <p className=" text-gray-200 text-sm mt-2">
                    {" "}
                    <span className=" font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                </div>
                <Image src={sui} className=" min-w-full h-full object-cover" />
              </div>
              <div className=" relative h-[210px]">
                <div className=" px-3 pb-5 text-white absolute bg-black bg-opacity-30 h-full w-full flex flex-col justify-end">
                  <h3 className=" text-xl font-medium">
                    Fintech Week London 2025
                  </h3>
                  <p className=" text-gray-200 text-sm mt-2">
                    {" "}
                    <span className=" font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                </div>
                <Image
                  src={pumpkin}
                  className=" min-w-full h-full object-cover"
                />
              </div>
              <div className=" relative h-[210px]">
                <div className=" px-3 pb-5 text-white absolute bg-black bg-opacity-30 h-full w-full flex flex-col justify-end">
                  <h3 className=" text-xl font-medium">
                    Fintech Week London 2025
                  </h3>
                  <p className=" text-gray-200 text-sm mt-2">
                    {" "}
                    <span className=" font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                </div>
                <Image
                  src={trading}
                  className=" min-w-full h-full object-cover"
                />
              </div>
            </div>
             <div className=" mt-4 flex justify-center items-center">
                <Link href={"/events"}>
                  <button className="border border-primary text-primary px-5 py-2">
                    See More
                  </button>
                </Link>
              </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
