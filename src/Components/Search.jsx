import SearchSideBar from "./SearchSideBar";
import { RxMagnifyingGlass } from "react-icons/rx";
import RenderCards from "./RenderCards";
import { useState, useEffect } from "react";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [showSideBar, setShowSideBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 50) {
        setShowSideBar(false);
      } else {
        setShowSideBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className='flex gap-5 mt-28 sm:px-0 2xl:px-32 2xl:mt-48'>
        {showSideBar && <SearchSideBar />}
        <div className="w-full sm:ml-0 2xl:ml-48">
          <div className='flex justify-center gap-5 mb-10 2xl:pl-10'>
            <input
              type="text"
              placeholder='Search for products in this collection'
              className="lg:w-[1060px] sm:w-[460px] md:w-[700px] px-4 py-2 border border-gray-300 shadow-sm focus:outline-none"
              style={{ borderRight: "none" }}
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button className="border px-4 -ml-5 border-gray-300 shadow-sm focus:outline-none" style={{ borderLeft: "none" }}>
              <RxMagnifyingGlass />
            </button>
          </div>
          <div className="flex flex-wrap">
            <RenderCards searchText={searchText} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
