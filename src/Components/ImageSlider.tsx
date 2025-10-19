"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "src/assets/court.jpg",
  "src/assets/log.jpg",
  "src/assets/player.jpg",
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative max-h-[40vh] bg-amber-950 w-screen aspect-[16/9] overflow-hidden">
      {/* SLIDES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <img
            src={images[index]}
            style={{ objectPosition: "40% 15%" }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* TEKST NA OBRAZIE */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-6xl font-bold bg-black/40 px-6 py-3 rounded-xl shadow-lg">
              School of Basket 🏀
            </h1>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* BUTTONS */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={prev}
          className="bg-black/40 text-white hover:bg-black/60 rounded-full p-2 sm:p-3"
        >
          <ChevronLeft className="h-5 w-5 sm:h-8 sm:w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          className="bg-black/40 text-white hover:bg-black/60 rounded-full p-2 sm:p-3"
        >
          <ChevronRight className="h-5 w-5 sm:h-8 sm:w-8" />
        </Button>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-yellow-400 scale-125 shadow-md"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
