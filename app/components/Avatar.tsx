"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      height={40}
      width={40}
      alt="avatar"
      className="rounded-full"
      src={src || "/images/placeholder.png"}
    />
  );
};

export default Avatar;
