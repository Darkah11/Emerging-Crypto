"use client";
import useFetch from "@/components/useFetch";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import rise from "@/public/rise.png";
import fall from "@/public/fall.png";

export default function CryptoSlide() {
  const marqueeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const router = useRouter();
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const { data, loading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order&per_page=100&page=1"
  );
  console.log(data);
  const onMouseDown = (e) => {
    setIsDragging(true);
    // Pause the CSS animation
    marqueeRef.current
      .querySelector(".marquee-content")
      .classList.add("paused");
    setStartX(e.pageX - marqueeRef.current.offsetLeft);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    // Resume the CSS animation if not dragging
    if (isDragging) {
      setIsDragging(false);
      marqueeRef.current
        .querySelector(".marquee-content")
        .classList.remove("paused");
    }
  };

  const onMouseUp = () => {
    // Resume the CSS animation
    setIsDragging(false);
    marqueeRef.current
      .querySelector(".marquee-content")
      .classList.remove("paused");
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = x - startX;
    marqueeRef.current.scrollLeft = scrollLeft - walk;

    const { scrollLeft: currentScroll, scrollWidth } = marqueeRef.current;
    const scrollableWidth = scrollWidth / 2;

    // Backward scroll (dragging right)
    if (currentScroll <= 0) {
      marqueeRef.current.scrollLeft += scrollableWidth;
    }
    // Forward scroll (dragging left)
    if (currentScroll >= scrollableWidth) {
      marqueeRef.current.scrollLeft -= scrollableWidth;
    }
  };

  return (
    <div
      className="marquee-container"
      ref={marqueeRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <div className="marquee-content">
        {!loading &&
          data.map((crypto, index) => (
            <Link href={`/crypto/${crypto.id}`} key={index}>
              <div className="crypto-item border ">
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
                            : crypto.price_change_percentage_24h.toFixed(2) +
                              "%"}
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
