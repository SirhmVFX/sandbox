import CreatePost from "@/components/CreatePost";
import Feeds from "@/components/Feeds";
import RightSideBar from "@/components/RightSideBar";

export default function Home() {
  return (
   <>
   <div className="w-full flex flex-col gap-2">
     <CreatePost />
   <div className="flex gap-4">
   <Feeds />
   <RightSideBar />
   </div>

   
   </div>
   </>
  );
}
