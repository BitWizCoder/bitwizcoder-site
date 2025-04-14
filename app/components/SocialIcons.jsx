"use client";

import {
  BehanceLogo,
  DribbbleLogo,
  FacebookLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";

function SocialIcons() {
  // Track hover state for each icon
  const [hoverStates, setHoverStates] = useState({
    facebook: false,
    x: false,
    dribbble: false,
    linkedin: false,
    behance: false,
  });

  // Toggle hover state for a specific icon
  const toggleHover = (iconName, isHovered) => {
    setHoverStates((prev) => ({ ...prev, [iconName]: isHovered }));
  };

  return (
    <>
      {/* Social Icons */}
      <div className="flex gap-6 my-6">
        {/* Facebook */}
        <Link href="https://www.facebook.com/BitWizCoder">
          <FacebookLogo
            size={38}
            weight={hoverStates.facebook ? "fill" : "regular"}
            className="transition-all duration-300 text-primary-500"
            onMouseEnter={() => toggleHover("facebook", true)}
            onMouseLeave={() => toggleHover("facebook", false)}
          />
        </Link>

        {/* X (Twitter) */}
        <Link href="https://x.com/BitWizCoder">
          <XLogo
            size={38}
            weight={hoverStates.x ? "fill" : "regular"}
            className="transition-all duration-300 text-primary-500"
            onMouseEnter={() => toggleHover("x", true)}
            onMouseLeave={() => toggleHover("x", false)}
          />
        </Link>

        {/* Dribbble */}
        <Link href="https://dribbble.com/BitWizCoder">
          <DribbbleLogo
            size={38}
            weight={hoverStates.dribbble ? "fill" : "regular"}
            className="transition-all duration-300 text-primary-500"
            onMouseEnter={() => toggleHover("dribbble", true)}
            onMouseLeave={() => toggleHover("dribbble", false)}
          />
        </Link>

        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/in/bitwizcoder/">
          <LinkedinLogo
            size={38}
            weight={hoverStates.linkedin ? "fill" : "regular"}
            className="transition-all duration-300 text-primary-500"
            onMouseEnter={() => toggleHover("linkedin", true)}
            onMouseLeave={() => toggleHover("linkedin", false)}
          />
        </Link>

        {/* Behance */}
        <Link href="https://www.behance.net/BitWizCoder">
          <BehanceLogo
            size={38}
            weight={hoverStates.behance ? "fill" : "regular"}
            className="transition-all duration-300 text-primary-500"
            onMouseEnter={() => toggleHover("behance", true)}
            onMouseLeave={() => toggleHover("behance", false)}
          />
        </Link>
      </div>
    </>
  );
}

export default SocialIcons;
