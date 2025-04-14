import React from "react";
import data from "../data/tools";
import Tool from "./Tool";

function Tools() {
  return (
    <div>
      <>
        <h2 className="text-center mt-20 text-2xl mb-6 font-semibold">Tools</h2>
        <div className="flex gap-20 items-center justify-center max-w-[954px] mx-auto">
          {data.map((item) => (
            <Tool key={item.id} data={item} />
          ))}
        </div>
      </>
    </div>
  );
}

export default Tools;
