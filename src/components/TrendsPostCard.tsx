// "use client"

// import { useState } from "react";
import { UpVoteIcon } from "./Icons";
import { TrendPost } from "@/interfaces/sidebar";

const TrendsPostCard = ({post}: {post: TrendPost}) => {
    // const [showEmojis, setShowEmojis] = useState(false)

    const getTrimmedText = (text: string, trendWord: string) => {
        const words = text.split(" ");
        const trendIndex = words.findIndex((word) =>
          word.toLowerCase().includes(trendWord.toLowerCase())
        );
    
        if (trendIndex === -1) return text;
    
        const start = Math.max(trendIndex - 3, 0);
        const end = Math.min(trendIndex + 3, words.length);
    
        const prefix = start > 0 ? "..." : "";
        const suffix = end < words.length ? "..." : "";
    
        return (
          <>
            {prefix}
            {words.slice(start, trendIndex).join(" ")}{" "}
            <span className="text-primary-color font-semibold">{words[trendIndex]}</span>{" "}
            {words.slice(trendIndex + 1, end).join(" ")}
            {suffix}
          </>
        );
      };
    return (
 <div className=" p-4 bg-primary-color/3 rounded-2xl flex flex-col gap-2  text-ellipsis  relative">
       <h1 className=" text-xs text-ellipsis overflow-hidden">
        {getTrimmedText(post.text, post.trendWord)}
      </h1>
 
       
 
       <div className="flex justify-end gap-2 items-center absolute -top-1 right-3">
        {/* {showEmojis ? (
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
           <p className="text-xs ">🔥⚡️👍🏼❤️</p>{" "}
           <p className="text-xs text-primary-color/50"> 20k</p>
         </button> */}
         
 
         <button className="flex items-center gap-1">
             <UpVoteIcon size={15} fill="yellow"/>
             <p className="text-xs text-yellow-300">244k</p>
         </button>
         
       </div>
     </div>       
    )
}

export default TrendsPostCard