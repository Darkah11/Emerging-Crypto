"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import sui from "@/public/sui.jpg";
import pumpkin from "@/public/pumpkin.jpg";
import trading from "@/public/trading.jpg";
import { getAllPosts } from "@/utils/supabase";
import Link from "next/link";

export default function EventsArticle() {
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
                post.category.includes('events')
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
  return (
    <>
    {posts.length !== 0 ? <div className=" mt-8 flex flex-col items-center gap-y-2 md:grid grid-cols-3 md:gap-x-2 lg:gap-x-5">
      {posts.map((post) => (
        <Link href={`/${post.id}-${post.slug}`} key={post.id}>
          <div className=" relative h-[210px]">
            <div className=" px-3 pb-5 text-white absolute bg-black bg-opacity-30 h-full w-full flex flex-col justify-end">
              <h3 className=" text-xl font-medium">{post.title}</h3>
              <p className=" text-gray-200 text-sm mt-2">
               {new Date(post.created_at).toDateString()}
              </p>
            </div>
            <img src={post.image_url} alt={post.title} className=" min-w-full h-full object-cover" />
          </div>
        </Link>
      ))}
    </div> : <p className=" text-2xl text-center py-5">No Events</p>}
    </>
  );
}
