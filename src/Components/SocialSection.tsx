import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function SocialSection() {
  return (
    <section className="w-full bg-amber-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Follow Us</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Stay connected with{" "}
          <span className="text-yellow-400 font-semibold">
            School of Basket
          </span>{" "}
          — check our latest news, training highlights, and behind-the-scenes
          moments!
        </p>

        <div className="flex justify-center gap-6 sm:gap-10">
          <a
            href="#"
            className="p-3 sm:p-4 bg-white/10 hover:bg-yellow-400 hover:text-black rounded-full transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="#"
            className="p-3 sm:p-4 bg-white/10 hover:bg-yellow-400 hover:text-black rounded-full transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="#"
            className="p-3 sm:p-4 bg-white/10 hover:bg-yellow-400 hover:text-black rounded-full transition-all duration-300"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="#"
            className="p-3 sm:p-4 bg-white/10 hover:bg-yellow-400 hover:text-black rounded-full transition-all duration-300"
            aria-label="Twitter / X"
          >
            <Twitter className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>

        <p className="text-white/60 text-sm mt-10">
          #HealthyMotion • #SchoolOfBasket • #PlayWithPassion
        </p>
      </div>
    </section>
  );
}
