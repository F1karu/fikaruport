import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
};

export const ButtonSuccess = ({ children, type, onClick, className }: Props) => {
    return (
        <button
            className={`text-sm bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 font-bold ${className}`}
            type={type}
            onClick={() => { if (onClick) onClick(); }}
        >
            {children}
        </button>
    );
};

export const ButtonWarning = ({ children, type, onClick, className }: Props) => {
    return (
        <button
            className={`text-sm bg-yellow-500 text-white rounded-md py-2 px-4 hover:bg-yellow-600 font-bold ${className}`}
            type={type}
            onClick={() => { if (onClick) onClick(); }}
        >
            {children}
        </button>
    );
};

export const ButtonDanger = ({ children, type, onClick, className }: Props) => {
    return (
        <button
            className={`text-sm bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 font-bold ${className}`}
            type={type}
            onClick={() => { if (onClick) onClick(); }}
        >
            {children}
        </button>
    );
};

// New Button: Primary (Blue)
export const ButtonPrimary = ({ children, type, onClick, className }: Props) => {
    return (
        <button
            className={`text-sm bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 font-bold ${className}`}
            type={type}
            onClick={() => { if (onClick) onClick(); }}
        >
            {children}
        </button>
    );
};

// New Button: Info (Light Blue)
export const ButtonInfo = ({ children, type, onClick, className }: Props) => {
    return (
        <button
            className={`text-sm bg-teal-500 text-white rounded-md py-2 px-4 hover:bg-teal-600 font-bold ${className}`}
            type={type}
            onClick={() => { if (onClick) onClick(); }}
        >
            {children}
        </button>
    );
};

export const ButtonPrank = ({ children, type, onClick, className }: Props) => {
    return (
        <button
            className={`text-sm bg-cyan-500 text-white rounded-md py-2 px-4 hover:bg-cyan-600 font-bold ${className}`}
            type={type}
            onClick={() => { if (onClick) onClick(); }}
        >
            {children}
        </button>
    );
};
