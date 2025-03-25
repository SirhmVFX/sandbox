export interface SidebarLink {
    name: string;
    href: string;
    icon: React.ReactNode;
}

export interface TrendPost {
    id: number;
    text: string;
    trendWord: string;
}

export interface IconsInterface {
        size: number;
        className?: string;
}