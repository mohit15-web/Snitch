import SearchSideBar from "./SearchSideBar"
import { RxMagnifyingGlass} from "react-icons/rx"
import RenderCards from "./RenderCards"
import { useState } from "react"
function Search() {
  const [searchText,setSearchText] = useState("")
  return (
    <>
    <div className='flex gap-5 mt-28 sm:px-0 2xl:px-32 2xl:mt-48'>
    <SearchSideBar />
        <div className="w-full sm:ml-0 2xl:ml-48">
            <div className='flex justify-center gap-5 mb-10 2xl:pl-10 '>
                <input type="text" placeholder='Search for products in this collection ' className="lg:w-[1060px] sm:w-[460px] md:w-[700px] px-4 py-2 border border-gray-300 shadow-sm focus:outline-none " style={{borderRight:"none"}} value={searchText} onInput={(e)=>{
                  setSearchText(e.target.value)                  
                }}/>
                <button className="border px-4 -ml-5 border-gray-300 shadow-sm focus:outline-none" style={{borderLeft:"none"}}>
                    <RxMagnifyingGlass />
                </button>
            </div>
            <div className="flex flex-wrap">
              <RenderCards  searchText={searchText}/>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Search