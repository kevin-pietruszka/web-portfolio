import Logo from "@/components/header/Logo";

export default function Header() {
  return (
    <header className="py-8 sticky top-0 shadow-md">
      <div className="container mx-auto">
        <Logo />
      </div>
    </header>
  );
}
