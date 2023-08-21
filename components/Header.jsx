"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (lastScrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else setShow("shadow-sm");
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className={`h-[60px] flex justify-between items-center`}>
        <Link href={"/"}>
          <Image
            width={100}
            height={100}
            className="w-[40px] md:w-[60px]"
            src="./assets/logo.svg"
          />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        <div className="flex items-center gap-2 text-black">
          {/* icons start */}

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black-[0.05] cursor-pointer relative">
            <BsCart className="text-[17px] md:text-[20px] text-center" />
            <span className=" h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 right-[3px]  text-white text-center text-[12px] ">
              9
            </span>
          </div>

          {/* icon end */}
          {/* icons start */}

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black-[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[17px] md:text-[20px] text-center" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 right-[3px]   text-white text-center text-[12px] ">
              9
            </div>
          </div>
          {/* icon end */}
          {/* mobile menu start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black-[0.05] cursor-pointer relative">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[17px] md:text-[20px] text-center"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[17px] md:text-[20px] text-center"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* mobile menu end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
