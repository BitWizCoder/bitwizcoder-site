import Image from "next/image";
import Link from "next/link";
import React from "react";

function Project(props) {
  const data = props.data;
  return (
    <div className="max-w-[460px] rounded-md shadow-xs border border-primary-50">
      <Link target="_blank" href={data.link}>
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
          <Image
            className="w-full h-auto relative z-0 rounded-lg transition-all duration-400 hover:scale-110"
            src={data.image}
            width={460}
            height={299}
            alt="Project Image"
          />
        </div>
        <div className="p-3">
          <p className="text-2xl mb-2 hover:text-primary-500">{data.title}</p>
          <p>{data.details}</p>
        </div>
      </Link>
    </div>
  );
}

export default Project;
