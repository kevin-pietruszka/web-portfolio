import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/nav-links";
import { ThemeSwitch } from "@/components/theme-switch";

export function Header() {
  return (
    <header className="w-full px-16 py-8 flex items-center justify-between">
      <NavLinks />
      <Logo /> 
      <ThemeSwitch />
    </header>
  );
}
