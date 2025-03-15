
import FeedTab from "./FeedTab";
import Posts from "./Posts";

const Feeds = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <FeedTab />

     
      <Posts />
    </div>
  );
};

export default Feeds;
