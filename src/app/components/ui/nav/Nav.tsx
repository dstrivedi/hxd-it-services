"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  {
    id: 1,
    menu: "Home",
    href: "/",
  },
  {
    id: 2,
    menu: "Services",
    href: "/services",
  },
  {
    id: 3,
    menu: "About",
    href: "/about",
  },
  {
    id: 4,
    menu: "Contact",
    href: "/contact",
  },
];

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <nav className="flex justify-between items-center bg-black fixed h-16 px-4 w-full text-white z-10">
      <div className="z-20">
        <h1 className="text-4xl font-signature ml-2">
          <a
            className="link-underline link-underline-black border-2 border-white rounded-md"
            href="/"
          >
            <span className="p-2 font-bold">
              H<small className="font-normal">x</small>D
            </span>
          </a>
        </h1>
      </div>

      <div className="hidden md:flex">
        {links.map((link) => (
          <Link
            className="px-4 cursor-pointer capitalize py-6 text-xl"
            key={link.id}
            href={link.href}
          >
            {link.menu}
          </Link>
        ))}
      </div>

      <div
        className="md:hidden cursor-pointer pr-4 z-10 text-white"
        onClick={handleNav}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black opacity-90">
          {links.map((link) => (
            <Link
              className="px-4 cursor-pointer capitalize py-6 text-xl"
              key={link.id}
              href={link.href}
              onClick={handleNav}
            >
              {link.menu}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
