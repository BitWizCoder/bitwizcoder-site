"use client";

import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <div className="container max-w-[954px] flex items-center flex-col gap-3 mx-auto mt-20 ">
      <h2 className="text-3xl">Have a Project in Mind?</h2>
      <p>Let’s Work together.</p>
      <Link
        href="mailto:mhmdnoman01@gmail.com"
        target="_blank"
        className="text-white bg-[#7E7FFD] flex items-center gap-2 py-2 px-4 rounded-sm border border-[#7E7FFD] hover:bg-white hover:text-[#7E7FFD]"
      >
        <PaperPlaneTilt size={22} />
        Contact Now
      </Link>

      {/* Social Icons */}
      <SocialIcons />
    </div>
  );
}

export default Footer;
