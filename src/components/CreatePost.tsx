import Button from "./Button"
import { BoxIcon, EmojiIcon, FileIcon, GifIcon, MediaIcon, PollIcon } from "./Icons"

const CreatePost = () => {
    const PostTypes = [
        {
            name: "Media",
            value: "media",
            icon: <MediaIcon size={17} />,
        },
        {
            name: "File",
            value: "text",
            icon: <FileIcon size={17} />,
        },
        {
            name: "gif",
            value: "gif",
            icon: <GifIcon size={17} />,
        },
        {
            name: "Poll",
            value: "poll",
            icon: <PollIcon size={17} />,
        },
        {
            name: "Emoji",
            value: "emoji",
            icon: <EmojiIcon size={17} />,
        },
    ]
    return (
        <div className="w-full p-6  bg-primary-color/2 rounded-2xl">
            <input type="text" className="w-full outline-none h-20 border-b border-primary-color/2" placeholder="Box it!!!" />
            <div className="flex justify-between items-center">
            <div className="flex gap-2 ">
                {PostTypes.map((postType) => (
                    <button key={postType.value} className="p-2 cursor-pointer transition-all hover:bg-primary-color/1 rounded-2xl text-primary-color">
                        {postType.icon}
                    </button>
                ))}
            </div>
            <Button className=" bg-primary-color text-black"><BoxIcon size={17} /> </Button>
            </div>
        </div>
    )
}

export default CreatePost   