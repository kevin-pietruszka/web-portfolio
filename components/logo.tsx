import Link from 'next/link';

export function Logo() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
      <Link
        href={"/"}
        className="w-16 h-16 flex items-center justify-center rounded-full text-3xl antialiased bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
      >
        KP
      </Link>
    </div>
  );
}
