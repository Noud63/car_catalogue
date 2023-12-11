import React from "react";
import Image from "next/image";

const TheseToo = () => {
  return (
    <div className="thesetoo m-auto w-full flex justify-start flex-col px-16 mt-28 max-xsm:px-4">
      <Image
        src="/companylogoextra.png"
        alt="logo"
        width={338}
        height={18}
        className="object-contain h-auto w-[300px] mb-8"
      />
      <div
        className="w-full flex flex-row justify-between h-full text-lg bg-white rounded-xl 
      shadow-md max-xl:flex-col max-xl:items-center max-xl:pb-0 border-b border-gray-400"
      >
        <div className="w-full max-w-1/3 flex flex-col border-dotted border-r-2 border-gray-300 max-xl:border-0">
          <div className="w-full flex justify-center pt-12">
            <Image src="/rollsroyce.png" alt="rr" width={50} height={10} />
          </div>
          <div className="w-full flex items-center flex-col mt-8 relative">
            <Image src="/rrfront.png" alt="bentley" width={250} height={10} />
            <div className="absolute bottom-0 h-12 w-full flex justify-center items-center text-base font-semibold bg-black text-white">
              Only $98,- p/d
            </div>
          </div>
        </div>

        <div className="w-full max-w-1/3 flex flex-col relative">
          <div className="w-full flex justify-center items-center mb-16 pt-12">
            <Image src="/bentley.png" alt="bentley" width={150} height={10} />
          </div>
          <div className="w-full flex justify-center max-xl:pb-12">
            <Image
              src="/bentleyfront.png"
              alt="bentley"
              width={180}
              height={10}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 h-12 w-full flex justify-center items-center text-base font-semibold bg-black text-white">
            Only $90,- p/d
          </div>
        </div>

        <div className="w-full max-w-1/3 flex flex-col border-dotted border-l-2 border-gray-300 max-xl:border-0 relative">
          <div className="w-full flex justify-center mb-12 pt-12">
            <Image src="/ferrari.png" alt="bentley" width={90} height={10} />
          </div>
          <div className="w-full flex justify-center max-xl:pb-12">
            <Image
              src="/ferrarifront.png"
              alt="ferrari"
              width={280}
              height={10}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 h-12 w-full flex justify-center items-center text-base font-semibold bg-black text-white">
            Only $85,- p/d
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheseToo;
