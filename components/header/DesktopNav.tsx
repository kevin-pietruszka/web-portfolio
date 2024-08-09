import { links } from "@/lib/constants";
import Link from "next/link";
import ThemeButton from "@/components/ThemeButton";

export default function DesktopNav() {
  return (
    <div className="hidden md:flex gap-8 items-center justify-center">
      <nav className="flex gap-8 items-center justify-center">
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.href} className="relative group hover:text-lavender transition-colors duration-200">
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lavender scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </Link>
          );
        })}
      </nav>
      <ThemeButton />
    </div>
  );
}
