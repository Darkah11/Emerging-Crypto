import Image from "next/image";
import Header from "../_components/Header";
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
import Footer from "../_components/Footer";
import Link from "next/link";
import Aside from "../_components/Aside";
import Pagination from "../_components/Pagination";
import Newsletter from "../_components/Newsletter";

export const metadata = {
  title: "New Tech",
};

export default function NewTech() {
  return (
    <>
      <Header />
      <main>
        <div className=" bg-dark text-white px-5 py-12 lg:px-12 xl:px-24">
          <h2 className=" text-3xl font-semibold md:text-4xl">New Tech</h2>
          <p className=" mt-2 max-w-[600px]">Behind the tokens are the tools. From zero-knowledge proofs
            to cross-chain bridges and scaling breakthroughs, we explore the new
            technologies driving crypto&apos;s evolution — and how they’ll change the
            way you interact with the blockchain.
          </p>
        </div>
        <section className=" px-5 lg:px-12 xl:px-24 ">
          <div className=" md:flex md:gap-x-5">
            <div className=" py-8 md:w-1/2">
              <Pagination itemsPerPage={5} category={"new tech"} />
            </div>
            <div className=" md:w-1/2">
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
