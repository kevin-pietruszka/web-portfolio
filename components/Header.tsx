import Logo from "@/components/header/Logo";
import DesktopNav from "@/components/header/DesktopNav";
import MobileNav from "@/components/header/MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background shadow-md">
      <div className="container mx-auto py-8 px-8 flex justify-between items-center">
        <Logo />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
