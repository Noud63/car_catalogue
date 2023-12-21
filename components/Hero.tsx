"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-64 padding-x max-xl:pt-40">
        <h1 className="hero__title mb-8 max-sm:mb-4">
          <div className="absolute max-xl:relative top-40 max-xl:top-0">
            <span
              className="bg-gradient-to-r from-black to-amber-700 text-transparent bg-clip-text 
              font-extrabold 2xl:text-[72px] text-[68px] max-md:text-[54px] max-sm:text-[42px] max-xsm:text-[34px]"
            >
              Car Rental Service
            </span>
          </div>
          <span className="flex flex-col 2xl:text-[45px] max-md:text-[32px] max-sm:text-[24px] max-xsm:text-[22px] mt-4 max-sm:mt-2">
            <span>Best quality, </span>
            <span>lowest price,</span>
            <span>Excellent service!</span>
          </span>
        </h1>

        <p className="hero__subtitle py-1 max-md:text-[16px]">
          Experience car rental like you never did before, <br />
          Effortless and quick!
        </p>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/bentley2.png"
            alt="hero"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
