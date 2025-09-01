"use client";
import useFetch from "@/components/useFetch";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import rise from "@/public/rise.png";
import fall from "@/public/fall.png";

export default function CryptoSlide() {
  const router = useRouter();
  const options = { 
  minimumFractionDigits: 2,
  maximumFractionDigits: 2 
};
  const { data, loading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order&per_page=100&page=1"
  );
  console.log(data);

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {!loading &&
          data.map((crypto, index) => (
            <Link href={'/'} key={index}>
            <div className="crypto-item border py-5">
              <div className=" flex items-center gap-x-2">
                <div>
                  <img
                    src={crypto.image}
                    alt={crypto.name + "image"}
                    className=" w-7 h7 object-cover"
                  />
                </div>
                <div className="price item">
                  <p className=" text-sm">
                    {crypto.name}{" "}
                    <span className=" uppercase font-semibold">{`(${crypto.symbol})`}</span>
                  </p>
                  <div className=" flex items-center gap-x-2">
                    <span className=" font-bold text-sm">
                      ${crypto.current_price.toLocaleString('en', options)}
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
                      {crypto.price_change_percentage_24h < 0 ? crypto.price_change_percentage_24h.toFixed(2).substring(1) + "%" : crypto.price_change_percentage_24h.toFixed(2) + "%"}
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
