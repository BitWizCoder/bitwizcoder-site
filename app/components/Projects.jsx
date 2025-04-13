import React from "react";
import data from "../data";
import Project from "./Project";

function Projects() {
  return (
    <div>
      {data.map((item) => (
        <Project key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Projects;
