import Image from "next/image";
import Link from "next/link";
import React from "react";

function Project(props) {
  const data = props.data;
  return (
    <div className="max-w-[460px] bg-primary-50">
      <Link target="_blank" href={data.link}>
        <Image
          src={data.image}
          width={460}
          height={299}
          alt="Profile Picture"
        />
        <div className="p-3">
          <p className="text-2xl mb-2 hover:text-primary-500">{data.title}</p>
          <p>{data.details}</p>
        </div>
      </Link>
    </div>
  );
}

export default Project;
