import { getPostById } from "@/utils/supabase";
import Header from "../_components/Header";
import Aside from "../_components/Aside";
import Image from "next/image";
import Newsletter from "../_components/Newsletter";
import Footer from "../_components/Footer";
import ArticleDetails from "../_components/ArticleDetails";

export async function generateMetadata({ params }) {
  const post = await getPostById(params.id);
  return {
    title: post.title,
  };
}

export default function page({ params }) {
  const { id } = params;
  
  return (
    <>
          <Header />
          <main>
            <section className=" px-5 lg:px-12">
              <div className=" lg:flex lg:gap-x-5 max-w-[570px] lg:max-w-none lg:mx-0 mx-auto">
                <div className=" py-8 lg:w-1/2">
                  <ArticleDetails id={id} />
                </div>
                <div className=" lg:w-1/2">
                  <Aside />
                </div>
              </div>
            </section>
            <Newsletter />
          </main>
          <Footer />
        </>
  );
}
