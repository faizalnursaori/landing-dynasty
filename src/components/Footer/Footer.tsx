import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/utils/NavLink";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-black">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 hidden md:block">
              <Image src="/dynasty-logo.webp" alt="Logo Dynasty" width={240} height={240} />
            </div>
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-white">Pages</h3>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-white hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Image
                    src="/icons/icon-call.svg"
                    alt="Icon Call"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="text-white">+62 812-9972-3763</span>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/icons/icon-instagram.svg"
                    alt="Icon Mail"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <Link href="https://www.instagram.com/dynastybasketballacademy/" target="_blank">
                    @dynastybasketballacademy
                  </Link>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/icons/icon-location.svg"
                    alt="Icon Location"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="text-white">Wonderland Basketball Arena, Galuh Mas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500">
          <div className="container mx-auto py-4 px-5 text-center text-white font-semibold">
            <p>© 2025 Dynasty Basketball - By Faizal Nursaori</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
