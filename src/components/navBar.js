import Link from "next/link";
import React, { useState } from "react";
import Lottie from "lottie-react";
import { rickAnimation } from "@/lib/rickAnimation";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Characters",
    },
    {
      id: 2,
      link: "Episodes",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-5 text-cyan-600 bg-blue-200 nav">
      <div style={{ height: "90px" }}>
        <Lottie
          animationData={rickAnimation}
          loop={false}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div>
        <h1
          style={{ fontFamily: "Get Schwifty" }}
          className="text-4xl font-signature ml-10"
        >
          <Link href="/">Rick and Morty</Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-cyan-800 duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {/* {nav ? <FaTimes size={30} /> : <FaBars size={30} />} */}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
