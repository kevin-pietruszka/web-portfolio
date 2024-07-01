import { links } from "@/lib/constants";
import Link from "next/link";
import ThemeButton from "@/components/ThemeButton";

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
      <ThemeButton />
    </div>
  );
}
