import Image from "next/image";
import Link from "next/link";
import React from "react";

function Project(props) {
  const data = props.data;
  return (
    <div className="w-[460px]">
      <Link target="_blank" href={data.link}>
        <Image
          src={data.image}
          width={460}
          height={299}
          alt="Profile Picture"
        />
        <p className="text-2xl w-80">{data.title}</p>
        <p className="w-80">{data.details}</p>
      </Link>
    </div>
  );
}

export default Project;
