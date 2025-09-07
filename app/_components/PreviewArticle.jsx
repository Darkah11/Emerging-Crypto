"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import t1 from "@/public/t1.jpg";
import t2 from "@/public/t2.jpg";
import t3 from "@/public/t3.jpg";
import t4 from "@/public/t4.jpg";
import t5 from "@/public/t5.jpg";
import t6 from "@/public/t6.jpg";
import { getAllPosts } from "@/utils/supabase";

export default function PreviewArticle({ category }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllPosts();
        // Filter the products array
        if (posts) {
          const filteredPosts = posts.filter(
            (post) =>
              // Use the .includes() method directly on the product's categories array
              post.category.includes(category)
            // console.log(post.categories)
          );
          const articles = filteredPosts.slice(0, 6);
          setPosts(articles);
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
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
    <>
    {posts.length !== 0 ? <div className=" mt-8 flex flex-col gap-y-5">
      {posts.map((item, index) => (
        <Link key={index} href={`/${item.id}`} className="group">
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
    </div> : <p className=" text-2xl pt-5">No Articles</p>}
    </>
  );
}
