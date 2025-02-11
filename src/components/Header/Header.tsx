"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/utils/NavLink";
import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full bg-black/90 backdrop-blur-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-8 md:px-12 py-6">
        <Link href="/" className="relative z-50">
          <Image
            src="/dynasty-logo.webp"
            width={85}
            height={85}
            alt="Logo Dynasty"
            className="w-16 md:w-20"
          />
        </Link>

        <button
          className="md:hidden text-gray-300 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`fixed top-0 left-0 w-full h-screen bg-black/90 px-6 pt-24 
            flex flex-col items-center gap-8 transform transition-all duration-300 ease-in-out
            md:relative md:flex md:flex-row md:h-auto md:pt-0 md:px-0 md:bg-transparent md:w-auto 
            ${
              isOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-10 md:opacity-100 md:visible md:translate-y-0"
            }
            `}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-xl md:text-lg transition-colors duration-200 font-semibold ${
                isActive(link.href)
                  ? "text-yellow-500 font-semibold"
                  : "text-gray-300 hover:text-yellow-500"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="https://wa.me/6281382367257?text=Halo%20min!%20Saya%20tertarik%20untuk%20join%20Dynasty!!!"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className={`text-xl md:hidden transition-colors duration-200 font-semibold${
              isActive("#")
                ? "text-yellow-500 font-semibold"
                : "text-gray-300 hover:text-yellow-500"
            }`}
          >
            Join Us
          </Link>
        </nav>

        <Link
          href="https://wa.me/6281382367257?text=Halo%20min!%20Saya%20tertarik%20untuk%20join%20Dynasty!!!"
          target="_blank"
          className={`hidden md:block text-lg transition-colors duration-200 font-semibold ${
            isActive("#") ? "text-yellow-500 font-semibold" : "text-gray-300 hover:text-yellow-500"
          }`}
        >
          Join Us
        </Link>
      </div>
    </header>
  );
};
