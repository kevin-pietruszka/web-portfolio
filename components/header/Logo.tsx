import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-2xl font-bold">
        <span className="text-primary">{"@"}</span>
        {"Kevin"}
      </h1>
    </Link>
  );
}
