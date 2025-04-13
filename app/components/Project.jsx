import React from "react";

function Project(props) {
  const data = props.data;
  return (
    <div>
      <p>{data.title}</p>
    </div>
  );
}

export default Project;
