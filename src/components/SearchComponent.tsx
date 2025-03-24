"use client"
import { useState } from "react"
import { Cancel, FileSearch } from "./Icons"

const SearchComponent = () => {
    const [searchDialog, setSearchDialog] = useState(false)
    return (
        <>
        {searchDialog && (
            <div onClick={() => setSearchDialog(false)} className="absolute p-20 left-0 right-0 top-0 bottom-0 z-10 bg-black/20 backdrop-blur-md flex flex-col items-center ">
                <div className=" cursor-pointer absolute top-10 right-10">
                    <Cancel size={20}/>
                </div>
                <div  className=" flex items-center gap-2 p-6 outline-none text-xs border border-white/10 rounded-full w-[800px]">
            <FileSearch size={17}/>
            <input  type="text" className=" outline-none text-xs " placeholder="Search" />
        </div>
            </div>
        )}
       <div onClick={() => setSearchDialog(!searchDialog)}  className="cursor-pointer flex items-center gap-2 p-2 outline-none text-xs border border-white/10 rounded-full w-[400px]">
            <FileSearch size={17}/>
            <input  type="text" className=" outline-none text-xs " placeholder="Search" />
        </div>
        </>
        
    )
}

export default SearchComponent