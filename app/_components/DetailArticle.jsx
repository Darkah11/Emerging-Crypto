import Link from "next/link";
import React from "react";

export default function DetailArticle() {
  const items = [
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: "/t1.jpg",
    },
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: "/t2.jpg",
    },
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: "/t3.jpg",
    },
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: "/t4.jpg",
    },
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: "/t5.jpg",
    },
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: "/t6.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-10
     md:grid md:grid-cols-2 md:gap-x-3 md:place-content-center
     lg:grid-cols-3">
      {items &&
        items.map((item, index) => (
          <div key={index} className="max-w-[450px] md:mx-auto">
            <Link href={"/"}>
              <img
                src={item.img}
                className=" min-w-full h-[300px] object-cover"
              />
            </Link>
            <div className=" text-black mt-3">
              <Link
                href={"/"}
                className=" text-xl font-bold hover:text-primary"
              >
                {item.title}
              </Link>
              <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                Crypto News, Defi, Crypto and Politics
              </p>
              <p className=" text-gray-400 font-medium text-sm mt-3">
                {" "}
                <span className=" text-black font-semibold">Editor</span> -
                {item.date}
              </p>
              <p className=" mt-3">{item.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
