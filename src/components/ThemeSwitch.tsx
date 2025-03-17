"use client"

import { DarkModeIcon, LightModeIcon } from "./Icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        <div className="w-8 h-8 animate-spin rounded-full border-[3px] border-solid border-current border-r-transparent motion-reduce:animate-spin-slow"></div>
    }

    if (resolvedTheme === "dark") { 

        return  <div onClick={() => setTheme("light")}>
<LightModeIcon  />
        </div> 
    }

    return <div onClick={() => setTheme("dark")}>
    <DarkModeIcon  />

    </div>
   
}