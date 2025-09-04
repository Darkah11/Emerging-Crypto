"use client"
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import t1 from "@/public/t1.jpg";
// import t2 from "@/public/t2.jpg";
import t3 from "@/public/t3.jpg";
import t5 from "@/public/t5.jpg";
import t6 from "@/public/t6.jpg";
import Link from "next/link";
import Image from "next/image";

export default function Pagination({ itemsPerPage }) {
  const items = [
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: '/t1.jpg',
    },
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: '/t2.jpg',
    },
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: '/t3.jpg',
    },
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: '/t4.jpg',
    },
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: '/t5.jpg',
    },
    {
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Quam quia molestiae corrupti beatae vero architecto 
       praesentium impedit harum aut aliquid.`,
      title: "Top Projects on SUI - Your ultimate guide to the SUI...",
      categories: ["Crypto News", "Defi", "Crypto and Politics"],
      date: "May 12, 2025",
      img: '/t6.jpg',
    },
  ];
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  function Items({ currentItems }) {
    return (
      <div className="flex flex-col items-center gap-y-10">
        {currentItems &&
          currentItems.map((item, index) => (
             <div key={index} className="max-w-[450px]">
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
                  <p className=" mt-3">
                   {item.body}
                  </p>
                </div>
              </div>
          ))}
      </div>
    );
  }
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
      className=" flex items-center gap-x-3 justify-center mt-10 "
      pageClassName=" bg-gray-200 rounded-md"
      activeClassName=" bg-primary text-white"
      pageLinkClassName=" block p-2 "
      previousClassName=" bg-gray-200 rounded-md"
      previousLinkClassName=" block p-2 hover:text-primary"
      nextClassName=" bg-gray-200 rounded-md"
      nextLinkClassName=" block p-2 hover:text-primary"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
