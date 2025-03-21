export const DarkModeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-moon-star-icon lucide-moon-star"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
  </svg>
);

export const LightModeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-sun-moon-icon lucide-sun-moon"
  >
    <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.9 4.9 1.4 1.4" />
    <path d="m17.7 17.7 1.4 1.4" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.3 17.7-1.4 1.4" />
    <path d="m19.1 4.9-1.4 1.4" />
  </svg>
);

export const BoxIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-box-icon lucide-box ${className}`}
  >
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

export const WriteIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-pencil-icon lucide-pencil ${className}`}
  >
    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    <path d="m15 5 4 4" />
  </svg>
);

export const BellIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-bell-dot-icon lucide-bell-dot ${className}`}
  >
    <path d="M10.268 21a2 2 0 0 0 3.464 0" />
    <path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665" />
    <circle cx="18" cy="8" r="3" />
  </svg>
);

export const BookmarkIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-bookmark-icon lucide-bookmark ${className}`}
  >
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  </svg>
);

export const EyeIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-eye-closed-icon lucide-eye-closed ${className}`}
  >
    <path d="m15 18-.722-3.25" />
    <path d="M2 8a10.645 10.645 0 0 0 20 0" />
    <path d="m20 15-1.726-2.05" />
    <path d="m4 15 1.726-2.05" />
    <path d="m9 18 .722-3.25" />
  </svg>
);

export const MediaIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-image-play-icon lucide-image-play ${className}`}
  >
    <path d="m11 16-5 5" />
    <path d="M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5" />
    <path d="M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z" />
    <circle cx="9" cy="9" r="2" />
  </svg>
);

export const FileIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-file-icon lucide-file ${className}`}
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>
);

export const GifIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-sticker-icon lucide-sticker ${className}`}
  >
    <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
    <path d="M14 3v4a2 2 0 0 0 2 2h4" />
    <path d="M8 13h.01" />
    <path d="M16 13h.01" />
    <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
  </svg>
);

export const PollIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-list-todo-icon lucide-list-todo ${className}`}
  >
    <rect x="3" y="5" width="6" height="6" rx="1" />
    <path d="m3 17 2 2 4-4" />
    <path d="M13 6h8" />
    <path d="M13 12h8" />
    <path d="M13 18h8" />
  </svg>
);

export const EmojiIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-meh-icon lucide-meh ${className}`}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="8" x2="16" y1="15" y2="15" />
    <line x1="9" x2="9.01" y1="9" y2="9" />
    <line x1="15" x2="15.01" y1="9" y2="9" />
  </svg>
);

export const ShareIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
  fill?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-share2-icon lucide-share-2 ${className}`}
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </svg>
);

export const StarIcon = ({
  size,
  className,
  fill,
}: {
  size: number;
  className?: string;
  fill?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-star-icon lucide-star ${className}`}
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

export const CommentIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={`lucide lucide-message-circle-icon lucide-message-circle ${className}`}
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

export const UpVoteIcon = ({
  size,
  fill
}: {
  size: number;
  fill?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 25 25"
    fill="none"
  >
    <path
      d="M19.505 12.2833L12.9912 3.17877C12.933 3.09762 12.8563 3.03148 12.7675 2.9858C12.6787 2.94011 12.5803 2.9162 12.4805 2.91602H12.479C12.3787 2.91623 12.28 2.94036 12.1909 2.9864C12.1019 3.03245 12.0251 3.09908 11.967 3.18077L5.49521 12.2853C5.42823 12.3794 5.38851 12.4901 5.38044 12.6053C5.37237 12.7205 5.39625 12.8358 5.44946 12.9383C5.50232 13.0409 5.58247 13.127 5.6811 13.187C5.77972 13.2471 5.893 13.2787 6.00846 13.2785H9.05421L9.05396 21.4558C9.05393 21.5384 9.07018 21.6202 9.10178 21.6965C9.13338 21.7728 9.17972 21.8421 9.23813 21.9005C9.29655 21.9589 9.36591 22.0052 9.44223 22.0368C9.51856 22.0684 9.60036 22.0846 9.68296 22.0845L15.3182 22.0843C15.4008 22.0843 15.4827 22.068 15.559 22.0364C15.6354 22.0048 15.7047 21.9585 15.7631 21.9C15.8216 21.8416 15.8679 21.7722 15.8995 21.6958C15.9311 21.6195 15.9473 21.5376 15.9472 21.455V13.2788H18.994C19.229 13.2788 19.4447 13.1463 19.5532 12.937C19.6062 12.8342 19.6298 12.7187 19.6212 12.6033C19.6127 12.488 19.5725 12.3772 19.505 12.2833Z"
      fill={fill}
    />
  </svg>
);


export const FileSearch = ({
    size,
    className,
}: {
    size: number;
    className?: string;
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-search-icon lucide-search ${className}`}><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
);
    
