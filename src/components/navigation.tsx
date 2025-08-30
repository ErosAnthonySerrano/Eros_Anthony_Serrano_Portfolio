import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b border-border bg-surface px-6 py-4 flex w-full justify-end">
      <div className="lg:min-w-[60vh] lg:px-12 flex gap-8 lg:gap-12">
        <Link href="/" className="text-subtle hover:text-accent">
          Home
        </Link>
        <Link href="/about" className="text-subtle hover:text-accent">
          About
        </Link>
        <Link href="/projects" className="text-subtle hover:text-accent">
          Projects
        </Link>
        <Link href="/contact" className="text-subtle hover:text-accent">
          Contact
        </Link>
      </div>
    </nav>
  );
}
