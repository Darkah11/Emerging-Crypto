import Image from "next/image";
import Header from "./_components/Header";
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
import Button from "@/components/button";

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
        <section className=" px-5 py-10">
          <div>
            <div>
              <span className=" text-primary text-sm">Headlines</span>
              <h2 className=" text-4xl">Trending News</h2>
            </div>
            <div className=" mt-8 flex flex-col items-center gap-y-5">
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
              <h2 className=" text-4xl">Latest Articles</h2>
            </div>
            <div className=" mt-8 flex flex-col gap-y-5">
              <div className=" flex items-center gap-x-2 h-[85px]">
                <div>
                  <Image src={t1} className=" object-cover h-[85px] w-[120px]" />
                </div>
                <div className=" flex-1">
                  <h3 className=" font-semibold text-[17px]">How to Spot a Crypto Scam: Red Flags Every Investor...</h3>
                  <p className=" mt-1 text-sm"><span className=" text-primary font-medium">Editor</span> - May 12, 2025</p>
                </div>
              </div>
              <div className=" flex items-center gap-x-2 h-[85px]">
                <div>
                  <Image src={t2} className=" object-cover h-[85px] w-[120px]" />
                </div>
                <div className=" flex-1">
                  <h3 className=" font-semibold text-[17px]">How to Spot a Crypto Scam: Red Flags Every Investor...</h3>
                  <p className=" mt-1 text-sm"><span className=" text-primary font-medium">Editor</span> - May 12, 2025</p>
                </div>
              </div>
              <div className=" flex items-center gap-x-2 h-[85px]">
                <div>
                  <Image src={t3} className=" object-cover h-[85px] w-[120px]" />
                </div>
                <div className=" flex-1">
                  <h3 className=" font-semibold text-[17px]">How to Spot a Crypto Scam: Red Flags Every Investor...</h3>
                  <p className=" mt-1 text-sm"><span className=" text-primary font-medium">Editor</span> - May 12, 2025</p>
                </div>
              </div>
              <div className=" flex items-center gap-x-2 h-[85px]">
                <div>
                  <Image src={t4} className=" object-cover h-[85px] w-[120px]" />
                </div>
                <div className=" flex-1">
                  <h3 className=" font-semibold text-[17px]">How to Spot a Crypto Scam: Red Flags Every Investor...</h3>
                  <p className=" mt-1 text-sm"><span className=" text-primary font-medium">Editor</span> - May 12, 2025</p>
                </div>
              </div>
              <div className=" flex items-center gap-x-2 h-[85px]">
                <div>
                  <Image src={t5} className=" object-cover h-[85px] w-[120px]" />
                </div>
                <div className=" flex-1">
                  <h3 className=" font-semibold text-[17px]">How to Spot a Crypto Scam: Red Flags Every Investor...</h3>
                  <p className=" mt-1 text-sm"><span className=" text-primary font-medium">Editor</span> - May 12, 2025</p>
                </div>
              </div>
              <div className=" flex items-center gap-x-2 h-[85px]">
                <div>
                  <Image src={t6} className=" object-cover h-[85px] w-[120px]" />
                </div>
                <div className=" flex-1">
                  <h3 className=" font-semibold text-[17px]">How to Spot a Crypto Scam: Red Flags Every Investor...</h3>
                  <p className=" mt-1 text-sm"><span className=" text-primary font-medium">Editor</span> - May 12, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
