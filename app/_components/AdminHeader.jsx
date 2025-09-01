"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/ec-logo.png";
import menu from "@/public/menu.png";
import search from "@/public/search.png";
import CryptoSlide from "./CryptoSlide";

export default function AdminHeader() {
  return (
    <>
      <nav className=" px-5 py-4 shadow-lg">
        <div className=" flex justify-between items-center">
          <Link href={"/"}>
            <Image src={logo} width={100} height={100} alt="emerging crypto logo" />
          </Link>
            
            <button>
              <Image src={menu} width={30} height={30} />
            </button>
        </div>

        <div></div>
      </nav>
    </>
  );
}
