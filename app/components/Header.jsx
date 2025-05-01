import { DownloadSimple, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex flex-col items-center mt-14">
      <Image src="/dp.png" width={140} height={141} alt="Profile Picture" />

      <p className="mt-4">Hello, I'm</p>
      <h1 className="text-2xl">Md. Noman</h1>
      <p>UI Designer</p>

      <div className="flex flex-col sm:flex-row gap-4 my-6">
        <Link
          href="/CV - Noman.pdf"
          target="_blank"
          className="text-white bg-[#7E7FFD] flex items-center gap-2 py-2 px-4 rounded-sm border border-[#7E7FFD] hover:bg-white hover:text-[#7E7FFD]"
        >
          <DownloadSimple size={22} />
          Download CV
        </Link>

        <Link
          href="mailto:mhmdnoman01@gmail.com"
          target="_blank"
          className="hover:text-white hover:bg-[#7E7FFD] flex items-center gap-2 py-2 px-4 rounded-sm border border-[#7E7FFD] bg-white text-[#7E7FFD]"
        >
          <PaperPlaneTilt size={22} />
          Contact Now
        </Link>
      </div>

      <p className="max-w-[709px] text-center mx-6 mb-1">
        I'm a passionate UI Designer and a Front-End Developer with hands-on experience crafting visually
        appealing and user-friendly interfaces for the web. With a strong
        foundation in{" "}
        <Link
          className="text-primary-500 italic hover:text-[#5859b1]"
          target="_blank"
          href="https://dribbble.com/BitWizCoder"
        >
          Figma
        </Link>
        , Adobe{" "}
        <Link
          className="text-primary-500 italic hover:text-[#5859b1]"
          target="_blank"
          href="https://www.behance.net/BitWizCoder"
        >
          Photoshop
        </Link>{" "}
        and{" "}
        <Link
          className="text-primary-500 italic hover:text-[#5859b1]"
          target="_blank"
          href="https://www.behance.net/BitWizCoder"
        >
          Illustrator
        </Link>
        , I bring creativity and precision to every project.
      </p>

      <p className="max-w-[709px] text-center mx-6">
        My additional skills in{" "}
        <Link
          className="text-primary-500 italic hover:text-[#5859b1]"
          target="_blank"
          href="https://github.com/BitWizCoder"
        >
          web development
        </Link>{" "}
        allow me to bridge the gap between design and functionality, ensuring
        seamless and responsive user experiences.
      </p>
    </div>
  );
}

export default Header;
