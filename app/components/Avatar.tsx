import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      height={40}
      width={40}
      alt="avatar"
      className="rounded-full"
      src="/images/placeholder.png"
    />
  );
};

export default Avatar;
