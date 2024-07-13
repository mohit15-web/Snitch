import { useState } from "react";
import { IoCaretForwardOutline } from "react-icons/io5";
import { RxBox } from "react-icons/rx";

function SearchSideBar() {
  const [isVisible,setIsVisible] = useState(true)
  const collectionNone = () =>{
    setIsVisible(!isVisible)
  }

  const [issizeVisible,setsizeIsVisible] = useState(true)
  const sizeNone = () =>{
    setsizeIsVisible(!issizeVisible)
  }

  const [isfitVisible,setfitIsVisible] = useState(true)
  const fitNone = () =>{
    setfitIsVisible(!isfitVisible)
  }

  const [ispriceVisible,setpriceIsVisible] = useState(true)
  const priceNone = () =>{
    setpriceIsVisible(!ispriceVisible)
  }
  return (
    <div className=" h-[80vh] cursor-pointer text-gray-600 fixed overflow-scroll mt-30 px-3 hidden xl:block">
      <div className="text-xl flex items-center w-36 gap-1 mb-5" onClick={collectionNone}>
          <IoCaretForwardOutline className="text-xl" />
          <h1>Collections</h1>
        </div>
      {isVisible && (
      <div className="collection h-40">
        <div className="collection w-44 h-40 overflow-scroll overflow-x-hidden">
          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">BOXERS</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">CARGO PANTS</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">CHINOS</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">HOODIES</p>
          </div>
          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">JACKETS</p>
          </div>
          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">JEANS</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">OVERSHIRT</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">SHIRT</p>
          </div>
        </div>
      </div>
      )}
    <hr className="mb-6 mt-8"/>

    <div className="text-xl flex items-center w-36 gap-1 mb-5" onClick={sizeNone}>
          <IoCaretForwardOutline className="text-xl" />
          <h1>Size</h1>
        </div>
      {issizeVisible && (
      <div className="size h-40">
        <div className="collection w-44 h-40 overflow-scroll overflow-x-hidden">
          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">S</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">M</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">L</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">XL</p>
          </div>
          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">XXL</p>
          </div>
          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">28</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">30</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">32</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">34</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">36</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">38</p>
          </div>
        </div>
      </div>
      )}

      
    <hr className="mb-6 mt-8"/>
    <div className="text-xl flex items-center w-36 gap-1 mb-5" onClick={fitNone}>
          <IoCaretForwardOutline className="text-xl" />
          <h1>Fit</h1>
        </div>
      {isfitVisible && (
      <div className="fit h-40">
        <div className="collection w-44 h-40 overflow-scroll overflow-x-hidden">
          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">SLIM FIT</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">RELAXED FIT</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">OVERSIZED FIT</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">BAGGY FIT</p>
          </div>
          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">STRAIGHT FIT</p>
          </div>
          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">BOOT CUT</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">CUSTOM FIT</p>
          </div>
        </div>
      </div>
      )}

    <hr className="mb-6 mt-8"/>

    
    <div className="text-xl flex items-center w-36 gap-1 mb-5" onClick={priceNone}>
          <IoCaretForwardOutline className="text-xl" />
          <h1>Price (Rs.)</h1>
        </div>
      {ispriceVisible && (
      <div className="price h-40">
        <div className="collection w-44 h-40 overflow-scroll overflow-x-hidden">
          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">Under Rs. 999</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">Rs. 999</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">Rs. 999 - Rs. 1,499</p>
          </div>

          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">Rs. 1,499 - Rs. 1,999</p>
          </div>
          <div className="flex items-center gap-2 px-2 py-1">
            <RxBox className="text-sm" />
            <p className="text-sm">Above Rs. 1,999</p>
          </div>
         
        </div>
      </div>
      )}

    <hr className="mb-6 mt-8"/>

    </div>
  );
}

export default SearchSideBar;
