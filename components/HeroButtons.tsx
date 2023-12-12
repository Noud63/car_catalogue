"use client"
import React from 'react'
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; 

const HeroButtons = () => {

    const router = useRouter();

    const handleScroll = () => {
      router.push("/#discover");
    };
  return (
    <div className="w-full flex flex-row mt-8 pl-16">
      <CustomButton
        title="Explore Cars"
        containerStyles="bg-gradient-to-r from-amber-800 via-amber-950 to-black text-amber-500 rounded-full shadow-md mr-2"
        handleClick={handleScroll}
      />

      <CustomButton
        title="Contact"
        containerStyles=" bg-gradient-to-r from-amber-800 via-amber-950 to-black text-amber-500 rounded-full shadow-md w-[140px]"
        handleClick={handleScroll}
      />
    </div>
  );
}

export default HeroButtons
