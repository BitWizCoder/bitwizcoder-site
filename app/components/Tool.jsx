import Image from "next/image";
import React from "react";

function Tool(props) {
  const data = props.data;
  return (
    <div className="relative px-8 py-6 rounded-sm bg-primary-50 cursor-pointer hover:scale-125 transition-transform duration-500 text-center">
      <Image src={data.image} width={34} height={46} alt="brand logo" />
      {/* <p className="absolute">{data.title}</p> */}
    </div>
  );
}

export default Tool;
