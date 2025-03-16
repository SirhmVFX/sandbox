import { TrendPost } from "@/interfaces/sidebar";
import TrendsPostCard from "./TrendsPostCard"

const RightSideBar = () => {
    const posts: TrendPost[] = [
        {
          id: 1,
          text: "Woke up to a power outage again, and the generator won’t start. I swear NEPA is testing my mental health this week. Meanwhile, I’ve got three deadlines to meet today and no caffeine.",
          trendWord: "NEPA"
        },
        {
          id: 2,
          text: "Just finished watching the latest AI documentary, and now I’m genuinely scared. The pace at which things are evolving is wild — from self-driving cars to AI-generated news anchors!",
          trendWord: "AI"
        },
        {
          id: 3,
          text: "Every time I try to stay consistent at the gym, life decides to humble me with either work stress or unexpected flu. But this time, I’m determined to hit my 30-day workout goal, no matter what!",
          trendWord: "workout"
        },
        {
          id: 4,
          text: "Throwback to the good old 2go and BBM days — when we had star levels, custom pins, and group chats that felt like secret societies. Social media felt a lot more personal back then.",
          trendWord: "2go"
        },
        {
          id: 5,
          text: "Remote work sounded like a dream until I realized I hadn’t left the house in five days, my sleep cycle is broken, and I miss random office gist over lunch. Is this freedom or another trap?",
          trendWord: "Remote"
        }
      ];
      
    return (
        <div className="w-3/6 py-4 flex flex-col gap-4">
            
           <div className="flex flex-col gap-4 p-6 rounded-3xl bg-primary-color/2">
            <h1>Trending Boxes</h1>

            <div className="flex flex-col gap-4">
                {posts.map((post) => (
                    <TrendsPostCard key={post.id} post={post}/>
                ))}
            </div>
           </div>
        </div>
    )
}

export default RightSideBar