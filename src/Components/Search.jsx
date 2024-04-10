import SearchSideBar from "./SearchSideBar"
import { RxMagnifyingGlass} from "react-icons/rx"
import RenderCards from "./RenderCards"
import { useState } from "react"
function Search() {
  const [searchText,setSearchText] = useState("")
  return (
    <div className='px-32 flex gap-5 mt-48'>
        <SearchSideBar />
        <div className="ml-48">
            <div className='flex gap-5 mb-10 pl-10 '>
                <input type="text" placeholder='Search for products in this collection ' className="lg:w-[1060px] sm:w-[360px] md:w-70 px-4 py-2 border border-gray-300 shadow-sm focus:outline-none " style={{borderRight:"none"}} value={searchText} onInput={(e)=>{
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
  )
}

export default Search