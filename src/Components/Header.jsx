import HeaderSlider from "./HeaderSlider";
import { PiBagSimpleLight } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";
import { FaPinterest, FaFacebook, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import {
  RxHamburgerMenu,
  RxMagnifyingGlass,
  RxHeart,
  RxCamera,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import logo from "../assets/images/logo.webp";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  // to change burger classes
  const [menu_class, setMenuClass] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass(true);
    } else {
      setMenuClass(false);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  // close burger menu
  const closeMenu = () => {
    setMenuClass(false);
    setIsMenuClicked(false);
  };

  return (
    <div className="w-full flex flex-col fixed top-0 bg-white">
      <HeaderSlider />
      <div className="flex justify-between items-center px-10 py-5">
        <div className="text-black text-3xl">
          <RxHamburgerMenu onClick={updateMenu} />
        </div>
        <div
          className={`menu`}
          style={{ left: `${menu_class ? "0" : "-150%"}` }}
        >
          <div className="w-full text-gray-500 bg-white">
            <div className="w-full flex justify-between items-center px-7 py-5">
              <div className="flex items-center gap-2 text-2xl">
                <FaCircleUser />
                <h1 className="text-xl">Log In</h1>
              </div>
              <div>
                <button
                  className="close text-xl text-gray-500"
                  onClick={closeMenu}
                >
                  X
                </button>
              </div>
            </div>
            <hr className="text-black" />
            <h1 className="text-xl px-7 py-5 tracking-widest">NEW ARRIVALS</h1>
            <hr className="text-black" />

            <h1 className="text-xl px-7 py-5 tracking-widest">BEST SELLING</h1>
            <hr className="text-black" />
            <h1 className="text-xl px-7 py-5 tracking-widest">SNITCH LUXE</h1>
            <hr className="text-black" />
            <h1 className="text-xl px-7 py-5 tracking-widest">
              SUITS & BLAZERS
            </h1>
            <hr className="text-black" />
            <h1 className="text-xl px-7 py-5 tracking-widest">SHOP</h1>
            <hr className="text-black" />

            <h1 className="text-xl px-7 py-5 tracking-widest">TRACK ORDER</h1>
            <hr className="text-black" />
            <h1 className="text-xl px-7 py-5 tracking-widest">
              AFFILIATE PROGRAM
            </h1>
            <hr className="text-black" />
            <h1 className="text-xl px-7 py-5 tracking-widest">
              CUSTOM SUPPORT
            </h1>
            <hr className="text-black" />
            <h1 className="text-xl px-7 py-5 tracking-widest">VISIT STORE</h1>
            <hr className="text-black" />
            <h1 className="text-xl px-7 py-5 tracking-widest">RELOVE</h1>
            <hr className="text-black" />
            <div className="flex flex-wrap">
              <div className="border py-4 px-9">
                <RxInstagramLogo className="text-3xl text-black" />
              </div>
              <div className="border py-4 px-9">
                <RxLinkedinLogo className="text-3xl text-black" />
              </div>
              <div className="border py-4 px-10">
                <RxTwitterLogo className="text-3xl text-black" />
              </div>
              <div className="border py-4 px-9">
                <FaPinterest className="text-3xl text-black" />
              </div>
              <div className="border py-4 px-9">
                <FaFacebook className="text-3xl text-black" />
              </div>
              <div className="border py-4 px-10">
                <FaYoutube className="text-3xl text-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-44">
          <Link to="/">
            <img src={logo} alt="" className="w-60 object-cover" />
          </Link>
        </div>
        <div className="text-black text-3xl flex justify-center items-center gap-4">
          <Link to="/login">
            <CiUser />
          </Link>
          <RxMagnifyingGlass />
          <RxHeart />
          <PiBagSimpleLight />
          <RxCamera />
        </div>
      </div>
    </div>
  );
}

export default Header;
