"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface px-6 py-4 flex w-full justify-end">
      <div className="lg:min-w-[60vh] lg:px-12 flex gap-8 lg:gap-12">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`cursor-pointer ${
              pathname === href
                ? "text-accent font-semibold"
                : "text-subtle hover:text-accent"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
