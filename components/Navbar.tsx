"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Menu from "./Menu";
import { useSession } from "next-auth/react";
import localFont from "next/font/local";

const dance = localFont({
  src: "../fonts/DancingScript-Regular.ttf",
});

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full max-w-full absolute z-10 top-20 m-auto right-0 left-0">
      <nav className="flex justify-between items-center py-4 bg-transparent px-16 max-sm:px-4">
        <Link
          href="/"
          className="flex justify-center items-center pt-2 max-sm:pt-0"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={138}
            height={18}
            className="object-contain h-auto w-[140px]"
          />
        </Link>

        <Image
          src="/carlogos.png"
          alt="carlogos"
          width={600}
          height={10}
          className="object-contain mt-2 ml-12 mr-12 max-xl:hidden w-auto h-[24px]"
        />

        <div
          className={`flex flex-row gap-2 mt-1 max-sm:hidden ${
            isOpen && "hidden"
          }`}
        >
          {!session ? (
            <Link
              href="/api/auth/signin?callbackUrl=/"
              className="text-[#9ebaa2] text-md rounded-full flex justify-center items-center 
            bg-black min-w-[100px] h-9 shadow-md max-sm:w-[80px] 
            max-sm:text-sm max-sm:h-8"
            >
              Login
            </Link>
          ) : (
            <Link
              href="/api/auth/signout?callbackUrl=/"
              className="text-[#9ebaa2] text-md rounded-full flex justify-center items-center 
            bg-black min-w-[100px] h-9 shadow-md max-sm:w-[80px] 
            max-sm:text-sm max-sm:h-8"
            >
              Logout
            </Link>
          )}

          <Link href="/signup">
            <CustomButton
              title="sign up"
              btnType="button"
              containerStyles="text-[#5672d8] text-md rounded-full 
            bg-black min-w-[100px] h-9 shadow-md max-sm:hidden
            max-sm:text-sm max-sm:h-8 text-[#9ebaa2]"
            />
          </Link>
        </div>

        <div
          className={`flex flex-row gap-2 pr-10 sm:hidden max-sm:pr-0 ${
            isOpen && "hidden"
          }`}
        >
          <Image
            src="/hamburger.svg"
            width={45}
            height={45}
            alt="hamburger"
            onClick={() => setIsOpen(true)}
            className="object contain cursor-pointer"
          />
        </div>
      </nav>

      <Menu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </header>
  );
};

export default Navbar;
