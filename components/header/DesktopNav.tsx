import { links } from "@/lib/constants";
import Link from "next/link";
import { FaSun } from "react-icons/fa6";

export default function DesktopNav() {
  return (
    <div className="hidden md:flex gap-8 items-center justify-center">
      <nav className="flex gap-8 items-center justify-center">
        {links.map((link, index, array) => {
          return (
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
          );
        })}
      </nav>
      <button>
        <FaSun size={"1.5rem"} />
      </button>
    </div>
  );
}
