"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const pageTitle = pathname === "/dashboard" ? "Dashboard" : "Home";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-black shadow-md dark:shadow-gray-900 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <h1 className="text-xl font-bold">{pageTitle}</h1>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`font-medium transition ${
              pathname === "/" ? "text-blue-600 dark:text-blue-400" : "opacity-70 hover:opacity-100"
            }`}
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className={`font-medium transition ${
              pathname === "/dashboard"
                ? "text-blue-600 dark:text-blue-400"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            Dashboard
          </Link>
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;