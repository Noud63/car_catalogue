import React from 'react'
import Image from 'next/image';

const TheseToo = () => {
  return (
    <div className="thesetoo m-auto h-auto w-full max-w-[1440px] flex justify-start flex-col px-16 mt-36">
      <span className="mb-4 text-4xl font-extrabold text-black">
        Our Top Brands:
      </span>
      <div className="w-full flex flex-row justify-between border text-lg bg-white pt-16 rounded-xl shadow-md max-xl:flex-col max-xl:items-center max-xl:pb-8">

        <div className="w-full max-w-[400px] flex flex-col">
          <div className="w-full flex justify-center">
            <Image src="/rollsroyce.png" alt="rr" width={50} height={10} />
          </div>
          <div className="w-full flex justify-center mt-8">
            <Image src="/rrfront.png" alt="bentley" width={250} height={10} />
          </div>
        </div>

        <div className="w-full max-w-[400px] flex flex-col">
          <div className="w-full flex justify-center items-center mb-16 pt-2">
            <Image src="/bentley.png" alt="bentley" width={150} height={10} />
          </div>
          <div className="w-full flex justify-center">
            <Image
              src="/bentleyfront.png"
              alt="bentley"
              width={280}
              height={10}
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full max-w-[400px] flex flex-col">
          <div className="w-full flex justify-center mb-12">
            <Image src="/ferrari.png" alt="bentley" width={90} height={10} />
          </div>
          <div className="w-full flex justify-center">
            <Image
              src="/ferrarifront.png"
              alt="ferrari"
              width={280}
              height={10}
              className="object-contain pt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheseToo
