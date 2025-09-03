import Image from "next/image";
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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className=" px-5 py-10">
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
        </section>
        <section className=" py-10">
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
        </section>
        <section className=" px-5 py-10">
          <div>
            <div>
              <span className=" text-primary text-sm">Breaking</span>
              <h2 className=" text-4xl">Latest News</h2>
            </div>
            <div className=" mt-8 flex flex-col items-center gap-y-10">
              <div className="">
                <Image src={sui} className=" min-w-full h-[200px] object-cover" />
                <div className=" text-black mt-3">
                  <h3 className=" text-xl font-bold">
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </h3>
                  <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                   Crypto News, Defi, Crypto and Politics
                  </p>
                  <p className=" text-gray-400 font-medium text-sm mt-3">
                    {" "}
                    <span className=" text-black font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                  <p className=" mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores ut, unde consequatur fugit voluptates, impedit,
                    provident quam voluptatum dolore officia voluptatem nesciunt
                  </p>
                </div>
              </div>
              <div className="">
                <Image src={pumpkin} className=" min-w-full h-[200px] object-cover" />
                <div className=" text-black mt-3">
                  <h3 className=" text-xl font-bold">
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </h3>
                  <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                   Crypto News, Defi, Crypto and Politics
                  </p>
                  <p className=" text-gray-400 font-medium text-sm mt-3">
                    {" "}
                    <span className=" text-black font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                  <p className=" mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores ut, unde consequatur fugit voluptates, impedit,
                    provident quam voluptatum dolore officia voluptatem nesciunt
                  </p>
                </div>
              </div>
              <div className="">
                <Image src={t4} className=" min-w-full h-[200px] object-cover" />
                <div className=" text-black mt-3">
                  <h3 className=" text-xl font-bold">
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </h3>
                  <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                   Crypto News, Defi, Crypto and Politics
                  </p>
                  <p className=" text-gray-400 font-medium text-sm mt-3">
                    {" "}
                    <span className=" text-black font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                  <p className=" mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores ut, unde consequatur fugit voluptates, impedit,
                    provident quam voluptatum dolore officia voluptatem nesciunt
                  </p>
                </div>
              </div>
              <div className="">
                <Image src={t1} className=" min-w-full h-[200px] object-cover" />
                <div className=" text-black mt-3">
                  <h3 className=" text-xl font-bold">
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </h3>
                  <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                   Crypto News, Defi, Crypto and Politics
                  </p>
                  <p className=" text-gray-400 font-medium text-sm mt-3">
                    {" "}
                    <span className=" text-black font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                  <p className=" mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores ut, unde consequatur fugit voluptates, impedit,
                    provident quam voluptatum dolore officia voluptatem nesciunt
                  </p>
                </div>
              </div>
              <div className="">
                <Image src={t3} className=" min-w-full h-[200px] object-cover" />
                <div className=" text-black mt-3">
                  <h3 className=" text-xl font-bold">
                    Top Projects on SUI - Your ultimate guide to the SUI...
                  </h3>
                  <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                   Crypto News, Defi, Crypto and Politics
                  </p>
                  <p className=" text-gray-400 font-medium text-sm mt-3">
                    {" "}
                    <span className=" text-black font-semibold">Editor</span> - May 12,
                    2025
                  </p>
                  <p className=" mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores ut, unde consequatur fugit voluptates, impedit,
                    provident quam voluptatum dolore officia voluptatem nesciunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" px-5 py-10">
          <div className=" flex flex-col gap-y-24">
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  New Tokens
                </h2>
              </div>
              <div className=" mt-8 flex flex-col gap-y-5">
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t1}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t2}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t3}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t4}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t5}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t6}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  Top Projects
                </h2>
              </div>
              <div className=" mt-8 flex flex-col gap-y-5">
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t1}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t2}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t3}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t4}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t5}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t6}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" px-5 py-10">
          <div className=" flex flex-col gap-y-24">
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  Crypto News
                </h2>
              </div>
              <div className=" mt-8 flex flex-col gap-y-5">
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t1}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t2}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t3}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t4}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t5}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t6}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  Politics and Crypto
                </h2>
              </div>
              <div className=" mt-8 flex flex-col gap-y-5">
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t1}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t2}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t3}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t4}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t5}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t6}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" px-5 py-10">
          <div className=" flex flex-col gap-y-24">
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  New Tech
                </h2>
              </div>
              <div className=" mt-8 flex flex-col gap-y-5">
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t1}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t2}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t3}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t4}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t5}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t6}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                {/* <span className=" text-primary text-sm">Breaking</span> */}
                <h2 className=" text-4xl border-b border-gray-300 pb-3">
                  Defi
                </h2>
              </div>
              <div className=" mt-8 flex flex-col gap-y-5">
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t1}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t2}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t3}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t4}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t5}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <Image
                      src={t6}
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px]">
                      How to Spot a Crypto Scam: Red Flags Every Investor...
                    </h3>
                    <p className=" mt-1 text-sm">
                      <span className=" text-primary font-medium">Editor</span>{" "}
                      - May 12, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" px-5 py-10">
          <div>
            <div>
              {/* <span className=" text-primary text-sm">Breaking</span> */}
              <h2 className=" text-4xl border-b border-gray-300 pb-3">
                Upcoming Events
              </h2>
            </div>
            <div className=" mt-8 flex flex-col items-center gap-y-2">
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
          </div>
        </section>
        <section className=" bg- px-5 py-10">
          <div>
            <h2 className=" text-3xl text-center font-semibold">
              Subscribe To Our Newsletters
            </h2>
            <div className="mt-5">
              <input
                type="email"
                placeholder="E-mail address"
                className=" border border-dark block w-full outline-none rounded-sm px-3 h-[45px]"
              />
              <button
                type="submit"
                className=" bg-primary uppercase font-medium text-dark mt-3 block w-full outline-none rounded-sm px-3 h-[45px]"
              >
                subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
