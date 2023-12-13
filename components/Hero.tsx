"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {

  return (
    <div className="hero">
      <div className="flex-1 pt-40 padding-x">
        <h1 className="hero__title">
          Car rental
          <br /> service —<br /> best quality, <br />
          lowest price!
        </h1>

        <p className="hero__subtitle py-1">
          Experience car rental like you never did before, <br />
          Effortless and quick!
        </p>
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
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
