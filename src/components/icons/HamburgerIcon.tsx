import React from "react";

interface HamburgerIconProps {
  isOpen?: boolean; // Optional prop to control open/closed state
  size?: number; // Optional for size control
  color?: string; // Optional for color customization
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  isOpen = false,
  size = 24,
  color = "white",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </svg>
  );
};

export default HamburgerIcon;
