import Title from "@/app/components/uicomponents/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BornList = ({ data }) => {
  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    if (
      month < birthDate.getMonth() ||
      (month === birthDate.getMonth() && day < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <div className="py-5">
      {data.map((item) => {
        const displayName = item.stageName || item.name;
        return (
          <div key={item._id} className="flex-center flex-col w-52">
            <Link
              href={`/artists/${item._id}`}
              className="flex-center flex-col"
            >
              <Image
                className="rounded-full w-52 h-52 object-cover hover-image"
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                quality={70}
              />
              <Title className="text-lightgray">{displayName}</Title>
              <span className="font-bold">{calculateAge(item.birth)}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BornList;
