"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/utils/supabase";
import { useEffect, useState } from "react";

const images = [
  { id: 11, src: "/sui.jpg", alt: "top news" },
  { id: 12, src: "/pumpkin.jpg", alt: "top news" },
  { id: 13, src: "/trading.jpg", alt: "top news" },
];

export default function LibraryCarousel() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllPosts();
        const articles = posts.slice(0, 3);
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
    <>
      <div className="relative w-full lg:hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showArrows={false}
          showThumbs={false}
        >
          {posts.map((post) => (
            <Link  href={`/${post.id}-${post.slug}`} key={post.id} className=" group">
              <div className="h-[350px] w-full relative">
                <img
                  src={post.image_url}
                  alt={post.title}
                  style={{ objectFit: "cover" }}
                  className=" h-full w-full"
                />
                <div
                  className=" px-3 text-white absolute bg-black top-0
            bg-opacity-30 h-full w-full flex flex-col justify-end text-left pb-16 z-30"
                >
                  <h3 className=" text-xl font-medium max-w-[280px] group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className=" text-gray-200 text-sm mt-2">
                    {new Date(post.created_at).toDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <div className=" grid-container hidden lg:grid lg:h-[550px]">
        {posts.map((post, index) => (
          <Link
            href={`/${post.id}-${post.slug}`}
            key={post.id}
            className={` group grid-child${index} h-full`}
          >
            <div className=" lg:h-full w-full relative">
              <img
                src={post.image_url}
                alt={post.title}
                className=" h-full w-full object-cover"
              />
              <div
                className=" px-3 lg:px-8 text-white top-0 right-0 absolute bg-black 
            bg-opacity-30 h-full w-full flex flex-col justify-end text-left pb-16"
              >
                <h3 className=" text-2xl  font-medium max-w-[370px] lg:max-w-none group-hover:text-primary">
                  {post.title}
                </h3>
                <p className=" text-gray-200 text-sm mt-2">
                  {new Date(post.created_at).toDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
