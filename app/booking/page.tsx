"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { generateCarImageUrl } from "@/utils";
import Image from "next/image";

const BookingDetails = () => {

  const searchParams = useSearchParams();

  const make = searchParams.get("make");
  const model = searchParams.get("model");
  const year = searchParams.get("year");
  const city_mpg = searchParams.get("city_mpg");
  const combination_mpg = searchParams.get("combination_mpg");
  const cylinders = searchParams.get("cylinders");
  const displacement = searchParams.get("displacement");
  const drive = searchParams.get("drive");
  const fuel_type = searchParams.get("fuel_type");
  const highway_mpg = searchParams.get("highway_mpg");
  const transmission = searchParams.get("transmission");
  const rent = searchParams.get("carrent")

  const car = {
    model,
    make,  
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    transmission,
    year,
    rent
} 

  const imgUrl = generateCarImageUrl(car as any);

  return (
    <div className="min-h-screen w-full pt-48 px-16 flex justify-center font-bold text-xl">
      <div className="w-full max-w-[1000px]">
        <div className="w-full flex justify-between border-b border-lime-800">
          <div className="flex justify-center items-start flex-col pb-2">
            <span className="text-base">Book your:</span>
            <span>
              {car.make?.toUpperCase()}{" "}
              {`${car.model?.charAt(0).toUpperCase()}${car.model?.slice(1)}`}
            </span>
          </div>
          <span className="flex justify-center rounded-full text-white w-[150px] h-[45px] items-center text-xl bg-gradient-to-r from-[#9ebaa2] to-black shadow-lg">
            ${car.rent},- <span className="text-sm pl-1 pt-1">p/d</span>
          </span>
        </div>
        <div className="w-full">
          <div className="w-full mt-8">
            <Image src={imgUrl} alt="car" width={300} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
