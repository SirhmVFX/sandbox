"use client"

import { useState } from "react"

const FeedTab = () => {
    const [feeds, setFeeds] = useState("recents")
    return (
        <div className="flex ">
        <button onClick={() => setFeeds("recents")} className={`${feeds === "recents" ? "border-b border-primary-color" : "" } p-4 w-1/2 hover:bg-primary-color/1 cursor-pointer text-sm`}>
          Recents
        </button>
        <button onClick={() => setFeeds("trending")} className={` ${feeds === "trending" ? "border-b border-primary-color" : "" } p-4 w-1/2 hover:bg-primary-color/1 cursor-pointer text-sm`}>
          Trending
        </button>
      </div>
    )
}

export default FeedTab