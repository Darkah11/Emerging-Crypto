"use client";
import { getAllPosts } from "@/utils/supabase";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllPosts();
        const articles = posts.slice(0, 6);
        setPosts(articles);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div
      className="flex flex-col items-center md:items-start gap-y-10
     md:grid md:grid-cols-2 md:gap-x-3 md:place-content-center
     lg:grid-cols-3"
    >
      {posts &&
        posts.map((item, index) => (
          <div key={index} className="max-w-[450px] md:mx-auto">
            <Link href={`/${item.id}-${item.slug}`}>
              <img
                alt={item.title}
                src={item.image_url}
                className=" min-w-full h-[300px] object-cover"
              />
            </Link>
            <div className=" text-black mt-3">
              <Link
                href={`/${item.id}-${item.slug}`}
                className=" text-xl font-bold hover:text-primary"
              >
                {item.title}
              </Link>
              <p className=" text-gray-400 font-medium text-sm mt-3 uppercase">
                {item.category.map((cat, index) =>
                  index === item.category.length - 1 ? cat : cat + ", "
                )}
              </p>
              <p className=" text-gray-600 font-medium text-sm mt-3">
                {new Date(item.created_at).toDateString()}
              </p>
              <div className=" mt-3">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {item.body.slice(0, 149) + "..."}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
