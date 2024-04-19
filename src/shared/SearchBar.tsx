import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";


type Prop ={
    placeholder?:string
}
const SearchBar =({placeholder='Search'}:Prop)=>{
    const [hasSearch,setHasSearch] = useState(false);
    const [searchValue,setSearchValue] = useState('') 

    return             <div>

    <div className="relative rounded-[0.25rem] shadow-sm w-[100%]" 
  //   style={{'backgroundColor':'red'}}
  //   
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <CiSearch className="h-6 w-6 text-[#4F4F4F]" aria-hidden="true" />
      </div>
      <input
        type="email"
        name="email"
        id="email"
        value={searchValue}
    style={{'backgroundColor':'#f4f4f4'}}
    onChange={(e)=>{
      setSearchValue(e.target.value)
      setHasSearch(true)
     
    }}
        
        className="block
        outline-none	
        w-full rounded-[0.25rem] py-[0.75rem] pl-11 text-gray-900 
        placeholder:font-generalSansMedium placeholder:text-[#4F4F4F] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
      {
        hasSearch?
      <IoMdCloseCircle className="absolute right-[15px] top-[15px] cursor-pointer "
      onClick={()=>{
      setHasSearch(false)
      setSearchValue('')
      }}
      
      />
      :''
      }

    </div>
  </div>
}

export default SearchBar;