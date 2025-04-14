import React from "react";
import data from "../data/projects";
import Project from "./Project";

function Projects() {
  return (
    <>
      <h2 className="max-w-[954px] mx-auto mt-20 text-2xl mb-6 font-semibold">
        Featured Projects
      </h2>
      <div className="grid col-span-2 grid-cols-2 justify-center max-w-[954px] mx-auto">
        {data.map((item) => (
          <Project key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default Projects;
