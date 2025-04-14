import React from "react";
import data from "../data/projects";
import Project from "./Project";

function Projects() {
  return (
    <>
      <h2 className="max-w-[954px] sm:mx-auto mt-20 text-2xl mb-6 font-semibold md:text-left text-center">
        Featured Projects
      </h2>
      <div className="grid col-span-1 grid-cols-1 md:col-span-2 md:grid-cols-2 justify-center justify-items-center gap-6 max-w-[954px] md:mx-auto m-2">
        {data.map((item) => (
          <Project key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default Projects;
