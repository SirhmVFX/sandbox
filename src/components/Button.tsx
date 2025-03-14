"use client"

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    className?: string;
}

const Button = ({ children, variant = "primary", size = "md", className }: ButtonProps) => {
    const classNames = {
        primary: "bg-blue-500 hover:bg-blue-700 ",
        secondary: "bg-gray-300 hover:bg-gray-400 text-gray-800",
    };

    return (
        <button
            className={`${classNames[variant]} ${size === "sm" ? "px-2 py-1 text-sm" : size === "md" ? "p-2" : "px-6 py-3 text-lg"} rounded-md ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;