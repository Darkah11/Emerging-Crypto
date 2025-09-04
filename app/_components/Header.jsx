"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/ec-logo.png";
import menu from "@/public/menu.png";
import close from "@/public/close.png";
import search from "@/public/search.png";
import CryptoSlide from "./CryptoSlide";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import useDebounce from "@/components/useDebounce";
import useFetch from "@/components/useFetch";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(searchValue, 500); // 500ms delay
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  console.log(isOpen);

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const handleOpen = (openValue) => {
    setIsOpen(openValue);
  };

  const { data, loading, error } = useFetch(
    debouncedQuery
      ? `https://api.coingecko.com/api/v3/search?query=${debouncedQuery}&per_page=100&page=1`
      : null // Don't fetch if the query is empty
  );
  // console.log(data.coins);

  const linkActive = usePathname();
  return (
    <>
      <nav className=" px-5 py-4 shadow-lg lg:px-12 xl:px-24">
        <div className=" flex justify-between items-center">
          <Link href={"/"}>
            <Image alt="logo" src={logo} width={100} height={100} />
          </Link>
          <div className=" flex items-center gap-x-3">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} n>
              <Image alt="search icon" src={search} width={30} height={30} />
            </button>
            <button onClick={() => handleOpen(!isOpen)}>
              <Image alt="menu icon" src={menu} width={30} height={30} />
            </button>
          </div>
        </div>

        <ul
          className={` ${
            isOpen
              ? " opacity-100 transition-opacity duration-1000"
              : " hidden opacity-0"
          } fixed flex  top-0 bg-gray-200 py-12 w-full h-full left-0  flex-col items-center z-50 md:hidden`}
        >
          <button
            onClick={() => handleOpen(!isOpen)}
            className=" absolute top-3 right-3 "
          >
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
              <Button text={"Contact Us"} />
            </Link>
          </li>
        </ul>
        <div
          className={` ${
            isSearchOpen
              ? " opacity-100 transition-opacity duration-1000"
              : " hidden opacity-0"
          } fixed flex  top-0 bg-gray-200 py-12 px-5 w-full h-full left-0  flex-col items-center z-50 md:hidden`}
        >
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className=" absolute top-3 right-3 "
          >
            <Image alt="close icon" src={close} width={30} height={30} />
          </button>
          {/* <div className=" max-w-full"> */}
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            className=" w-full block px-2 py-2 rounded-lg mt-10"
            placeholder=" Search crypto"
          />
          {/* </div> */}
          <div className=" mt-8 max-h-[375px] overflow-scroll hide-scroll">
            {searchValue != '' && data ?
              data.coins.map((coin, index) => (
                <Link href={"/"} key={index}>
                  <div className=" flex items-center gap-x-2 py-4 border-b border-gray-700">
                    <img src={coin.thumb} alt={coin.name + "image"} />
                    <p className=" text-sm">{coin.name} <span className=" font-semibold">{coin.symbol}</span></p>
                  </div>
                </Link>
              )) : null}
          </div>
        </div>
      </nav>
      <CryptoSlide />
    </>
  );
}
