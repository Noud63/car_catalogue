"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; 

const Hero = () => {

  const router = useRouter()

  const handleScroll = () => {
       router.push("/#discover")
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-40 padding-x">
        <h1 className="hero__title pr-8">
          Car rental
          <br /> service —<br /> best quality, <br />
          lowest price!
        </h1>

        <p className="hero__subtitle border-y border-orange-800 py-2">
          Experience car rental like you never did before,
          Effortless and quick!
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-orange-700 text-white rounded-full mt-12 shadow-md"
          handleClick={handleScroll}
        />
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
