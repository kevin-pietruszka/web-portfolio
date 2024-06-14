import Link from 'next/link';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

export function NavLinks() {
  return (
    <nav>
      {links.map( (link, index, array) => {
        const spacing = index == 0 ? 'mr-4' : (index == array.length - 1 ? 'ml-4' : 'mx-4');

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${spacing} relative inline-block text-slate-800 hover:text-blue-500 dark:text-white dark:hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 dark:hover:after:scale-x-100 transition-all duration-300`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
