"use client";
import { hostGrotesk } from "@/lib/fonts";
import { HeroHomeData } from "@/utils/data";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleNext = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === HeroHomeData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const content = useMemo(() => HeroHomeData[index], [index]);

  return (
    <div className="w-full relative h-[80svh]">
      {/* image absolute */}
      <div
        className="absolute w-full h-full left-0 right-0 top-0 -z-10
      transition-all duration-300 ease-in-out
      "
      >
        <Image
          src={content.image}
          alt={content.title}
          width={1800}
          height={1800}
          priority={index === 0}
          className="w-full h-full object-cover brightness-95

          "
        />
      </div>

      {/* content */}
      <div
        className="flex justify-center flex-col h-full w-full text-white
      z-10 bg-gradient-to-b from-black/30 via-black/70 
      px-4 md:px-6 xl:px-8 gap-4   to-transparent
      transition-all duration-300 ease-in-out
      "
      >
        <p className="text-xl flex items-center gap-3">
          <span className="opacity-50">Accueil</span>
          <span className="text-lg">{">"}</span>
          <span>Blogs</span>
        </p>

        <h2
          className={`text-4xl font-black w-full text-primary 
            ${hostGrotesk.className} tracking-tight
            md:text-5xl xl:text-6xl max-w-lg
transition-all duration-300 ease-in-out
            `}
        >
          {content.title}
        </h2>
        <p className="max-w-lg text-xl md:text-2xl font-medium">
          {content.description}
        </p>

        <div
          className="flex items-center gap-2.5 w-full 
        transition-all duration-300 ease-in-out"
        >
          {/* input search */}
          <div className="relative max-w-md lg:w-full">
            <Search
              className="
            absolute top-1/2 transform  left-2.5
            -translate-y-1/2
            "
            />

            <Input
              className="pl-12 py-6"
              type="search"
              placeholder="Recherchez un article..."
              name="search"
              id="search"
            />
          </div>
          {/* button */}
          <Link href={"#"}>
            <Button className="py-6">Rechercher</Button>
          </Link>
        </div>
      </div>

      {/* dots nav */}
      <div
        className="w-full absolute bottom-4 left-0 right-0 z-10 
      flex items-center gap-3 justify-center
      transition-all duration-300 ease-in-out
      "
      >
        {HeroHomeData.map((_, idx) => (
          <span
            key={idx}
            role="button"
            aria-label="change content"
            onClick={() => setIndex(idx)}
            className={`w-10 h-2 ${
              idx === index ? "bg-primary" : "bg-gray-400"
            } rounded transition-all duration-500 ease-in-out`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
