import React from "react";

import Logo from "images/v502_768.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <img
        src={Logo}
        alt="logo"
        style={{ width: 48, height: 48 }}
        className="filter brightness-0 invert"
      />
      <button className="toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 filter brightness-0 invert"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
