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
    <div className="flex flex-row justify-between mt-8 px-16 max-xl:mt-12">
      <div className="flex flex-row w-[293px] border">
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-gradient-to-r from-amber-800 via-amber-950 to-black text-amber-500 rounded-full shadow-md mr-2"
          handleClick={handleScroll}
        />

        <CustomButton
          title="Contact"
          containerStyles="bg-gradient-to-r from-amber-800 via-amber-950 to-black text-amber-500 rounded-full shadow-md w-[140px]"
          handleClick={handleScroll}
        />
      </div>

      {/* <div className="w-[20px] h-[20px] bg-gradient-to-r from-amber-800 via-amber-950 to-black rounded-full border border-red-800">
        
      </div>

      <div className="w-[20px] h-[20px] bg-gradient-to-r from-amber-800 via-amber-950 to-black rounded-full">
        
      </div>

      <div className="w-[20px] h-[20px] bg-gradient-to-r from-amber-800 via-amber-950 to-black rounded-full border border-red-800">
        
      </div>

      <div className="w-[20px] h-[20px] bg-gradient-to-r from-amber-800 via-amber-950 to-black rounded-full">
        
      </div> */}
    </div>
  );
}

export default HeroButtons
