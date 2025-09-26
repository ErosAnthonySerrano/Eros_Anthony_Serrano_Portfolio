"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about/", label: "About" },
    { href: "/projects/", label: "Projects" },
    { href: "/contact/", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-background-color via-background-color  to-surface px-6 py-4 flex w-full justify-end">
      <div className="lg:min-w-[60vh] lg:px-12 flex gap-8 lg:gap-12">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`cursor-pointer relative text-shadow-lg ${
              pathname === href
                ? "text-accent font-semibold text-shadow-black/30 "
                : "text-subtle hover:text-accent text-shadow-black/40 hover:text-shadow-black/30"
            }`}
          >
            {label}
            {pathname === href && (
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-accent-dark animate-pulse drop-shadow-md drop-shadow-black "/>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
