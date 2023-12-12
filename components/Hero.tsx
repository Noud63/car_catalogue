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
      <div className="flex-1 pt-32YY padding-x">
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
      </div>

      <div className="hero__image-overlay" />
    </div>
  );
};

export default Hero;
