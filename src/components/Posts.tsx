import PostCard from "./PostCard";

const Posts = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
        {[1,2,3,4,5].map((post) => (
            <PostCard key={post}/>
        ))}
    </div>
  );
};

export default Posts;
