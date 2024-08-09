"use client";
import { links } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import ThemeButton from "@/components/ThemeButton";

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
        <div className="fixed inset-0 bg-crust/50 z-100">
          <div className="fixed right-0 top-0 h-full w-1/2 bg-overlay0">
            <div className="py-9 px-8 flex justify-between shadow-md">
              <ThemeButton />
              <button onClick={toggleNav}>
                <FaX size={"1.5rem"} />
              </button>
            </div>
            <nav className="pt-9 flex flex-col gap-8 items-center justify-center">
              {links.map((link, index) => {
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
