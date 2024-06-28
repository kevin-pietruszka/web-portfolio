"use client";
import { links } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaSun, FaX } from "react-icons/fa6";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleNav} className="flex justify-center items-center">
        <FaBars size={"1.5rem"} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-1/2 bg-white">
            <div className="py-9 px-8 flex justify-between shadow-md">
              <button>
                <FaSun size={"1.5rem"} />
              </button>
              <button onClick={toggleNav}>
                <FaX size={"1.5rem"} />
              </button>
            </div>
            <nav className="pt-9 flex flex-col gap-4 items-center justify-center">
              {links.map((link, index, array) => {
                return (
                  <Link onClick={toggleNav} key={index} href={link.href}>
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div
            className="fixed left-0 top-0 h-full w-1/2 z-40"
            onClick={toggleNav}
          ></div>
        </div>
      )}
    </div>
  );
}
