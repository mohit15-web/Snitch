import HeaderSlider from "./HeaderSlider";
import { FaCircleUser } from "react-icons/fa6";
import { FaPinterest, FaFacebook, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import {
  RxHamburgerMenu,
  RxMagnifyingGlass,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";
import logo from "../assets/images/logo.webp";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Header() {
  const {cart} = useSelector((state) => state.cart);
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

  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  // console.log();
  return (
    <>
      <div className="w-full flex flex-col fixed top-0 bg-white z-50">
        <HeaderSlider />
        <div className="flex justify-between items-center px-10 py-5">
          <div className="text-black text-3xl">
            <RxHamburgerMenu onClick={updateMenu} className="cursor-pointer" />
          </div>

          <div className="ml-44">
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="w-60 object-cover hidden 2xl:block lg:block md:block"
              />
            </Link>
          </div>
          <div className="text-black text-3xl flex justify-center items-center gap-4 cursor-pointer">
            {user?.displayName ? (
              <h1 className="hidden xl:block">{user?.displayName.split(' ')[0]}</h1>
            ) : (
              ""
            )}
            <div>
              {user?.displayName ? (
                <button
                  className="text-lg rounded-lg bg-black text-white px-6 py-2"
                  onClick={() =>{
                    localStorage.clear()
                    toast.success("Logged out successfully",{
                      position: "bottom-right",
                      theme: "colored",
                    })
                    setTimeout(() => {
                      window.location.reload()
                    },1000)
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="text-lg rounded-lg bg-black w-28 px-2 py-2 text-white 2xl:px-6 2xl:py-2"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </button>
              )}
            </div>
            <RxMagnifyingGlass
              className="hidden xl:block"
              onClick={() => navigate("/")}
            />
            <div className="relative cursor-pointer hidden xl:block 2xl:block lg:block" onClick={() => navigate("/cart")}>
            {cart.length > 0 ? (
              <span className="absolute -top-5 -right-4 bg-green-600 text-white font-semibold rounded-full text-xl w-[20px] p-4 h-[12px] flex justify-center items-center ">
                {cart.length}
              </span>
            ) : (
              ""
            )}
            <ShoppingCart className="h-8 w-8 " />{" "}
          </div>
          </div>
        </div>
      </div>

      <div className={`menu`} style={{ left: `${menu_class ? "0" : "-150%"}` }}>
        <div className="w-full text-gray-500 bg-white">
          <div className="w-full flex justify-between items-center px-7 py-5">
            <div className="flex items-center gap-2 text-2xl">
              <FaCircleUser />
              {user?.displayName ? (
              <h1 className="hidden xl:block">{user?.displayName.split(' ')[0]}</h1>
            ) : (
              <h1 className="text-xl">Log In</h1>
            )}
            </div>
            <div>
              <button
                className="close text-xl text-gray-500 cursor-pointer"
                onClick={closeMenu}
              >
                X
              </button>
            </div>
          </div>
          <hr className="text-black" />
          <h1 className="text-xl px-7 py-5 tracking-widest cursor-pointer">
            NEW ARRIVALS
          </h1>
          <hr className="text-black" />

          <h1 className="text-xl px-7 py-5 tracking-widest cursor-pointer">
            BEST SELLING
          </h1>
          <hr className="text-black" />
          <h1 className="text-xl px-7 py-5 tracking-widest cursor-pointer">
            SNITCH LUXE
          </h1>
          <hr className="text-black" />
          <h1 className="text-xl px-7 py-5 tracking-widest cursor-pointer">
            SUITS & BLAZERS
          </h1>
          <hr className="text-black" />
          <h1 className="text-xl px-7 py-5 tracking-widest cursor-pointer">
            SHOP
          </h1>
          <hr className="text-black" />

          <h1 className="text-xl px-7 py-5 tracking-widest cursor-pointer">
            TRACK ORDER
          </h1>
          <hr className="text-black" />
          <h1 className="text-xl px-7 py-5 tracking-widest cursor-pointer">
            AFFILIATE PROGRAM
          </h1>
          <hr className="text-black" />
          <h1 className="text-xl px-7 py-5 tracking-widest cursor-pointer">
            CUSTOM SUPPORT
          </h1>
          <hr className="text-black" />
          <h1 className="text-xl px-7 py-5 tracking-widest cursor-pointer">
            VISIT STORE
          </h1>
          <hr className="text-black" />
          <h1 className="text-xl px-7 py-5 tracking-widest cursor-pointer">
            RELOVE
          </h1>
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
    </>
  );
}

export default Header;
