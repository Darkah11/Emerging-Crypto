"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/ec-logo.png";
import menu from "@/public/menu.png";
import close from "@/public/close.png";
import search from "@/public/search.png";
import CryptoSlide from "./CryptoSlide";
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Button from "@/components/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleOpen = (openValue) => {
    setIsOpen(openValue);
  };

  const linkActive = usePathname();
  return (
    <>
      <nav className=" px-5 py-4 shadow-lg">
        <div className=" flex justify-between items-center">
          <Link href={"/"}>
            <Image src={logo} width={100} height={100} />
          </Link>
          <div className=" flex items-center gap-x-3">
            <button>
              <Image src={search} width={30} height={30} />
            </button>
            <button onClick={() => handleOpen(!isOpen)}>
              <Image src={menu} width={30} height={30} />
            </button>
          </div>
        </div>

        <ul
          className={` ${
            isOpen ? " opacity-100 transition-opacity duration-1000" : " hidden opacity-0"
          } fixed flex  top-0 bg-gray-200 py-12 w-full h-full left-0  flex-col items-center z-50 md:hidden`}
        >
          <button onClick={() => handleOpen(!isOpen)} className=" absolute top-3 right-3 ">
              <Image src={close} width={30} height={30} />
            </button>
          <li className=" border-b font-semibold text-lg w-full text-center">
            <Link
              className=" py-3 block hover:text-orange-10 transition-all"
              href={"/"}
              onClick={() => handleOpen(!isOpen)}
            >
              Home
            </Link>
          </li>
          <li className=" border-b font-semibold text-lg w-full text-center">
            <Link
              className=" py-3 block hover:text-orange-10 transition-all"
              href={"/new-tokens"}
              onClick={() => handleOpen(!isOpen)}
            >
              New Tokens
            </Link>
          </li>
          <li className=" border-b font-semibold text-lg w-full text-center">
            <Link
              className=" py-3 block hover:text-orange-10 transition-all"
              href={"/top-projects"}
              onClick={() => handleOpen(!isOpen)}
            >
              Top Projects
            </Link>
          </li>
          <li className=" border-b font-semibold text-lg w-full text-center">
            <Link
              className=" py-3 block hover:text-orange-10 transition-all"
              href={"/new-crypto"}
              onClick={() => handleOpen(!isOpen)}
            >
              New Crypto
            </Link>
          </li>
          <li className=" border-b font-semibold text-lg w-full text-center">
            <Link
              className=" py-3 block hover:text-orange-10 transition-all"
              href={"/politics-and-crypto"}
              onClick={() => handleOpen(!isOpen)}
            >
              Politics and Crypto
            </Link>
          </li>
          <li className=" border-b font-semibold text-lg w-full text-center">
            <Link
              className=" py-3 block hover:text-orange-10 transition-all"
              href={"/new-tech"}
              onClick={() => handleOpen(!isOpen)}
            >
              New Tech
            </Link>
          </li>
          <li className=" border-b font-semibold text-lg w-full text-center">
            <Link
              className=" py-3 block hover:text-orange-10 transition-all"
              href={"/defi"}
              onClick={() => handleOpen(!isOpen)}
            >
              Defi
            </Link>
          </li>
          <li className=" border-b font-semibold text-lg w-full text-center">
            <Link
              className=" py-3 block hover:text-orange-10 transition-all"
              href={"/events"}
              onClick={() => handleOpen(!isOpen)}
            >
              Events
            </Link>
          </li>
          <li className=" border-b  w-full text-center">
            <Link
              className=" py-3 block"
              href={"/contact"}
              onClick={() => handleOpen(!isOpen)}
            >
              <Button
                text={'Contact Us'}
              />
            </Link>
          </li>
        </ul>
      </nav>
      {/* <CryptoSlide /> */}
    </>
  );
}
