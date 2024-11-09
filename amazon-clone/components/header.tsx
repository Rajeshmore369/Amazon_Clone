"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MenuList = [
  "All",
  "Fresh Meat",
  "Sell",
  "Buy Again",
  "New Releases",
  "MX Player",
  "Gift Cards",
  "Amazon Pay",
  "AmazonBasics",
  "Gift Ideas",
  "Today's Deals",
  "Browsing History",
];
const Header = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const searchHandler = () => {
    router.push(`/search/${query}`);
  };
  return (
    <>
      <div className="bg-[#131820] text-white py-1 ">
        <div className=" flex items-center justify-between w-[90%] mx-auto">
          {/* Logo*/}
          <div className="w-[10%]">
            <Image
              className="cursor-pointer"
              src={logo}
              alt="logo"
              width={140}
              height={140}
            />
          </div>
          {/*Search Bar*/}
          <div className="flex items-center w-[60%]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search..."
              className=" text-black border-gray-400 outline-none  w-full p-2 rounded-l-md"
            />
            <div
              onClick={searchHandler}
              className="bg-[#da9740] p-2 cursor-pointer text-black rounded-r-md"
            >
              <FaSearch size={"24px"} />
            </div>
          </div>
          <div className="flex items-center justify-around cursor-pointer w-[20%]">
            <div>
              <h1 className="text-xs">Hello,Rajesh</h1>
              <h1 className="text-sm font-medium">Accounts and List</h1>
            </div>
            <div>
              <h1 className="text-xs">Returns</h1>
              <h1 className="text-sm font-medium"> &Orders</h1>
            </div>
            <div className="cursor-pointer">
              <p className="relative left-4 top-2">0</p>
              <div className="flex">
                <div>
                  <AiOutlineShoppingCart size={"30px"} />
                </div>
                <h1 className="mt-3 ">cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#232f3e] text-white flex items-center justify-between w-full p-1 ">
        <div>
          {MenuList.map((link, idx) => {
            return (
              <Link
                key={idx}
                href={`/${link}`}
                className="mx-2 hover:border-white border border-transparent p-1"
              >
                {link}
              </Link>
            );
          })}
        </div>
        <div>
          <h1 className=" mr-5 border border-transparent hover:border-white py-1 font-bold text-[#da9740] cursor-pointer">
            Sign Out
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
