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
import { useEffect, useState } from "react";
import { getAllPosts } from "@/utils/supabase";

export default function Aside() {
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllPosts();

        const articles = posts.slice(0, 6);
        setPosts(articles);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        // setLoading(false);
      }
    };

    fetchPosts();
  }, []);
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
        {posts.length !== 0 ? (
          <div className=" mt-8 flex flex-col gap-y-5">
            {posts.map((item, index) => (
              <Link key={index} href={`/${item.id}-${item.slug}`} className="group">
                <div className=" flex items-center gap-x-2 h-[85px]">
                  <div>
                    <img
                      src={item.image_url}
                      width={100}
                      height={100}
                      alt="image"
                      className=" object-cover h-[85px] w-[120px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <h3 className=" font-semibold text-[17px] group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className=" mt-1 text-sm">
                      {new Date(item.created_at).toDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className=" text-2xl pt-5">No Articles</p>
        )}
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
              <Link href={`/crypto/${crypto.id}`} key={index}>
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
