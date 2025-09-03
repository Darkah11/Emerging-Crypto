"use client";
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
import useFetch from "@/components/useFetch";
import Link from "next/link";
import rise from "@/public/rise.png";
import fall from "@/public/fall.png";

export default function Aside() {
  const { data, loading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order&per_page=10&page=1"
  );
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return (
    <div>
      <div className=" py-8 max-w-[500px]">
        <div>
          {/* <span className=" text-primary text-sm">Breaking</span> */}
          <h2 className=" text-2xl border-b border-gray-300 pb-3">
            Latest News
          </h2>
        </div>
        <div className=" mt-8 flex flex-col gap-y-5">
          <Link href={""} className="group">
            <div className=" flex items-center gap-x-2 h-[85px]">
              <div>
                <Image src={t1} className=" object-cover h-[85px] w-[120px]" />
              </div>
              <div className=" flex-1">
                <h3 className=" font-semibold text-[17px] group-hover:text-primary">
                  How to Spot a Crypto Scam: Red Flags Every Investor...
                </h3>
                <p className=" mt-1 text-sm">
                  <span className=" text-gray-500 font-bold">Editor</span> -
                  May 12, 2025
                </p>
              </div>
            </div>
          </Link>
          <Link href={""} className="group">
            <div className=" flex items-center gap-x-2 h-[85px]">
              <div>
                <Image src={t2} className=" object-cover h-[85px] w-[120px]" />
              </div>
              <div className=" flex-1">
                <h3 className=" font-semibold text-[17px] group-hover:text-primary">
                  How to Spot a Crypto Scam: Red Flags Every Investor...
                </h3>
                <p className=" mt-1 text-sm">
                  <span className=" text-gray-500 font-bold">Editor</span> -
                  May 12, 2025
                </p>
              </div>
            </div>
          </Link>
          <Link href={""} className="group">
            <div className=" flex items-center gap-x-2 h-[85px]">
              <div>
                <Image src={t3} className=" object-cover h-[85px] w-[120px]" />
              </div>
              <div className=" flex-1">
                <h3 className=" font-semibold text-[17px] group-hover:text-primary">
                  How to Spot a Crypto Scam: Red Flags Every Investor...
                </h3>
                <p className=" mt-1 text-sm">
                  <span className=" text-gray-500 font-bold">Editor</span> -
                  May 12, 2025
                </p>
              </div>
            </div>
          </Link>
          <Link href={""} className="group">
            <div className=" flex items-center gap-x-2 h-[85px]">
              <div>
                <Image src={t4} className=" object-cover h-[85px] w-[120px]" />
              </div>
              <div className=" flex-1">
                <h3 className=" font-semibold text-[17px] group-hover:text-primary">
                  How to Spot a Crypto Scam: Red Flags Every Investor...
                </h3>
                <p className=" mt-1 text-sm">
                  <span className=" text-gray-500 font-bold">Editor</span> -
                  May 12, 2025
                </p>
              </div>
            </div>
          </Link>
          <Link href={""} className="group">
            <div className=" flex items-center gap-x-2 h-[85px]">
              <div>
                <Image src={t5} className=" object-cover h-[85px] w-[120px]" />
              </div>
              <div className=" flex-1">
                <h3 className=" font-semibold text-[17px] group-hover:text-primary">
                  How to Spot a Crypto Scam: Red Flags Every Investor...
                </h3>
                <p className=" mt-1 text-sm">
                  <span className=" text-gray-500 font-bold">Editor</span> -
                  May 12, 2025
                </p>
              </div>
            </div>
          </Link>
          <Link href={""} className="group">
            <div className=" flex items-center gap-x-2 h-[85px]">
              <div>
                <Image src={t6} className=" object-cover h-[85px] w-[120px]" />
              </div>
              <div className=" flex-1">
                <h3 className=" font-semibold text-[17px] group-hover:text-primary">
                  How to Spot a Crypto Scam: Red Flags Every Investor...
                </h3>
                <p className=" mt-1 text-sm">
                  <span className=" text-gray-500 font-bold">Editor</span> -
                  May 12, 2025
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className=" py-8 max-w-[500px]">
        <div>
          {/* <span className=" text-primary text-sm">Breaking</span> */}
          <h2 className=" text-2xl border-b border-gray-300 pb-3">
            Top Cryptocurrencies
          </h2>
        </div>
        <div className=" mt-8 flex flex-col">
          {!loading &&
            data.map((crypto, index) => (
              <Link href={""} key={index}>
                <div className=" border-b flex items-center justify-between py-3">
                  <div className=" flex items-center gap-x-3">
                    <img
                      src={crypto.image}
                      alt={crypto.name + "image"}
                      className=" w-7 h7 object-cover"
                    />
                    <div>
                      <p className="font-semibold"> {crypto.name}</p>
                      <p className=" uppercase font-semibold text-gray-600">
                        {crypto.symbol}
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center gap-x-2">
                    <span className=" font-bold text-sm">
                      ${crypto.current_price.toLocaleString("en", options)}
                    </span>
                    <div className=" flex items-center">
                      <Image
                        src={
                          crypto.price_change_percentage_24h < 0 ? fall : rise
                        }
                        className=" w-3 h-3 "
                        alt=" arrow indicator image"
                      />
                      <p className=" text-xs">
                        {" "}
                        {crypto.price_change_percentage_24h == null
                          ? "0%"
                          : crypto.price_change_percentage_24h < 0
                          ? crypto.price_change_percentage_24h
                              .toFixed(2)
                              .substring(1) + "%"
                          : crypto.price_change_percentage_24h.toFixed(2) + "%"}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
