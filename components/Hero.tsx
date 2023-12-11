"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; 

const Hero = () => {

  const router = useRouter()

   const ref = React.useRef("" as string);

  const handleScroll = () => {
       router.push("/#discover")
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-24 padding-x">
        <h1 className="hero__title pr-8">
          Car rental
          <br /> service —<br /> best quality, <br />
          lowest price!
        </h1>

        <p className="hero__subtitle border-y border-amber-800 py-2">
          Experience car rental like you never did before, <br />
          Effortless and quick!
        </p>

        <div className="flex flex-row mt-12">
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-gradient-to-r from-amber-800 via-amber-950 to-black text-white rounded-full shadow-md mr-2"
            handleClick={handleScroll}
          />

          <CustomButton
            title="Contact"
            containerStyles=" bg-gradient-to-r from-amber-800 via-amber-950 to-black text-white rounded-full shadow-md w-[140px]"
            handleClick={handleScroll}
          />
        </div>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/jaguar.png"
            alt="hero"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>

      <div className="hero__image-overlay" />
    </div>
  );
};

export default Hero;
