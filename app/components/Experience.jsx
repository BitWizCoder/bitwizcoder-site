import Link from "next/link";
import React from "react";

function Experience() {
  return (
    <div className="container max-w-[954px] md:mx-auto px-4">
      <h2 className="max-w-[954px] sm:mx-auto mt-20 text-2xl mb-6 font-semibold md:text-left text-center">
        Work Experience
      </h2>
      <div className="bg-primary-50 p-6 rounded-sm">
        <h2 className="text-2xl mb-2">UI/UX Designer</h2>
        <p className="mb-2">
          @{" "}
          <Link
            className="text-primary-500 italic hover:text-[#5859b1]"
            target="_blank"
            href="https://www.gridpixels.org/"
          >
            Gridpixels
          </Link>{" "}
          | Jul 2024 - Present
        </p>
        <p>
          As the lead designer, I crafted the gridpixels website and developed a
          suite of Figma templates, both premium and free-to enhance user
          engagement and drive conversions. Currently, I’m expanding the site’s
          features and functionality while designing additional templates to
          grow our library into a thriving resource for designers.
        </p>
      </div>
    </div>
  );
}

export default Experience;
