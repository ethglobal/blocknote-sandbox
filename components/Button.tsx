import classNames from "classnames";
import React from "react";

interface IProps {
  className?: string;
  children: React.ReactNode;
  color?:
    | "black"
    | "black-line"
    | "white"
    | "purple"
    | "green"
    | "red"
    | "discord"
    | "transparent-white"
    | "white-line";
  fullWidth?: boolean;
  pill?: Boolean;
  size?: "small" | "regular";
  type?: "button" | "submit";
  target?: "_blank";
  href?: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  loading?: boolean;
  style?: any;
}

export default function Button({
  className,
  children,
  color = "black",
  fullWidth,
  pill,
  size = "regular",
  type,
  target,
  href,
  onClick,
  disabled,
  loading,
  style,
}: IProps) {
  let colorClasses = "bg-black text-white border-black hover:opacity-90";

  if (color === "black-line") {
    colorClasses = "bg-transparent text-black hover:border-black";
  } else if (color === "white") {
    colorClasses = "bg-white text-black border-black hover:opacity-90";
  } else if (color === "green") {
    colorClasses = "bg-green-450 text-white border-green-450 hover:opacity-90";
  } else if (color === "purple") {
    colorClasses = "bg-purple text-white border-purple hover:opacity-90";
  } else if (color === "red") {
    colorClasses = "bg-red-600 border-red-600 text-white hover:opacity-90";
  } else if (color === "discord") {
    colorClasses = "bg-discord text-white border-discord hover:opacity-90";
  } else if (color === "transparent-white") {
    colorClasses =
      "bg-transparent text-white border-transparent hover:opacity-90";
  } else if (color === "white-line") {
    colorClasses =
      "bg-transparent text-white border-white border-opacity-10 hover:bg-white hover:text-black hover:border-white";
  }

  if (type) {
    return (
      <button
        type={type}
        className={classNames(
          "relative flex items-center justify-center appearance-none cursor-pointer text-center border-2 font-semibold transition duration-200 disabled:opacity-70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none",
          colorClasses,
          fullWidth && "w-full h-16",
          pill ? "rounded-full" : "rounded",
          size === "regular" ? "px-4 py-3 text-lg" : "px-4 py-1.5",
          className
        )}
        onClick={onClick}
        disabled={disabled === true || loading === true}
        style={style}
      >
        {children}

        {loading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin ml-3 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
      </button>
    );
  }

  if (href) {
    return (
      <a
        target={target}
        href={href}
        rel="noopener noreferrer"
        className={classNames(
          "relative inline-flex items-center justify-center cursor-pointer text-center border-2 font-semibold transition-colors duration-200",
          colorClasses,
          fullWidth ? "w-full" : "inline-block",
          pill ? "rounded-full" : "rounded",
          size === "regular" ? "px-4 py-3 text-lg" : "px-4 py-1.5",
          className
        )}
        style={style}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      onClick={onClick}
      className={classNames(
        "relative cursor-pointer text-center border-2 font-semibold transition-colors duration-200",
        colorClasses,
        fullWidth ? "block" : "inline-block",
        pill ? "rounded-full" : "rounded",
        size === "regular" ? "px-4 py-3 text-lg" : "px-4 py-1.5",
        className
      )}
      style={style}
    >
      {children}
    </span>
  );
}
