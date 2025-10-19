import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="b text-black py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Nazwa */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-yellow-500">
            School of Basket
          </h1>
          <p className="text-black/80 mt-1">Train, Play & Enjoy Basketball</p>
        </div>

        {/* Social Media */}
        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="p-2 bg-black/10 hover:bg-yellow-400 hover:text-black rounded-full transition-all"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="p-2 bg-black/10 hover:bg-yellow-400 hover:text-black rounded-full transition-all"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="p-2 bg-black/10 hover:bg-yellow-400 hover:text-black rounded-full transition-all"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="p-2 bg-black/10 hover:bg-yellow-400 hover:text-black rounded-full transition-all"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-black/60 text-sm">
        © {new Date().getFullYear()} School of Basket. All rights reserved.
      </div>
    </footer>
  );
}
