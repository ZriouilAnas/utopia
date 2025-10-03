import React from "react";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#872E1E] py-4 px-6 flex items-center justify-between">
      <div className="flex-1 flex justify-center">
        <span className="text-white text-md text-center">
          © {new Date().getFullYear()} Utopia. All rights reserved.
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/restoutopiaborderouge/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6 text-white hover:text-rose-400 transition" />
        </a>
        <a
          href="https://www.facebook.com/p/Le-Restaurant-dUtopia-Borderouge-61550992137450/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="w-6 h-6 text-white hover:text-blue-400 transition" />
        </a>
      </div>
    </footer>
  );
}
