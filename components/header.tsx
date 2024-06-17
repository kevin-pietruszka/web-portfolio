'use client';

import { Logo } from "@/components/header/logo";
import { NavLinks } from "@/components/header/nav-links";
import { ThemeSwitch } from "@/components/header/theme-switch";

export function Header() {
  return (
    <header className="w-full px-16 py-8 flex items-center justify-between">
      <NavLinks />
      <Logo /> 
      <ThemeSwitch />
    </header>
  );
}
