import Logo from "@/components/header/Logo";
import DesktopNav from "@/components/header/DesktopNav";
import MobileNav from "@/components/header/MobileNav";

export default function Header() {
  return (
    <header className="py-8 px-2 sticky top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
