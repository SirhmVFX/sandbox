import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { BellIcon, BookmarkIcon, BoxIcon, EyeIcon, WriteIcon } from "./Icons";
import { SidebarLink } from "@/interfaces/interfaces";
import SearchComponent from "./SearchComponent";

const SideBar = () => {
  const navLinks: SidebarLink[] = [
    {
      name: "Boxes",
      href: "/",
      icon: <BoxIcon size={17} />,
    },
    {
      name: "Posts",
      href: "/posts",
      icon: <WriteIcon size={17} />,
    },
    {
        name: "Notifications",
        href: "/notifications",
        icon: <BellIcon size={17} />,
    },
    {
        name: "Bookmarks",
        href: "/bookmarks",
        icon: <BookmarkIcon size={17} />,
    },
    {
      name: "Box.me",
      href: "/me",
      icon: <EyeIcon size={17} />,
    },
  ];
  return (
    <div className="p-4 flex gap-4 justify-between  items-center w-full ">
    
        <div className="p-3">
        <h1><EyeIcon size={24} className="text-primary-color" /></h1>
        </div>

        <div className="flex  gap-4 h-full">
        {navLinks.map((link) => (
          <Link className="flex gap-2 p-3 items-center hover:text-primary-color hover:bg-primary-color/1 rounded-2xl" key={link.name} href={link.href}>
            {link.icon}
          </Link>
        ))}
        </div>

        <SearchComponent />
   

      <ThemeSwitch />
    </div>
  );
};

export default SideBar;
