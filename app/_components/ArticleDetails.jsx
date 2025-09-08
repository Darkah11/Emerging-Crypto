"use client"
import React, { useEffect, useState } from "react";
import { getPostById } from "@/utils/supabase";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ArticleDetails({id}) {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [markdown, setMarkdown] = useState(`
    # My Article Title
    
    Welcome to my article. Here's some markdown:
    
    - A list item
    - Another list item
    
    My favorite search engine is [Duck Duck Go](https://duckduckgo.com)
    
    **Bold text** and *italic text*.
    `);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getPostById(id);
        setArticle(post);
        console.log(post);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);
  return (
    <>
    {!loading && <div>
      <h2 className=" capitalize text-3xl font-bold">{article.title}</h2>
      <p className="text-gray-400 font-medium text-sm mt-3 uppercase">
        {article.category.map((item, index) =>
          index === article.category.length - 1 ? item : item + ", "
        )}
      </p>
      <p className=" mt-3 font-medium text-sm">
        {new Date(article.created_at).toDateString()}
      </p>
      <div className=" mt-5">
        <img
          src={article.image_url}
          alt={article.title + "image"}
          className=" w-full aspect-[3/2] object-cover"
        />
      </div>
      <div className=" mt-8 lg:pr-10">
        <div className="markdown-container">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>}
    </>
  );
}
