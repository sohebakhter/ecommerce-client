"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-1 md:px-3 py-2 ${
        isActive ? "text-yellow-600 font-bold" : ""
      }`}
    >
      {children}
    </Link>
  );
}
