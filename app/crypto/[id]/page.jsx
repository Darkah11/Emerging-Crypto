import { getPostById } from "@/utils/supabase";
import Image from "next/image";
import Header from "@/app/_components/Header";
import Aside from "@/app/_components/Aside";
import ArticleDetails from "@/app/_components/ArticleDetails";
import Newsletter from "@/app/_components/Newsletter";
import Footer from "@/app/_components/Footer";
import CryptoDetails from "@/app/_components/CryptoDetails";

// export async function generateMetadata({ params }) {
//   const post = await getPostById(params.id);
//   return {
//     title: post.title,
//   };
// }

export default function page({ params }) {
  const { id } = params;

  return (
    <>
      <Header />
      <main>
        <section className=" px-5 lg:px-12">
          <div className=" lg:flex lg:gap-x-5 max-w-[570px] lg:max-w-none lg:mx-0 mx-auto">
            <div className=" py-8 lg:w-1/2">
              {/* <ArticleDetails id={id} /> */}
              <CryptoDetails id={id} />
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
