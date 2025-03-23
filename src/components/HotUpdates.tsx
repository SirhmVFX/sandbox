"use client";

import { useState } from "react";
import { Cancel } from "./Icons";
import PostCard from "./PostCard";
import RepliesCard from "./RepliesCard";

const HotUpdates = () => {
  const [showUpdates, setShowUpdates] = useState(false);

  return (
    <>
      {showUpdates ? (
        <div onClick={() => setShowUpdates(false)} className="bg-black/20  p-20 top-0 left-0 bottom-0 right-0 backdrop-blur-md z-10 fixed">
          <div
            onClick={() => setShowUpdates(false)}
            className=" cursor-pointer absolute top-10 right-10"
          >
            <Cancel size={20} />
          </div>
          <div className="w-4/6 mx-auto bg-black rounded-3xl h-full overflow-auto relative ">
            <div className="bg-black/5 p-8 rounded-ss-3xl rounded-se-3xl sticky top-0 backdrop-blur-md z-10 ">
              <h1 className="text-white font-bold">
                Updatesss!!!!!!🔥🔥🔥🔥🔥🔥
              </h1>
            </div>

            <div className="p-10 flex flex-col items-end">
            <PostCard />
            <RepliesCard />
            <RepliesCard />
            <RepliesCard />
            <RepliesCard />
            </div>


            <div className="bg-black-20 backdrop-blur-md p-8 sticky bottom-0">
                <input type="text" className="outline-none border border-white/5 p-4 w-full rounded-2xl " placeholder="Post a reply" />
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setShowUpdates(true)}
          className="w-5 h-5 flex items-center justify-center bg-primary-color rounded-full p-4 cursor-pointer"
        >
          <p>🔥</p>
        </div>
      )}
    </>
  );
};

export default HotUpdates;
