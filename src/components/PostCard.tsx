"use client"

import { useState } from "react";
import { BookmarkIcon, CommentIcon, ShareIcon, StarIcon, UpVoteIcon } from "./Icons";

const PostCard = () => {
    const [showEmojis, setShowEmojis] = useState(false)
    return (
 <div className="py-8 flex flex-col gap-2 border-b border-white/5">
       <h1 className="text-sm">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
         numquam recusandae eligendi voluptate sequi illum reiciendis accusamus
         vero corrupti commodi.
       </h1>
 
       <div>
         <StarIcon size={17} className="text-primary-color" fill="yellow" />
       </div>
 
       <div className="flex justify-between items-center relative">
        {showEmojis ? (
            <div className="flex absolute -top-[40px] -left-4 bg-primary-color/5 rounded-full p-1 backdrop-blur-[3px] transition-all">
                <button className="p-1 cursor-pointer transition-all hover:bg-primary-color/1 rounded-2xl text-xs " >🔥</button>
                <button className="p-1 cursor-pointer transition-all hover:bg-primary-color/1 rounded-2xl text-xs " >👍🏼</button>
                <button className="p-1 cursor-pointer transition-all hover:bg-primary-color/1 rounded-2xl text-xs " >❤️</button>
                <button className="p-1 cursor-pointer transition-all hover:bg-primary-color/1 rounded-2xl text-xs " >😂</button>
                <button className="p-1 cursor-pointer transition-all hover:bg-primary-color/1 rounded-2xl text-xs " >⚡️</button>
            </div>
        ) : ""
            }
         <button className="flex gap-1 items-center transition-all" onClick={() => setShowEmojis(!showEmojis)}>
           {" "}
           <p className="text-[12px] ">🔥⚡️👍🏼❤️</p>{" "}
           <p className="text-[12px] text-primary-color/50"> 20k</p>
         </button>
         <button className="flex gap-1 items-center">
           <CommentIcon size={12} className="text-primary-color" />
           <p className="text-[12px] text-primary-color/50">24k</p>
         </button>
 
         <button className="flex items-center gap-1">
             <UpVoteIcon size={12} fill="yellow"/>
             <p className="text-[12px] text-yellow-500">244k</p>
         </button>
         <div>
           <button className="p-2 cursor-pointer transition-all hover:bg-primary-color/1 rounded-2xl text-primary-color">
             <BookmarkIcon size={12} />
           </button>
 
           <button className="p-2 cursor-pointer transition-all hover:bg-primary-color/1 rounded-2xl text-primary-color">
             <ShareIcon size={12} />
           </button>
         </div>
       </div>
     </div>       
    )
}

export default PostCard